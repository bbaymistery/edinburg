import { createWrapper } from "next-redux-wrapper";
import GlobalLayout from "../components/layouts/GlobalLayout";
import CarsSlider from "../components/widgets/CarsSlider";
import Hero from "../components/widgets/Hero";
import { parse } from 'url';
import { fetchConfig } from "../resources/getEnvConfig";
import store from "../store/store";
import { useDispatch, } from "react-redux";
import { useRouter } from "next/router";
import { useEffect, } from "react";
import Error404 from './404/index';
import { findMatchingItem } from "../constants/popularDestinations";
// import PopularDestinations from "../components/widgets/PopularDestnations";
import { isUrlLoverCase } from "../helpers/isUrlLoverCase";
import { parseCookies } from "../helpers/cokieesFunc";
import { checkLanguageAttributeOntheUrl } from "../helpers/checkLanguageAttributeOntheUrl";
import { adjustPathnameForLanguage } from "../helpers/adjustedPageLanguage";
import LinkNameDescription from "../components/elements/LinkNameDescription";
import { getAirportPageContentByPathname, getMetaTagSingleAirportPage, getSingleAirportSchemaByPathname, getSinglekeywordsTitleAirportPage } from "../constants/keywordsAndContents/airportsKeywordsContentSchema";
import Head from "next/head";
import { createMetaTagElementsClientSide, renderSchemaScriptsClientSide } from "../helpers/schemaMetaTagHelper";
import { setNoCacheHeader } from '../helpers/setNoCacheHeader';
import { urlToTitle } from "../helpers/letters";
import { postDataAPI } from '../helpers/fetchDatas';
import dynamic from "next/dynamic";
const TaaxidealsQuotationLink = dynamic(() => import('../components/elements/TaaxidealsQuotationLink'),);


const NavbarLinkName = (props) => {
    // Destructure props passed from getServerSideProps
    const { env, isItQuationLink = false, data, } = props;
    const dispatch = useDispatch();
    const router = useRouter();
    const { linkname } = router.query; // Get the linkname parameter from the query string
    // console.log({ data });

    // If server-side validation fails (data is "not found"), render the 404 page
    if (data === "not found") return <Error404 />;
    let { headTitle = "", keywords = "", metaDescription = "", pageContent = "", schemas = [], metaTags = [] } = props.data || {}



    // console.log({ linkname });

    useEffect(() => {
        // If not a "Quotation" link, find the matching item and update Redux state
        if (!isItQuationLink) {
            const result = findMatchingItem(linkname);
            dispatch({ type: "SET_NAVBAR_TAXI_DEALS", data: { hasTaxiDeals: result.hasTaxiDeals } });
        }

    }, [linkname, dispatch]);



    // Render the main layout and components if validation passes
    return (isItQuationLink ? <TaaxidealsQuotationLink props={props} /> :
        <GlobalLayout title={headTitle} keywords={keywords} description={metaDescription} >
            <Head>
                {createMetaTagElementsClientSide(metaTags)}
                {renderSchemaScriptsClientSide(schemas)}
            </Head>
            <Hero islinknamecomponent={true} env={env} />
            {/* <PopularDestinations islinknamecomponent={true} env={env} /> */}
            {pageContent.length > 0 && <LinkNameDescription pageContent={pageContent} />}
            <CarsSlider bggray={true} />
        </GlobalLayout>
    );
};

export default NavbarLinkName;

// Create the Redux store wrapper
const makestore = () => store;
const wrapper = createWrapper(makestore);

const handleStandartContent = (params = {}) => {

    let { pageStartLanguage: language, pathname, env, } = params

    const pageContent = getAirportPageContentByPathname(pathname, language);
    const schemas = [getSingleAirportSchemaByPathname(pathname, language)]
    const metaTags = getMetaTagSingleAirportPage(pathname, language, env);
    const { keywords, headTitle, metaDescription } = getSinglekeywordsTitleAirportPage(pathname, language);

    let data = { pageContent, schemas: schemas || [], metaTags, keywords, headTitle, metaDescription }
    return { props: { data, isItQuationLink: false, } }
}


