import GlobalLayout from '../../components/layouts/GlobalLayout'
import CarsSlider from '../../components/widgets/CarsSlider'
import { parseCookies } from '../../helpers/cokieesFunc'
import { isUrlLoverCase } from '../../helpers/isUrlLoverCase'
import { checkLanguageAttributeOntheUrl } from '../../helpers/checkLanguageAttributeOntheUrl'
import { parse } from 'url';
import { adjustPathnameForLanguage } from '../../helpers/adjustedPageLanguage'
import { fleetHtmlContentBody, fleetHtmlContentHeader, fleetKeywords } from '../../constants/keywordsAndContents/fleet/keywordsAndContents'
import { setNoCacheHeader } from '../../helpers/setNoCacheHeader'
import { fetchConfig } from '../../resources/getEnvConfig'
import { useSelector } from 'react-redux'
import DangerouslyInnerHtml from '../../components/elements/DangerouslyInnerHtml'

const Fleet = (props) => {
  let { metaDescription, keywords, headTitle } = props
  const state = useSelector(state => state.pickUpDropOffActions)
  let { params: { language } } = state
  return (
    <GlobalLayout title={headTitle} keywords={keywords} description={metaDescription} mainCanonical={props.mainCanonical}>

      <br /><br />
      <br /><br />
      <br /><br />
      <div style={{ padding: '0 20px' }}>
        <DangerouslyInnerHtml htmContent={fleetHtmlContentHeader[language]} customStyles={{ maxWidth: '1200px' }} />
      </div>
      <CarsSlider showTitle={false} />
      <div style={{ paddingTop:'0px',paddingLeft:"20px",paddingRight:"20px",paddingBottom:"100px" }}>
        <DangerouslyInnerHtml htmContent={fleetHtmlContentBody[language]} customStyles={{ maxWidth: '1200px' }} />
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

  let metaDescription = fleetKeywords.metaDescription[pageStartLanguage]
  let keywords = fleetKeywords.keywords[pageStartLanguage];
  let headTitle = fleetKeywords.headTitle[pageStartLanguage];

  const env = await fetchConfig();
  const mainCanonical = `${env.websiteDomain}${pageStartLanguage === 'en' ? "/fleet" : `/${pageStartLanguage}/fleet`}`
  return {
    //we pass tourdetails fot adding inside redux generally all together
    props: { metaDescription, keywords, headTitle, mainCanonical }
  };


}
export default Fleet