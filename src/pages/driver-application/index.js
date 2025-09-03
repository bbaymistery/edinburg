import GlobalLayout from '../../components/layouts/GlobalLayout';
import { checkLanguageAttributeOntheUrl } from '../../helpers/checkLanguageAttributeOntheUrl';
import { isUrlLoverCase } from '../../helpers/isUrlLoverCase';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { parse } from 'url';
import { driversWantedKeywords, getSingleDriverWantedSchema } from '../../constants/keywordsAndContents/sofor-araniyor/keywordsAndContent';
import { adjustPathnameForLanguage } from '../../helpers/adjustedPageLanguage';
import { parseCookies } from '../../helpers/cokieesFunc';
import { createMetaTagElementsClientSide, renderSchemaScriptsClientSide } from '../../helpers/schemaMetaTagHelper';
import { setNoCacheHeader } from '../../helpers/setNoCacheHeader';
import { fetchConfig } from '../../resources/getEnvConfig';
import styles from "./styles.module.scss";
import BreadCrumb from './breadCrubm';
import Alert from '../../components/elements/alert/Alert';
import AdressInformations from '../../components/elements/AdressInformations';
import { currentDate } from '../../helpers/getDates';
import React, { useState } from 'react';
import DriverPersonalInfoForm from './DriverPersonalInfoForm';
import DriverVehicleInfoForm from './DriverVehicleInfoForm';
import Button from '../../components/elements/Button/Button';
import { BUTTON_TYPES } from '../../components/elements/Button/ButtonTypes';
import DriverPreferredLocationForm from './DriverPreferredLocationForm';
import { generalAllTranslations } from '../../constants/generalTranslataions';
import { htmlContentDriverResult, htmlTemplate, validateForm } from '../../constants/keywordsAndContents/driver/driverAplicationConstants';
import DangerouslyInnerHtml from '../../components/elements/DangerouslyInnerHtml';



