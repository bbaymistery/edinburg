
import Link from "next/link";
import { useSelector } from "react-redux";
import { parse } from 'url';
import DestinationsCustomers from '../../components/elements/DestinationsCustomers';
import GlobalLayout from "../../components/layouts/GlobalLayout";
import CarsSlider from "../../components/widgets/CarsSlider";
import { htmlContentsTravelAgents, travelAgentsKeywords } from "../../constants/keywordsAndContents/travelAgents/keywordsAndContents";
import { adjustPathnameForLanguage } from "../../helpers/adjustedPageLanguage";
import { checkLanguageAttributeOntheUrl } from "../../helpers/checkLanguageAttributeOntheUrl";
import { parseCookies } from "../../helpers/cokieesFunc";
import { isUrlLoverCase } from "../../helpers/isUrlLoverCase";
import { setNoCacheHeader } from "../../helpers/setNoCacheHeader";
import { fetchConfig } from "../../resources/getEnvConfig";
import styles from "./styles.module.scss";
import Button from "../../components/elements/Button/Button";
import { BUTTON_TYPES } from "../../components/elements/Button/ButtonTypes";
const TravelAgents = (props) => {
    let { metaDescription, keywords, headTitle } = props

    const state = useSelector(state => state.pickUpDropOffActions)
    let { params: { direction, language } } = state

    const { appData } = useSelector(state => state.initialReducer)

    return (
        <GlobalLayout title={headTitle} keywords={keywords} description={metaDescription} mainCanonical={props.mainCanonical}>
            <div className={`${styles.travelAgents} ${direction} page`} >
                <div className={`${styles.travelAgents_section} page_section`}>
                    <div className={`${styles.travelAgents_section_container} page_section_container`}>
                        <div className={styles.travelAgents_container}>
                            <div className={styles.content}>

                                <div className={styles.left}>
                                    <h1 className={styles.title}>
                                        {appData?.words["strTravelNews"]}
                                    </h1>
                                    <br />
                                    <div className={styles.account_div}>
                                        <Link target='_blank' href="https://agency.apltransfers.com" >
                                            <Button type={BUTTON_TYPES.PRIMARY_OUTLINE} style={{ padding: "10px 28.5px", }} btnText={`${appData?.words["strLogin"]}`} />

                                        </Link>
                                        <a href={language === 'en' ? '/account-register' : `/${language}/account-register`} title="AccountRegister" >
                                            <Button type={BUTTON_TYPES.PRIMARY_OUTLINE} style={{ padding: "10px 28.5px", }} btnText={`${appData?.words["strRegister"]}`} />
                                        </a>
                                    </div>

                                    <div className={styles.pageContent} dangerouslySetInnerHTML={{ __html: htmlContentsTravelAgents[language] }}>
                                    </div>
                                </div>
                                <div className={styles.right}>
                                    <img src="/images/others/apl_family.png" alt="APL Transfers Travel Agents" />
                                </div>
                            </div>
                            <DestinationsCustomers />
                            <CarsSlider noborder={true} />
                        </div>
                    </div>
                </div>
            </div>
        </GlobalLayout>
    );
}

export default TravelAgents

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

    let metaDescription = travelAgentsKeywords.metaDescription[pageStartLanguage]
    let keywords = travelAgentsKeywords.keywords[pageStartLanguage];
    let headTitle = travelAgentsKeywords.headTitle[pageStartLanguage];
    const env = await fetchConfig();
    const mainCanonical = `${env.websiteDomain}${pageStartLanguage === 'en' ? "/travel-agents" : `/${pageStartLanguage}/travel-agents`}`
    return {
        //we pass tourdetails fot adding inside redux generally all together
        props: { metaDescription, keywords, headTitle, mainCanonical }
    };


}