async function handleQuotationLink(language, pathname, env,) {

    let pickUps = []
    let dropoffs = []
    let review = {}
    let schemas = []
    //!nneww Pathname yox idi direk yazilirdi 
    if (pathname) {
        const body = { language, checkRedirect: true, taxiDealPathname: pathname, withoutExprectedPoints: true, "channelId": 13, "checkRedirect": false, };
        let { breadcrumbs } = urlToTitle({ url: pathname, pathnamePage: true })

        const url = `${env.apiDomain}/api/v1/taxi-deals/details`;
        const { status, data } = await postDataAPI({ url, body });
        // console.log({ status, data });


        if (status === 205) return { redirect: { destination: data.redirectPathname, permanent: false } };
        if (status === 200) {
            let {
                distance,
                duration,
                quotationOptions,
                markerPoints,
                polylinePath,
                taxiDeal: { pickupPoints, dropoffPoints, pageTitle = "", headTitle = "", description = "", keywords = "", returnPathname = "", pageContent = "", returnHeadTitle = "", returnPageTitle = "", pathname: linkurl, metaTags = [] } } = data

            // select first item from all points
            pickUps = pickupPoints?.length >= 1 ? [pickupPoints[0]] : []
            dropoffs = dropoffPoints?.length >= 1 ? [dropoffPoints[0]] : []

            const newPageContent = pageContent?.replace(/__website_domain__/g, env.websiteDomain);
            review.bestRating = data?.taxiDeal?.schema?.Product ? data?.taxiDeal?.schema?.Product?.aggregateRating?.bestRating : 5
            review.ratingValue = data?.taxiDeal?.schema?.Product ? data?.taxiDeal?.schema?.Product?.aggregateRating?.ratingValue : 4.95
            review.reviewCount = data?.taxiDeal?.schema?.Product ? data?.taxiDeal?.schema?.Product?.aggregateRating?.reviewCount : 1988

            let schemaOfTaxiDeals = data?.taxiDeal?.schema || []
            schemaOfTaxiDeals = Object.keys(schemaOfTaxiDeals).map(key => ({ [key]: schemaOfTaxiDeals[key] }));//array of objects [b:{ab:"1"},c:{ab:"2"},d:{ab:"3"}]
            schemaOfTaxiDeals = schemaOfTaxiDeals.map(obj => Object.values(obj)[0]);//Output: ["1", "2", "3"]
            schemas = [...schemaOfTaxiDeals]
            // Cache the data
            let finalData = {
                pickUps,
                dropoffs,
                keywords,
                language,
                pageTitle,
                headTitle,
                description,
                returnPathname,
                schemaOfTaxiDeals,
                pageContent: newPageContent,
                returnHeadTitle,
                returnPageTitle,
                distance,
                duration,
                quotationOptions,
                schemas,
                breadcrumbs,
                linkurl,
                metaTags,
                review,
                markerPoints,
                polylinePath,

            }

            return { props: { data: finalData, isItQuationLink: true, } }

        }
        else {
            return { props: { data: "not found", } }
        }
    }
}



// Server-side props function
export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req, res, ...etc }) => {
    // Fetch environment configuration (such as domain, API URLs, etc.)
    const env = await fetchConfig();

    // Disable caching to always serve fresh content (especially important for SSR pages)
    setNoCacheHeader(res);

    // Get the resolved URL from Next.js context (assuming etc is a destructured object)
    const { resolvedUrl } = etc;

    // Ensure the URL is in lowercase to avoid duplicated routes or mismatches
    isUrlLoverCase(resolvedUrl, res);

    // Parse cookies from the request headers
    let cookies = parseCookies(req.headers.cookie);
    // Parse the full request URL to get pathname and query object
    let { pathname } = parse(req.url, true);

    // Determine language from the URL (e.g. "/tr/some-page" => "tr")
    let pageStartLanguage = checkLanguageAttributeOntheUrl(req?.url);

    // Adjust pathname and potentially correct the detected language using cookie fallback
    const adjusted = adjustPathnameForLanguage(pathname, pageStartLanguage, cookies);

    // Destructure updated values from adjustment function
    pageStartLanguage = adjusted.pageStartLanguage;
    pathname = adjusted.pathname;
    console.log({ pathname });

    const taxiPricesLinks = [
        //navbarda hover edende gorunen kisim (icerisinnen tikliyanda link olur)
        // "/istanbul-airport-taxi-prices",
        // "/sabiha-gokcen-airport-taxi-prices",
        // "/dalaman-airport-taxi-prices",
        // "/antalya-airport-taxi-prices",
        // "/bodrum-milas-airport-taxi-prices",

        "/edinburgh-airport-to-city-centre-taxi",
        "/city-centre-to-edinburgh-airport-taxi",
        "/edinburgh-airport-to-glasgow-taxi",
        "/glasgow-to-edinburgh-airport-taxi",
        "/edinburgh-airport-to-st-andrews-taxi",
        "/st-andrews-to-edinburgh-airport-taxi",
    ];
    // console.log(pathname);


    // if (taxiPricesLinks.includes(`${pathname}`)) {
    //     // return handleStandartContent({ pageStartLanguage, pathname, env, });
    //     return { props: { data: "not found", } }

    // } else {
    return handleQuotationLink(pageStartLanguage, pathname, env,);
    // return { props: { data: "not found", } }
    // }


});
