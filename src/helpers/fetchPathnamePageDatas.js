import { fetchConfig } from "../resources/getEnvConfig";
import { postDataAPI } from "./fetchDatas";
import { urlToTitle } from "./letters";

export const fetchPathnamePageDatas = async (urls) => {
  const env = await fetchConfig();
  const allLanguages = ["en", "tr", "ar", "es", "zh", "it", "ru"];

  try {
    let cache = JSON.parse(sessionStorage.getItem('pathnameLinkCache')) || {};

    await Promise.all(urls.map(async (linkurl) => {
      await Promise.all(allLanguages.map(async (lang) => {
          const cacheKey = `page-${lang}-${linkurl}`;
          if (!cache[cacheKey]) {
            const body = {
              language: lang,
              taxiDealPathname: linkurl,
              withoutExprectedPoints: true,
              checkRedirect: true,
            };
            const url = `${env.apiDomain}/api/v1/taxi-deals/details`;
            const { status, data } = await postDataAPI({ url, body });

            if (status === 200) {
              let {
                distance,
                duration,
                quotationOptions,
                markerPoints,
                polylinePath,
                taxiDeal: {
                  pickupPoints = [],
                  dropoffPoints = [],
                  pageTitle = "",
                  headTitle = "",
                  description = "",
                  keywords = "",
                  returnPathname = "",
                  pageContent = "",
                  returnHeadTitle = "",
                  returnPageTitle = "",
                  pathname: linkurl,
                  metaTags = []
                }
              } = data;

              const newPageContent = pageContent?.replace(/__website_domain__/g, env.websiteDomain);
              const pickUps = pickupPoints.length > 0 ? [pickupPoints[0]] : [];
              const dropoffs = dropoffPoints.length > 0 ? [dropoffPoints[0]] : [];

              let review = {
                bestRating: data?.taxiDeal?.schema?.Product?.aggregateRating?.bestRating ?? 5,
                ratingValue: data?.taxiDeal?.schema?.Product?.aggregateRating?.ratingValue ?? 4.95,
                reviewCount: data?.taxiDeal?.schema?.Product?.aggregateRating?.reviewCount ?? 1988
              };

              let schemaOfTaxiDeals = data?.taxiDeal?.schema || {};
              schemaOfTaxiDeals = Object.keys(schemaOfTaxiDeals)
                .map(key => ({ [key]: schemaOfTaxiDeals[key] }))
                .map(obj => Object.values(obj)[0]);

              const { breadcrumbs } = urlToTitle({ url: linkurl, pathnamePage: true });

              const breadcrumbSchema = {
                "@context": "http://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", position: 1, item: { "@id": env.websiteDomain, name: `Home` } },
                  { "@type": "ListItem", position: 2, item: { "@id": `${env.websiteDomain}${linkurl}`, name: `${breadcrumbs?.[1]}` } }
                ]
              };

              const schemas = [breadcrumbSchema];

              cache[cacheKey] = {
                pickUps,
                dropoffs,
                keywords,
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
                markerPoints,
                polylinePath,
                review
              };
            }
          }
      }));
    }));

    sessionStorage.setItem('pathnameLinkCache', JSON.stringify(cache));
  } catch (err) {
    console.error("fetchPathnamePageDatas error:", err);
  }
};
