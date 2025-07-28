import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from "./styles.module.scss"
import GlobalLayout from '../../components/layouts/GlobalLayout'
import { useState } from 'react'
import Alert from '../../components/elements/alert/Alert'
import TextInput from '../../components/elements/TextInput';
import BreadCrumb from "./breadCrubm";
import { parse } from 'url';
import Textarea from '../../components/elements/Textarea'
import AdressInformations from '../../components/elements/AdressInformations'
import { setNoCacheHeader } from '../../helpers/setNoCacheHeader'
import { isUrlLoverCase } from '../../helpers/isUrlLoverCase'
import { parseCookies } from '../../helpers/cokieesFunc'
import { checkLanguageAttributeOntheUrl } from '../../helpers/checkLanguageAttributeOntheUrl'
import { adjustPathnameForLanguage } from '../../helpers/adjustedPageLanguage'
import { contactUsKeywords } from '../../constants/keywordsAndContents/contactus/keywordsAndContent'
import { fetchConfig } from '../../resources/getEnvConfig'
const initialFormValue = { email: "", phone: "", subject: "", message: "", fullname: "", }
const ContactUs = (props) => {
 let { metaDescription, keywords, headTitle,env,mainCanonical } = props

    //appContactUsHeader

    const state = useSelector(state => state.pickUpDropOffActions)
    let { params: { direction, language } } = state
    const { appData } = useSelector(state => state.initialReducer)

    const dispatch = useDispatch()
    const [formValue, setFormValue] = useState(initialFormValue);
    const [error, setError] = useState(initialFormValue);
    const onChangeHandler = (e) => setFormValue((values) => ({ ...values, [e.target.name]: e.target.value }));

    const handleSend = () => {
        let newErrors = {};
        let isValid = true;
        // Check for required fields
        Object.keys(formValue).forEach((key) => {
            if (!formValue[key]) {
                newErrors[key] = "Required";
                isValid = false;
            }
        });
        if (isValid) {
            dispatch({ type: "ALERT", payload: { loading: true } })
            const method = "POST"
            const headers = { Accept: "application/json, text/plain, */*", "Content-Type": "application/json", }
            const body = JSON.stringify({
                senderId: 7,
                reciverMails: [formValue.email],
                subject: formValue.subject,
                mailContent: formValue.message
            })
            let reqOptions = { method, body, headers, };
            fetch(`${env.apiDomain}/tools/mailer`, reqOptions)
                .then((res) => {
                    dispatch({ type: "ALERT", payload: { loading: false } })
                    if (res.status === 200) {
                        dispatch({ type: "ALERT", payload: { success: "Email successfully sended" } })
                        setError({ email: "", phone: "", subject: "", message: "", fullname: "", });
                        setFormValue({ email: "", phone: "", subject: "", message: "", fullname: "", });
                    }
                })
                .catch((e) => {
                    dispatch({ type: "ALERT", payload: { errors: "Something went wrong" } })
                    setError({ email: "", phone: "", subject: "", message: "", fullname: "", });
                    setFormValue({ email: "", phone: "", subject: "", message: "", fullname: "", });
                });
        } else {
            setError((error) => ({ ...error, ...newErrors }));
        }

    }


    return (
        <GlobalLayout title={headTitle} keywords={keywords} description={metaDescription} mainCanonical={props.mainCanonical}>
            <div className={`${styles.contact_us} ${direction} page`} >
                <BreadCrumb title="" />
                <div className={`${styles.contact_us_section} page_section`}>
                    <Alert />
                    <div className={`${styles.contact_us_section_container} page_section_container`}>

                        <div className={styles.contact_area}>
                            <div className={styles.form_box}>
                                <div className={styles.form_content}>
                                    <h3 className={styles.title}>{appData?.words["strWeLoveToHearFromYou"]}</h3>
                                    <p>{appData.words["strSendUsAMessageAnd"]}</p>
                                    <div className={styles.contact_form_action}>
                                        <form className={styles.form}>
                                            <div className={styles.input_box}>
                                                <div className={styles.input}>
                                                    <TextInput label={appData?.words["appContactUsFormFullname"]} type="text" name="fullname" onChange={onChangeHandler} value={formValue.fullname} errorMessage={error.fullname} />
                                                </div>
                                                <div className={styles.input}>
                                                    <TextInput label={appData?.words["appContactUsFormSubject"]} name="subject" type="text" onChange={onChangeHandler} value={formValue.subject} errorMessage={error.subject} />
                                                </div>
                                            </div>
                                            <div className={styles.input_box}>
                                                <div className={styles.input}>
                                                    <TextInput label={appData?.words["appContactUsEmailAddress"]} name="email" type="text" onChange={onChangeHandler} value={formValue.email} errorMessage={error.email} />
                                                </div>
                                                <div className={styles.input}>
                                                    <TextInput label={appData?.words["appContactUsFormPhone"]} name="phone" type="text" onChange={onChangeHandler} value={formValue.phone} errorMessage={error.phone} />
                                                </div>
                                            </div>
                                        </form>
                                        <div className={`${styles.input} ${styles.inp_textarea}`}>
                                            <Textarea label={appData?.words["appContactUsFormMessage"]} name="message" value={formValue.message} onChange={onChangeHandler} errorMessage={error.message} />
                                        </div>
                                        <div className={styles.lodbtn}>
                                            <button onClick={handleSend} className='btn'>{appData?.words["appContactUsFormButton"]}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.address_area}>
                            <AdressInformations direction={direction} appData={appData} />
                        </div>
                    </div>
                </div>
            </div>
        </GlobalLayout>
    )
}
export async function getServerSideProps({ req, res, query, resolvedUrl }) {

    setNoCacheHeader(res, true);

    isUrlLoverCase(resolvedUrl, res)

    //get cookie and pathnames
    let cookies = parseCookies(req.headers.cookie);
    let { pathname } = parse(req.url, true)
    let pageStartLanguage = checkLanguageAttributeOntheUrl(req?.url)

    // Adjust pathname and language based on initial language
    const adjusted = adjustPathnameForLanguage(pathname, pageStartLanguage, cookies);
    pathname = adjusted.pathname;
    pageStartLanguage = adjusted.pageStartLanguage;

    let metaDescription = contactUsKeywords.metaDescription[pageStartLanguage]
    let keywords = contactUsKeywords.keywords[pageStartLanguage];
    let headTitle = contactUsKeywords.headTitle[pageStartLanguage];

    const env = await fetchConfig();
    const mainCanonical = `${env.websiteDomain}${pageStartLanguage === 'en' ? "/contact-us" : `/${pageStartLanguage}/contact-us`}`
    return {
        //we pass tourdetails fot adding inside redux generally all together
        props: { metaDescription, keywords, headTitle, mainCanonical ,env}
    };


}
export default ContactUs