import Head from 'next/head';
import TopHeader from '../../widgets/TopHeader';
import React from 'react'
import Footer from '../../widgets/Footer';
import { useRouter } from 'next/router';
const SeoDefaults = {
  title: "Ediinburg",
  keywords: "Test",
  description: "test",
};
// Route configuration
const STATIC_ROUTES = {
  HOME: '/',
  TERMS: '/terms',
  PRIVACY: '/privacy-policy',
  ABOUT: '/about-us',
  FLEET: '/fleet',
  TOURS: '/tours',
  CONTACT: '/contact-us',
  CONTACT: '/travel-agents',
  SITEMAP: '/sitemap',
  SITEMAP: '/account-register',
};
const GlobalLayout = ({ children, title = SeoDefaults.title, description = SeoDefaults.description, keywords = SeoDefaults.keywords, mainCanonical = "" }) => {
  const currentYear = new Date().getFullYear();
  const router = useRouter()
  const websiteLink = "https://www.apltransfers.com";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta charSet="UTF-8" />
        {/*//? no follow  */}
        <meta name="googlebot" content="index" />
        <meta name="robots" content="noindex,nofollow" />
        <link
          rel="preload"
          as="font"
          href="/fontawesome/webfonts/fa-solid-900.ttf"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        {/* <meta name="copyright" content={`Copyright APL transfers ${currentYear}. All rights reserved.`} /> */}
        {/* <meta name="author" content="APL Transfers" /> */}


        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        {Object.entries(STATIC_ROUTES).map(([key, path]) =>
          router.pathname === path && (
            <React.Fragment key={key}>
              <link rel="canonical" href={mainCanonical} />
              <link rel="alternate" hrefLang="en" href={`${websiteLink}${path}`} />
              <link rel="alternate" hrefLang="tr" href={`${websiteLink}/tr${path}`} />
              <link rel="alternate" hrefLang="ar" href={`${websiteLink}/ar${path}`} />

              <link rel="alternate" hrefLang="es" href={`${websiteLink}/es${path}`} />
              <link rel="alternate" hrefLang="it" href={`${websiteLink}/it${path}`} />

              <link rel="alternate" hrefLang="ru" href={`${websiteLink}/ru${path}`} />
              <link rel="alternate" hrefLang="zh" href={`${websiteLink}/zh${path}`} />

              <link rel="alternate" hrefLang="x-default" href={`${websiteLink}${path}`} />
            </React.Fragment>
          )
        )}
      </Head>
      <TopHeader />
      <main>
        {children}
      </main>
      <Footer />

    </>
  )
}

export default GlobalLayout
