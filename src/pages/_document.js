import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  // This is a static method in the CustomDocument class that fetches initial properties before rendering the document.
  static async getInitialProps(ctx) {
    // Initialize an empty object to hold page-specific props.

    let pageProps = {};

    // Store the original renderPage function from the context.
    const originalRenderPage = ctx.renderPage;

    // Override the renderPage function to customize the rendering of the app and components.
    ctx.renderPage = () =>
      originalRenderPage({
        // Enhance the App component, allowing you to wrap the entire app with additional props or functionality.
        enhanceApp: (App) => (props) => {
          return <App {...props} />
        },
        // Enhance individual components if needed, but in this case, we just return them as is.
        enhanceComponent: (Component) => Component,
      });

    // Call the original getInitialProps method from the Document class to get the initial props.
    const initialProps = await Document.getInitialProps(ctx);

    // Return the initial props provided by Document along with any custom pageProps we might have set.
    return { ...initialProps, pageProps };
  }
  render() {
    let { hasLanguage } = this?.props?.__NEXT_DATA__?.props?.pageProps
    return (
      <Html lang={hasLanguage ? hasLanguage : "en"}>

        <Head>
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `
                     (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                      })(window,document,'script','dataLayer','GTM-MQN46Z8J')
                        `,
            }}
            data-cfasync="false"
          ></script> */}
        </Head>
        <body>
          <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MQN46Z8J" height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe>
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
