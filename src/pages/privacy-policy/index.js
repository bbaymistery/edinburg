

import { useSelector } from "react-redux";
import GlobalLayout from "../../components/layouts/GlobalLayout";
import styles from "./styles.module.scss";
import { generalAllTranslations } from "../../constants/generalTranslataions";
import DangerouslyInnerHtml from "../../components/elements/DangerouslyInnerHtml";
import { checkLanguageAttributeOntheUrl } from "../../helpers/checkLanguageAttributeOntheUrl";
import { parseCookies } from "../../helpers/cokieesFunc";
import { parse } from 'url';
import { htmlContentsPrivacy, privacyKeywords } from "../../constants/keywordsAndContents/privacy/keywordsAndContents";
import { adjustPathnameForLanguage } from "../../helpers/adjustedPageLanguage";
import { isUrlLoverCase } from "../../helpers/isUrlLoverCase";
import { setNoCacheHeader } from "../../helpers/setNoCacheHeader";
import { fetchConfig } from "../../resources/getEnvConfig";


const PrivacyPolicy = (props) => {
    let { metaDescription, keywords, headTitle } = props
    const state = useSelector(state => state.pickUpDropOffActions)
    let { params: { direction, language } } = state


    return (
        <GlobalLayout title={headTitle} keywords={keywords} description={metaDescription} mainCanonical={props.mainCanonical} >
            <div className={`${styles.privacy} ${direction} page`} >
                <div className={`${styles.privacy_section} page_section`}>
                    <div className={`${styles.privacy_section_container} page_section_container`}>
                        <div className={styles.breadcrumb}>
                            <span><a href="/">{generalAllTranslations.strHome[language]}</a></span>
                            <span>{">"}</span>
                            <span><a href="/terms">{generalAllTranslations.strPrivacyPolicy[language]} </a> </span>
                        </div>
                        <div className={styles.terms_container}>
                            <DangerouslyInnerHtml htmContent={htmlContentsPrivacy[language]} />
                        </div>
                    </div>
                </div>
            </div>
        </GlobalLayout>
    );
}

export default PrivacyPolicy

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

    let metaDescription = privacyKeywords.metaDescription[pageStartLanguage]
    let keywords = privacyKeywords.keywords[pageStartLanguage];
    let headTitle = privacyKeywords.headTitle[pageStartLanguage];

    const env = await fetchConfig();
    const mainCanonical = `${env.websiteDomain}${pageStartLanguage === 'en' ? "/privacy-policy" : `/${pageStartLanguage}/privacy-policy`}`


    return {
        //we pass tourdetails fot adding inside redux generally all together
        props: { metaDescription, keywords, headTitle, mainCanonical }
    };


}