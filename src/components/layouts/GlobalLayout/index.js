import Head from 'next/head';
import TopHeader from '../../widgets/TopHeader';
import Footer from '../../widgets/Footer';
const SeoDefaults = {
  title: "Ediinburg",
  keywords: "Test",
  description: "test",
};

const GlobalLayout = ({ children, title = SeoDefaults.title, description = SeoDefaults.description, keywords = SeoDefaults.keywords, mainCanonical = "" }) => {
  const currentYear = new Date().getFullYear();

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
