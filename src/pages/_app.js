import { createWrapper } from 'next-redux-wrapper';
import { DM_Sans } from "next/font/google";
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { checkLanguageAttributeOntheUrl } from '../helpers/checkLanguageAttributeOntheUrl';

import { fetchConfig } from "../resources/getEnvConfig";
import store from '../store/store';
import "../styles/global.scss";
import dynamic from 'next/dynamic';
const RouteLanguageSync = dynamic(() => import('../components/elements/RouteLanguageSync'), { ssr: false });
const ScrollPositionManager = dynamic(() => import('../components/elements/ScrollPositionManager'), { ssr: false });
const ErrorLoggerInjector = dynamic(() => import('../components/elements/ErrorLoggerInjector'), { ssr: false });
const AppDataInitializer = dynamic(() => import('../components/elements/AppDataInitializer'), { ssr: false });
const FontAwesomeHeadLoader = dynamic(() => import('../components/elements/FontAwesomeLoader'), { ssr: false });

const dmsans = DM_Sans({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
function MyApp({ Component, pageProps }) {
  const router = useRouter()



  //localhost:3500//test
  // Check if 'asPath' contains two or more consecutive slashes
  // If it does, return an error or handle it as needed
  if (/\/{2,}/.test(router.asPath)) return <Error404 />

  const dispatch = useDispatch()
  //it comes from index js serVerSide props
  const { store, props } = wrapper.useWrappedStore(pageProps);
  let { hasLanguage, appData } = props//has language used for when user comes it write lcalhost:3000/tr




  
  const setLanguage = useCallback(async (params = {}) => {
    let { language, } = params;


    let allAppDatas = JSON.parse(sessionStorage.getItem('allAppDatas'))

    if (language.length === 2 && allAppDatas) {
      dispatch({ type: "SET_NEW_APPDATA", data: allAppDatas?.[language] ? allAppDatas?.[language] : allAppDatas?.["en"], initialStateReducer: store.getState().initialReducer })
    } else {
      //ilk basda tek sefer calisicak sonra yukarisi calisir
      dispatch({ type: "SET_NEW_APPDATA", data: appData, initialStateReducer: store.getState().initialReducer })

    }
    let index
    appData?.languages.map((item, idx) => (language === item.value) ? index = idx : idx)
    let direction = language === 'ar' ? "rtl" : "ltr"
    localStorage?.setItem("direction", JSON.stringify(direction));
    const exists = appData?.languages?.some(lang => lang.value === language);

    dispatch({ type: "SET_NEW_LANGUAGE", data: { languageKey: exists ? language : "en", direction, langIndex: index } })

  }, [dispatch, appData,])

  return (
    <Provider store={store}>
      <main className={dmsans.className}>
        <ScrollPositionManager />
        <RouteLanguageSync hasLanguage={hasLanguage} setLanguage={setLanguage} />
        <ErrorLoggerInjector env={pageProps.env} hasLanguage={hasLanguage} setLanguage={setLanguage} />
        <AppDataInitializer />
        <FontAwesomeHeadLoader />
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}
const makestore = () => store;
const wrapper = createWrapper(makestore);


MyApp.getInitialProps = wrapper.getInitialAppProps((store) => async ({ Component, ctx }) => {
  const env = await fetchConfig(); // burda request yok direk return yapar 

  let pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
  //language congiguration based on the url (http://localhost:3500/it/gatwick-taxi-prices  if he pres enter we get lang)
  let lang = checkLanguageAttributeOntheUrl(ctx?.req?.url)
  let appDataInitial = store.getState().initialReducer?.appData
  let paymentTypesInitial = store.getState().initialReducer?.paymentTypes

  // Fetch app data and payment types
  if (ctx?.req?.url) {
    const appDataUrl = `https://cdn.london-tech.com/app/${lang?.length === 2 ? lang : 'en'}.json`;
    const urls = [appDataUrl];
    let response = await Promise.all(urls.map(async url => {
      let resp = await fetch(url);
      return resp.json();
    }));
    appDataInitial = response[0];
    paymentTypesInitial = response[0].paymentTypes;
    store.dispatch({ type: "GET_APP_DATA", data: { appData: appDataInitial, paymentTypes: paymentTypesInitial, } });
  }
  pageProps = { appData: appDataInitial, hasLanguage: lang || "en", env, }
  return { pageProps: { ...pageProps, } };

});
export default wrapper.withRedux(MyApp);