const SoforBasvuruFormu = (props) => {
  let { metaDescription, keywords, headTitle } = props

  const state = useSelector(state => state.pickUpDropOffActions)
  let { params: { direction, language = "en" } } = state

  const { appData } = useSelector(state => state.initialReducer)

  const initialState = {
    fullname: "",
    birthdate: currentDate(),
    phone: "",
    email: "",
    address: "",
    isOwner: "yes",
    vehicleMakeModel: "",
    vehicleYear: "",
    licensePlate: "",
    passengerCapacity: "",
    preferredLocation: [],
    otherLocation: ""
  };

  const [internalState, setInternalState] = React.useReducer((s, o) => ({ ...s, ...o }), initialState);

  const [templateWasSent, setTemplateWasSent] = useState(false);

  const [error, setError] = React.useState({});
  const dispatch = useDispatch();

  const onChangeHandler = React.useCallback((e) => {

    const { name, value, type, checked } = e.target;
    // 👆 input’tan gelen temel bilgileri alıyoruz (ör: name="preferredLocation", value="edinburgh", type="checkbox", checked=true/false)

    if (type === "checkbox" && name === "preferredLocation") {
      // 👆 Sadece bizim checkbox grubumuz için çalışsın (preferredLocation alanı)

      const prevArr = Array.isArray(internalState.preferredLocation) ? internalState.preferredLocation : [];
      // 👆 State’te preferredLocation dizisi varsa onu alıyoruz, yoksa boş dizi.

      if (checked) {
        // ✅ Checkbox işaretlenmiş (seçilmiş)

        if (value === "other") {
          // Eğer seçilen "other" ise,
          // diğer tüm seçimleri kaldırıp sadece ["other"] yapıyoruz
          setInternalState({ preferredLocation: ["other"] });
        } else {
          // Normal bir şehir seçildiyse:
          // - Eğer önceden "other" işaretliyse onu kaldırıyoruz
          const withoutOther = prevArr.filter((v) => v !== "other");

          // - Eğer seçilen şehir zaten dizide varsa dokunma,
          //   yoksa ekle
          const next = withoutOther.includes(value) ? withoutOther : [...withoutOther, value];

          // - Yeni diziyi state’e yaz
          setInternalState({ preferredLocation: next });
        }
      } else {
        // ❌ Checkbox kaldırılıyor (işaret kaldırıldı)

        if (value === "other") {
          // "other" kaldırıldıysa diziden çıkar
          const next = prevArr.filter((v) => v !== "other");

          // Ayrıca otherLocation inputunu da temizle (boş yap)
          setInternalState({ preferredLocation: next, otherLocation: "" });
        } else {
          // Normal şehir kaldırıldıysa sadece o şehri sil
          const next = prevArr.filter((v) => v !== value);
          setInternalState({ preferredLocation: next });
        }
      }
    } else {
      // 👇 Checkbox değilse (ör: text input, textarea, radio)
      // Normal şekilde name–value eşleşmesini güncelle
      setInternalState({ [name]: value });
    }

    // Eğer bu alan için hata kaydı varsa (error[name]),
    // temizle (hata mesajını kaldır).
    if (error[name]) {
      setError((prev) => ({ ...prev, [name]: "" }));
    }
  }, [internalState.preferredLocation, error, setInternalState, setError]);

  const initializeState = () => setTimeout(() => { setInternalState(initialState) }, 2500);

  const handleSend = async () => {
    const validationErrors = validateForm(internalState, language);
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
      return;
    }
    const HTML_TEMPLATE = htmlTemplate(internalState);
    sendDriverForm(HTML_TEMPLATE);

  };

  const sendDriverForm = async (htmlTemplate) => {
    const env = await fetchConfig();
    try {
      dispatch({ type: "ALERT", payload: { loading: true } })
      const reqOptions = {
        method: "POST",
        headers: { "Accept": "application/json, text/plain, */*", "Content-Type": "application/json" },
        body: JSON.stringify({ senderId: 7, reciverMails: ["info@apl-edinburgh.com"], subject: "New Driver Application", mailContent: htmlTemplate })
      };

      fetch(`${env.apiDomain}/tools/mailer`, reqOptions)
        .then((res) => {
          console.log(res);
          dispatch({ type: "ALERT", payload: { loading: false } })
          if (res.status === 200) {
            setTemplateWasSent(true);
            setTimeout(() => {
              setTemplateWasSent(false)
            })
            dispatch({ type: "ALERT", payload: { success: "Your application has been successfully received. We will contact you as soon as possible." } })
          }
          initializeState()
        })
        .catch((e) => {
          console.log(e);
          dispatch({ type: "ALERT", payload: { loading: false } })
          initializeState()
          dispatch({ type: "ALERT", payload: { errors: "Something went wrong Please try to contact with us " } })
        });

    } catch (error) {
      dispatch({ type: "ALERT", payload: { loading: false } })
      dispatch({ type: "ALERT", payload: { errors: "Something went wrong Please try to contact with us " } })

    }
  };


  return (
    <GlobalLayout title={headTitle} keywords={keywords} description={metaDescription} >
      <Head >
        <link rel="canonical" href={props.mainCanonical} />
        {/* {createMetaTagElementsClientSide(props.metaTags)} */}
        {renderSchemaScriptsClientSide(props.schemas)}
      </Head>
      <div className={`${styles.sofor_basvuru_formu} ${direction} page`} >
        <BreadCrumb title="" />
        <div className={`${styles.sofor_basvuru_formu_section} page_section`}>
          <Alert />
          <div className={`${styles.sofor_basvuru_formu_section_container} page_section_container`}>
            <div className={styles.contact_area}>
              {templateWasSent ?
                <div className={styles.forms}>
                  <DangerouslyInnerHtml htmContent={htmlContentDriverResult[language]} />
                </div>
                :
                <div className={styles.forms}>
                  <DriverPersonalInfoForm internalState={internalState} onChangeHandler={onChangeHandler} error={error} language={language} />
                  <DriverVehicleInfoForm internalState={internalState} onChangeHandler={onChangeHandler} error={error} language={language} />
                  <DriverPreferredLocationForm selectedLocation={internalState.preferredLocation} onChangeHandler={onChangeHandler} language={language} error={error} />
                  <div>
                    <Button onBtnClick={handleSend} type={BUTTON_TYPES.PRIMARY} style={{ padding: "10px 28.5px", width: '100%' }} btnText={generalAllTranslations.strSend[language]} />
                  </div>
                </div>}
            </div>
            <div className={styles.address_area}>
              <AdressInformations direction={direction} appData={appData} />
            </div>
          </div>
        </div>
      </div>
    </GlobalLayout>
  );
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



  let metaDescription = driversWantedKeywords.metaDescription[pageStartLanguage]
  let keywords = driversWantedKeywords.keywords[pageStartLanguage];
  let headTitle = driversWantedKeywords.headTitle[pageStartLanguage];
  const env = await fetchConfig();
  const mainCanonical = `${env.websiteDomain}/driver-application`
  const schemas = [getSingleDriverWantedSchema(pathname, pageStartLanguage)]
  // const metaTags = getMetaTagsDriversWanted(pathname, pageStartLanguage, env);
  return {
    //we pass tourdetails fot adding inside redux generally all together
    props: {
      metaDescription, keywords, headTitle, mainCanonical, schemas, metaTags: []
    }
  };


}
export default SoforBasvuruFormu