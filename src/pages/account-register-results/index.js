import { useEffect } from 'react'
import styles from "./styles.module.scss"
import GlobalLayout from '../../components/layouts/GlobalLayout'
import { useSelector } from 'react-redux'
import AdressInformations from '../../components/elements/AdressInformations'
import store from '../../store/store'
import { createWrapper } from 'next-redux-wrapper'
import { BUTTON_TYPES } from '../../components/elements/Button/ButtonTypes'
import Button from '../../components/elements/Button/Button'
import { useRouter, } from 'next/router'
import { registerAccountResultsKeywords } from '../../constants/keywordsAndContents/registerAccount/keywordsAndContents'
import { setNoCacheHeader } from '../../helpers/setNoCacheHeader'
import { isUrlLoverCase } from '../../helpers/isUrlLoverCase'
import { parseCookies } from '../../helpers/cokieesFunc'
import { checkLanguageAttributeOntheUrl } from '../../helpers/checkLanguageAttributeOntheUrl'
import { parse } from 'url';
import { adjustPathnameForLanguage } from '../../helpers/adjustedPageLanguage'
import { fetchConfig } from '../../resources/getEnvConfig'


const AccountRegisterResults = (props) => {
    let { metaDescription, keywords, headTitle, env } = props


    const state = useSelector(state => state.pickUpDropOffActions)
    let { params: { direction, language } } = state

    const { appData } = useSelector(state => state.initialReducer)

    const { accountRegisterDatas } = useSelector(state => state.accountRegisterActions)

    let { applicantForCreditAccount, contactDetails, operationNotes } = accountRegisterDatas
    let { contactName, jobTitle, email, telephoneNo } = contactDetails
    let { companyName, natureOfBusiness, address, registrationNo } = applicantForCreditAccount
    let { urgentSituationStatus, accountPassengerStatus, anyOtherOperationComments, urgentSituationNumber } = operationNotes

    const router = useRouter()
    useEffect(() => {
        //scroll to top
        window.scrollTo(0, 0)

        const confirmationMessage = "If you leave the page, all data will be deleted."

        const beforeUnloadHandler = (e) => {
            e.preventDefault()
            e.returnValue = confirmationMessage // required for Chrome
            return confirmationMessage
        }

        // Prevent BACK button (in-browser navigation)
        const disableBackButton = () => {
            window.history.pushState(null, "", window.location.href)
            window.onpopstate = () => {
                window.history.pushState(null, "", window.location.href)
                alert(confirmationMessage)
            }
        }

        disableBackButton()

        // Prevent browser close / refresh
        window.addEventListener("beforeunload", beforeUnloadHandler)

        // Optional: Block all route changes in Next.js (internal link clicks)
        const handleRouteChangeStart = (url) => {
            if (url !== router.asPath) {
                const confirmLeave = window.confirm(confirmationMessage)
                if (!confirmLeave) {
                    router.events.emit("routeChangeError")
                    throw "Abort route change. This error is caught automatically by Next.js."
                }
            }
        }

        router.events.on("routeChangeStart", handleRouteChangeStart)


        return () => {
            window.removeEventListener("beforeunload", beforeUnloadHandler)
            router.events.off("routeChangeStart", handleRouteChangeStart)
            window.onpopstate = null
        }
    }, [router])


    return (
        <GlobalLayout mainCanonical={props.mainCanonical} keywords={keywords} title={headTitle} description={metaDescription} >
            <div className={`${styles.account_results_details} page`} >
                <div className={`${styles.account_results_details_section} page_section`}>
                    <div className={`${styles.account_results_details_section_container} page_section_container`}>

                        <div className={styles.content}>
                            <div className={styles.left_content}>
                                <h1 >{appData?.words["strRegistrationCompletedSuccessfully"]}</h1>
                                <div className={styles.info_section}>
                                    {/*//! Applicant for credit */}

                                    <h2>{appData.words["strApplicationForCreditAccount"]}</h2>
                                    <div className={`${styles.info} ${styles.companyName_info} ${direction}`}>
                                        <div className={styles.left}>{appData?.words["strCompanyName"]}/Sole Trader Name</div>
                                        <div className={styles.right}>{companyName} </div>
                                    </div>
                                    <div className={`${styles.info} ${direction}`}>
                                        <div className={styles.left}>{appData?.words["strNatureOfBusiness"]} </div>
                                        <div className={styles.right}>{natureOfBusiness}</div>
                                    </div>
                                    {/*  */}
                                    {registrationNo.length > 0 ?
                                        <div className={`${styles.info} ${direction}`}>
                                            <div className={styles.left}>{appData?.words["strRegistrationNo"]}</div>
                                            <div className={styles.right}>{registrationNo}</div>
                                        </div> : <></>}
                                    <div className={`${styles.info} ${direction}`}>
                                        <div className={styles.left}>{appData?.words["strAddress"]}</div>
                                        <div className={styles.right}>{address}</div>
                                    </div>

                                    {/* //!Contact details */}

                                    <h2 style={{ marginTop: '1.5rem' }}>{appData.words["strContactDetails"]}</h2>
                                    <div className={`${styles.info} ${direction}`}>
                                        <div className={styles.left}>{appData?.words["panelAccountsContactName"]} </div>
                                        <div className={styles.right}>{contactName}</div>
                                    </div>

                                    <div className={`${styles.info} ${direction}`}>
                                        <div className={styles.left}>{appData?.words["panelAccountsJobTitle"]}</div>
                                        <div className={styles.right}>{jobTitle}</div>
                                    </div>

                                    <div className={`${styles.info} ${direction}`}>
                                        <div className={styles.left}>{appData?.words["panelAccountsTelephone"]}</div>
                                        <div className={styles.right}>{telephoneNo}</div>
                                    </div>
                                    <div className={`${styles.info} ${direction}`}>
                                        <div className={styles.left}>{appData?.words["appContactUsEmailAddress"]}</div>
                                        <div className={styles.right}>{email}</div>
                                    </div>


                                    {/* //!Contact details */}
                                    <h2 style={{ marginTop: '1.5rem' }}>Operation Notes</h2>
                                    <div className={`${styles.info} ${styles.operationNotes_info} ${direction}`}>
                                        <div className={styles.left} style={{ textTransform: "inherit" }}>{appData?.words["strDoYouHaveAnyOutOfHours"]}</div>
                                        {urgentSituationStatus === 'Yes' ? <div className={styles.right}>+ {urgentSituationNumber}</div> : <div className={styles.right}>{urgentSituationStatus}</div>}
                                    </div>

                                    <div className={`${styles.info} ${styles.operationNotes_info} ${direction}`}>
                                        <div className={styles.left} style={{ textTransform: "inherit" }}>{appData?.words["strInCaseOfExtraPayment"]}</div>
                                        <div className={styles.right}>{accountPassengerStatus}</div>
                                    </div>

                                    <div className={`${styles.info} ${styles.operationNotes_info} ${direction}`}>
                                        <div className={styles.left} style={{ textTransform: "inherit" }}>{appData?.words["strAnyOtherOperationComments"]}</div>
                                        <div className={styles.right}>{anyOtherOperationComments ? anyOtherOperationComments : '--'}</div>
                                    </div>
                                    <div className={styles.buttons}>
                                        <a href={language === 'en' ? '/' : `/${language}`}>
                                            <Button type={BUTTON_TYPES.PRIMARY_OUTLINE} style={{ padding: "10px 28.5px", }} btnText={`${appData?.words["strNavHome"]}`} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.contact_section}>
                                <AdressInformations appData={appData} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </GlobalLayout>
    )
}

export default AccountRegisterResults
const makestore = () => store;
const wrapper = createWrapper(makestore);

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req, res, query, resolvedUrl }) => {

    const initialLanguages = store.getState().initialReducer?.appData?.languages
    const langs = initialLanguages.map((lang) => lang.value)

    for (let i = 0; i < langs.length; i++) {
        const lang = langs[i]
        const langUrl = lang === 'en' ? '/account-register-results' : `/${lang}/account-register-results`
        if (req.url === langUrl) {
            return {
                redirect: {
                    destination: lang === 'en' ? "/" : `/${lang}`,
                    permanent: false
                }
            }
        }
    }
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
    let metaDescription = registerAccountResultsKeywords.metaDescription[pageStartLanguage]
    let keywords = registerAccountResultsKeywords.keywords[pageStartLanguage];
    let headTitle = registerAccountResultsKeywords.headTitle[pageStartLanguage];
    const env = await fetchConfig();
    const mainCanonical = `${env.websiteDomain}${pageStartLanguage === 'en' ? "/account-register-results" : `/${pageStartLanguage}/account-register-results`}`

    return {
        props: { metaDescription, keywords, headTitle, mainCanonical, env }

    }
});