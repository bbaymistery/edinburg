import { createWrapper } from 'next-redux-wrapper';
import { DM_Sans } from "next/font/google";
import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { checkLanguageAttributeOntheUrl } from '../helpers/checkLanguageAttributeOntheUrl';
import { getCookie, setCookie } from "../helpers/cokieesFunc";
import { fetchAllLanguagesAppDatas } from "../helpers/fetchAllLanguagesAppDatas";
import { mobileAndTabletCheck } from '../helpers/mobileAndTabletCheck';
import { fetchConfig } from "../resources/getEnvConfig";
import store from '../store/store';
import "../styles/global.scss";
import { useUserInteractionOnce } from '../hooks/useUserInteractionOnce';
import FontAwesomeHeadLoader from '../components/elements/FontAwesomeLoader';
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




  // Save scroll position in localStorage
  const saveScrollPosition = () => {
    const currentScrollPosition = window.scrollY;
    localStorage.setItem('scrollPosition', currentScrollPosition); // Persist to localStorage
  };

  // Restore scroll position from localStorage
  const restoreScrollPosition = () => {
    const savedPosition = localStorage.getItem('scrollPosition');
    if (savedPosition) {
      const parsedPosition = parseInt(savedPosition, 10);
      window.scrollTo(0, parsedPosition);
      localStorage.removeItem('scrollPosition'); // Optional cleanup
    }
  };


  useEffect(() => {
    //global errors
    if (typeof window === 'object') {
      window.handelErrorLogs = (error = {}, location = '', logs = {}) => {
        let raw = {};
        try {
          let { name, message, stack } = typeof error === 'string' ? new Error(error) : error;
          raw = { "error": { name, message, stack }, "location": location, "logs": logs };
        } catch (e) {
          raw = { "error": { ...e, ...error }, "location": location, "logs": logs };
        }

        let requestOptions = {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(raw),
          redirect: 'follow'
        };


        if (!pageProps.env.websiteDomain.includes("localhost")) {
          try {
            fetch(`${!pageProps.env.apiDomain}/tools/add-error-logs`, requestOptions)
              .then(response => response.text())
              .then(result => { console.log(result) })
              .catch(error => console.log('error', error));
          } catch (err) {
            console.log(err)
          }
        }
      }
    }
    dispatch({ type: "CHECK_MOBILE_OR_NOT", data: { mobileAndTabletCheck: mobileAndTabletCheck() } })
    //set language and bring appDAtas  when user write loaclhost3500/tr
    if (hasLanguage?.length === 2) {
      setLanguage({ language: hasLanguage })
      setCookie("lang", hasLanguage, 7);

    } else {
      setLanguage({ language: "en" })
      setCookie("lang", "en", 7);

    }
    //if user close browser initialize localstorage
    const handleBeforeUnload = () => {
      localStorage.removeItem("appData"); // remove an item from local storage
      localStorage.removeItem("direction"); // remove an item from local storage
      localStorage.removeItem("path"); // remove an item from local storage

      // Dynamically inject the termsReducer when this component mounts

    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };

  }, [])

  //when we r on payment page and change lang twice then go back with browser then our content changes
  useEffect(() => {
    const language = getCookie("lang")
    //when cahnge on home page language then click browser back btn we update language vai  first condirtione
    if (language !== router.asPath.split("/")[1] && router.asPath.split("/")[1].length === 2) {
      setCookie("lang", router.asPath.split("/")[1], 7);
      setLanguage({ language: router.asPath.split("/")[1], })
    }
    else {
      setLanguage({ language: hasLanguage !== 'en' ? hasLanguage : language, })
    }

  }, [router.asPath])

  //gtmsss S
  useEffect(() => {
    const handleRouteChange = (url) => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'pageview',
        page: url,
      });
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  //scrolling useEffect
  useEffect(() => {
    // Restore scroll position on page load
    restoreScrollPosition();

    // Save scroll position before navigation
    router.events.on('routeChangeStart', saveScrollPosition);

    // Restore scroll position after navigation
    router.events.on('routeChangeComplete', restoreScrollPosition);

    return () => {
      // Cleanup event listeners
      router.events.off('routeChangeStart', saveScrollPosition);
      router.events.off('routeChangeComplete', restoreScrollPosition);
    };
  }, [router]);
  useUserInteractionOnce(() => {
    fetchAllLanguagesAppDatas({ initialFetch: false });
  });
  return (
    <Provider store={store}>
      <main className={dmsans.className}>
        <FontAwesomeHeadLoader />
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}
const makestore = () => store;
const wrapper = createWrapper(makestore);


MyApp.getInitialProps = wrapper.getInitialAppProps((store) => async ({ Component, ctx }) => {
  const env = await fetchConfig();

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
