import { isUrlLoverCase } from '../../helpers/isUrlLoverCase';
import { checkLanguageAttributeOntheUrl } from '../../helpers/checkLanguageAttributeOntheUrl';
import GlobalLayout from '../../components/layouts/GlobalLayout';
import { parse } from 'url';
import { parseCookies } from '../../helpers/cokieesFunc';
import { adjustPathnameForLanguage } from '../../helpers/adjustedPageLanguage';
import { useSelector } from 'react-redux';
import styles from "./styles.module.scss"
import { setNoCacheHeader } from '../../helpers/setNoCacheHeader';
import { fetchConfig } from '../../resources/getEnvConfig';
import { driversWantedHtmlContent, driversWantedKeywords, getSingleDriverWantedSchema } from '../../constants/keywordsAndContents/sofor-araniyor/keywordsAndContent';
import { createMetaTagElementsClientSide, renderSchemaScriptsClientSide } from '../../helpers/schemaMetaTagHelper';
import Head from 'next/head';
import Image from 'next/image';
import DestinationsCustomers from '../../components/elements/DestinationsCustomers';
import DangerouslyInnerHtml from '../../components/elements/DangerouslyInnerHtml';

const DriversWanted = (props) => {
  const state = useSelector(state => state.pickUpDropOffActions)
  let { params: { direction, language } } = state
  let { metaDescription, keywords, headTitle } = props

  return (
    <GlobalLayout title={headTitle} keywords={keywords} description={metaDescription}>
      <Head>
        <link rel="canonical" href={props.mainCanonical} />
        {createMetaTagElementsClientSide(props.metaTags)}
        {renderSchemaScriptsClientSide(props.schemas)}
        {/* <span><a href="/tr/sofor-araniyor">{generalAllTranslations.strDriverWanted[language]} </a> </span> */}
      </Head>
      <div className={`${styles.driverswanted} ${direction} page`}>
        <div className={`${styles.driverswanted_section} page_section`}>
          <div className={`${styles.driverswanted_section_container} page_section_container`}>
            <div className={styles.content}>

              <div className={styles.left}>
                          <DangerouslyInnerHtml htmContent={driversWantedHtmlContent[language]} />

              </div>


              <div className={styles.right}>
                <div className={styles.img_div}>
                  <Image src="/images/driversWanted/aplDriversContent.webp" alt="Edinburgh Airport" fill />
                </div>
              </div>
            </div>
            <DestinationsCustomers />
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
  const mainCanonical = `${env.websiteDomain}/driver-wanted`
  const schemas = [getSingleDriverWantedSchema(pathname, pageStartLanguage)]
  // const metaTags = getMetaTagsDriversWanted(pathname, pageStartLanguage, env);


  return {
    //we pass tourdetails fot adding inside redux generally all together
    props: { metaDescription, keywords, headTitle, mainCanonical, metaTags: [], schemas }
  };


}
export default DriversWanted

/*
  <h2>
                  Driver Registration
                </h2>
                <p>
                  To register, please follow these steps:
                </p>
                <p>
                  1. Download our APL Driver App:
                  <ul>
                    <li>
                      2.     Fill out the driver registration form in the app.
                    </li>
                    <li>
                      3.   After completing the registration process, visit our office at APL Office, Novotel Cherry Lane, UB7 9HJ (FREE parking).
                      <br />  For any documents or further inquiries, please email us at documents@aplcars.com or contact us via WhatsApp 📱 at 07809536620
                    </li>
                  </ul>
                </p>
                <h2>APL Driver App</h2>


                <div className={styles.app_div}>
                  <p>For iPhone: please click on the link below</p>

                  <a href="https://apps.apple.com/gb/app/apl-drivers/id1661484765" className={styles.app_link}>
                    <div className={styles.image_wrapper}>
                      <Image
                        src="/images/driversWanted/iosicon.webp"
                        alt="APL Transfers şoför aranıyor"
                        fill
                      />
                    </div>
                    <span>APL Drivers</span>
                  </a>
                </div>

                <p>Go to Settings / Privacy / Location Services, APL / Allow Location Always.</p>

                &nbsp;

                <div className={styles.app_div}>
                  <p> For Android Phones: Please click on the link below or download from Google PLAY Store</p>
                  <a href="https://play.google.com/store/apps/details?id=track.my.taxi&hl=en_ZA&pli=1" className={styles.app_link}>
                    <div className={styles.image_wrapper}>
                      <Image
                        src="/images/driversWanted/androidicon.webp"
                        alt="APL Transfers şoför aranıyor"
                        fill
                      />
                    </div>
                    <span>APL Drivers</span>
                  </a>
                </div>

                <p>After installation is completed, accept notifications and location permissions.</p>
                &nbsp;

                <h2>APL Name Board App</h2>
                <p>Please download our APL Name Board App for an improved pickup experience:</p>
                <p>For iOS devices: Download from the <a href="https://apps.apple.com">App Store</a> : APL Nameboard</p>
                <p>For Android devices: Download from <a href="https://play.google.com">Google Play</a> : APL Nameboard</p>
                <p>Join our team today and start your journey towards a rewarding and successful driving career with APL!</p>
*/