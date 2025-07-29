
import { useSelector } from "react-redux";
import GlobalLayout from "../../components/layouts/GlobalLayout";
import styles from "./styles.module.scss";
import { generalAllTranslations } from "../../constants/generalTranslataions";
import DangerouslyInnerHtml from "../../components/elements/DangerouslyInnerHtml";
import { checkLanguageAttributeOntheUrl } from "../../helpers/checkLanguageAttributeOntheUrl";
import { parseCookies } from "../../helpers/cokieesFunc";
import { parse } from 'url';
import { htmlContentsTerms, termsKeywords } from "../../constants/keywordsAndContents/terms/keywordsAndContents";
import { adjustPathnameForLanguage } from "../../helpers/adjustedPageLanguage";
import { isUrlLoverCase } from "../../helpers/isUrlLoverCase";
import { setNoCacheHeader } from "../../helpers/setNoCacheHeader";
import { fetchConfig } from "../../resources/getEnvConfig";
const Terms = (props) => {
    const state = useSelector(state => state.pickUpDropOffActions)
    let { params: { direction, language } } = state
    let { metaDescription, keywords, headTitle } = props

    return (
        <GlobalLayout title={headTitle} keywords={keywords} description={metaDescription} mainCanonical={props.mainCanonical}>
            <div className={`${styles.terms} ${direction} page`} >
                <div className={`${styles.terms_section} page_section`}>
                    <div className={`${styles.terms_section_container} page_section_container`}>
                        <div className={styles.breadcrumb}>
                            <span><a href="/">{generalAllTranslations.strHome[language]}</a></span>
                            <span>{">"}</span>
                            <span><a href="/terms">{generalAllTranslations.strTerms[language]} </a> </span>
                        </div>
                        <div className={styles.terms_container}>
                            <DangerouslyInnerHtml htmContent={htmlContentsTerms[language]} />
                        </div>
                    </div>
                </div>
            </div>
        </GlobalLayout>
    );
}

export default Terms

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

    let metaDescription = termsKeywords.metaDescription[pageStartLanguage]
    let keywords = termsKeywords.keywords[pageStartLanguage];
    let headTitle = termsKeywords.headTitle[pageStartLanguage];
    const env = await fetchConfig();
    const mainCanonical = `${env.websiteDomain}${pageStartLanguage === 'en' ? "/terms" : `/${pageStartLanguage}/terms`}`
    return {
        //we pass tourdetails fot adding inside redux generally all together
        props: { metaDescription, keywords, headTitle, mainCanonical }
    };


}