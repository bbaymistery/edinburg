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
import React from 'react';
import DriverPersonalInfoForm from './DriverPersonalInfoForm';
import DriverVehicleInfoForm from './DriverVehicleInfoForm';
import Button from '../../components/elements/Button/Button';
import { BUTTON_TYPES } from '../../components/elements/Button/ButtonTypes';
import DriverPreferredLocationForm from './DriverPreferredLocationForm';
import { generalAllTranslations } from '../../constants/generalTranslataions';
const validateForm = (formState, language) => {
  const errors = {};

  // Driver Personal Info
  if (!formState.fullname.trim()) {
    errors.fullname = generalAllTranslations.strErrorFullNameRequired[language];
  }

  if (!formState.birthdate) {
    errors.birthdate = generalAllTranslations.strErrorBirthDateRequired[language];
  }

  if (!formState.phone.trim()) {
    errors.phone = generalAllTranslations.strErrorPhoneRequired[language];
  }

  if (!formState.email.trim()) {
    errors.email = generalAllTranslations.strErrorEmailRequired[language];
  } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
    errors.email = generalAllTranslations.strErrorEmailInvalid[language];
  }

  if (!formState.address.trim()) {
    errors.address = generalAllTranslations.strErrorAddressRequired[language];
  }

  // Driver Vehicle Info
  if (!formState.isOwner || (formState.isOwner !== 'yes' && formState.isOwner !== 'no')) {
    errors.isOwner = generalAllTranslations.strErrorIsOwnerRequired[language];
  }

  if (!formState.vehicleMakeModel.trim()) {
    errors.vehicleMakeModel = generalAllTranslations.strErrorVehicleMakeModelRequired[language];
  }

  if (!formState.vehicleYear.trim()) {
    errors.vehicleYear = generalAllTranslations.strErrorVehicleYearRequired[language];
  } else if (!/^\d{4}$/.test(formState.vehicleYear)) {
    errors.vehicleYear = generalAllTranslations.strErrorVehicleYearInvalid[language];
  }

  if (!formState.licensePlate.trim()) {
    errors.licensePlate = generalAllTranslations.strErrorLicensePlateRequired[language];
  }

  if (!formState.passengerCapacity.trim()) {
    errors.passengerCapacity = generalAllTranslations.strErrorVehicleCapacityRequired[language];
  }

  // --- Service areas (checkbox group) - unified validation ---
  const hasSelection = Array.isArray(formState.preferredLocation) && formState.preferredLocation.length > 0;

  const selectedOther = hasSelection && formState.preferredLocation.includes("other");

  const otherTextGiven = !!(formState.otherLocation && formState.otherLocation.trim());

  // Tercih edilen mesaj: "Lütfen en az bir hizmet bölgesi seçin veya 'Diğer'i belirtin."
  // Eğer bu stringi eklemediysen fallback olarak strErrorServiceArea'yı kullanır.

  if (!hasSelection) {
    // Hiç seçim yok -> hata
    errors.preferredLocation = generalAllTranslations.strErrorServiceAreaRequired[language];
  } else if (selectedOther && !otherTextGiven) {
    // "Other" seçili ama metin boş -> aynı hatayı preferredLocation'a yaz
    errors.preferredLocation = generalAllTranslations.strErrorOtherServiceArea[language];
  }
  // --- /Service areas ---

  return errors;
};


const SoforBasvuruFormu = (props) => {
  let { metaDescription, keywords, headTitle } = props

  const state = useSelector(state => state.pickUpDropOffActions)
  let { params: { direction, language } } = state

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
  console.log({ error });

  // Debug için log
  console.log({ internalState });


  console.log({ internalState });



  const initializeState = (par) => setTimeout(() => { setInternalState(initialState) }, 2500);


  const handleSend = async () => {
    const validationErrors = validateForm(internalState, language);
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
      return;
    }

    const htmlTemplate = `
    <h2 style="color:#333;">Şoför Başvuru Formu</h2>

    <h3>Kişisel Bilgiler</h3>
    <ul>
      <li><strong>Ad Soyad:</strong> ${internalState.fullname}</li>
      <li><strong>Doğum Tarihi:</strong> ${internalState.birthdate}</li>
      <li><strong>Telefon:</strong> ${internalState.phone}</li>
      <li><strong>Email:</strong> ${internalState.email}</li>
      <li><strong>Adres:</strong> ${internalState.address}</li>
    </ul>

    <h3>Araç Bilgileri</h3>
    <ul>
      <li><strong>Araç Sahibi mi?:</strong> ${internalState.isOwner === 'yes' ? 'Evet' : 'Hayır'}</li>
      <li><strong>Marka / Model:</strong> ${internalState.vehicleMakeModel}</li>
      <li><strong>Model Yılı:</strong> ${internalState.vehicleYear}</li>
      <li><strong>Plaka:</strong> ${internalState.licensePlate}</li>
      <li><strong>Yolcu Kapasitesi:</strong> ${internalState.passengerCapacity}</li>
      <li><strong>Tercih Edilen Lokasyon:</strong> ${internalState.preferredLocation}</li>
    </ul>
    <hr />
    <p style="font-size: 12px; color: #888;">Gönderim tarihi: ${new Date().toLocaleString("tr-TR")}</p>
  `;

    sendDriverForm(htmlTemplate); // ayrı fonksiyon
  };
  const sendDriverForm = async (htmlTemplate) => {
    const env = await fetchConfig(); // eğer async değilse doğrudan çağır

    try {
      dispatch({ type: "ALERT", payload: { loading: true } })

      const reqOptions = {
        method: "POST",
        headers: { "Accept": "application/json, text/plain, */*", "Content-Type": "application/json" },
        body: JSON.stringify({
          senderId: 7,
          reciverMails: ["info@apltransfers.com"],
          subject: "Yeni Şoför Başvurusu",
          mailContent: htmlTemplate
        })
      };

      fetch(`${env.apiDomain}/tools/mailer`, reqOptions)
        .then((res) => {
          console.log(res);
          dispatch({ type: "ALERT", payload: { loading: false } })
          if (res.status === 200) {
            dispatch({ type: "ALERT", payload: { success: "Başvurunuz başarıyla alındı. En kısa sürede sizinle iletişime geçeceğiz." } })
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
              <div className={styles.forms}>
                <DriverPersonalInfoForm internalState={internalState} onChangeHandler={onChangeHandler} error={error} language={language} />
                <DriverVehicleInfoForm internalState={internalState} onChangeHandler={onChangeHandler} error={error} language={language} />
                <DriverPreferredLocationForm selectedLocation={internalState.preferredLocation} onChangeHandler={onChangeHandler} language={language} error={error} />
                <div>
                  <Button onBtnClick={handleSend} type={BUTTON_TYPES.PRIMARY} style={{ padding: "10px 28.5px", width: '100%' }} btnText={generalAllTranslations.strSend[language]} />
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