import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import store from "../../../store/store";
import { useRouter } from "next/router";
import { extractLanguage } from "../../../helpers/extractLanguage";
import OutsideClickAlert from "../../elements/OutsideClickAlert";
import dynamic from 'next/dynamic'
import { setCookie } from "../../../helpers/cokieesFunc";
import logoImage from '../../../../public/logos/edinburgLogo.webp'
import airportTranslations from "../../../constants/generalTranslataions";
import { useWindowSize } from "../../../hooks/useWindowSize";

const DropDownAllLanguages = dynamic(() => import('../../elements/DropDownAllLanguages'),);
const DesktopMenu = dynamic(() => import('../../elements/DesktopMenu'), {
  ssr: false
});
const MobileMenu = dynamic(() => import('../../elements/MobileMenu'),);
const Header = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { params: { language, journeyType,  } } = useSelector(state => state.pickUpDropOffActions)
  const [openMenu, setOpenMenu] = useState(false) //mobile
  const [languageStatus, setLanguageStatus] = useState(false)
  const [currencyStatus, setCurrencyStatus] = useState(false)
  const { appData } = useSelector(state => state.initialReducer)
  const [translatedAppData, setTranslatedAppData] = useState(appData)
  let [internalState, setInternalState] = React.useReducer((s, o) => ({ ...s, ...o }), {

    "error-booking-message-0": "",
    "error-booking-message-1": ""

  })

  let size = useWindowSize();
  let { width } = size

  let expandedMenu = ["ru", "it", "es", "tr",].includes(language) && 1280 < width && 1601 > width


  const handleLanguage = async (params = {}) => {

    let { e, text, key, direction, index } = params
    setCookie("lang", key, 7);
    //set language and dicertion  to localstorage
    localStorage.setItem("direction", JSON.stringify(direction));
    dispatch({ type: "SET_NEW_LANGUAGE", data: { languageKey: key, direction, langIndex: index } })


    let cahceAppData = (JSON.parse(sessionStorage.getItem('allAppDatas')));
    if (cahceAppData) {
      setTranslatedAppData(cahceAppData[key])
      dispatch({ type: "SET_NEW_APPDATA", data: cahceAppData[key], initialStateReducer: store.getState().initialReducer })
    }
    //url configuration based on language we select
    let checkTheUrlIfLangExist = extractLanguage(router.asPath) //tr es or it
    //to be sure that selected language is exist among languages or not
    let hasEn = appData?.languages.some((language) => language.value === checkTheUrlIfLangExist);
    if (checkTheUrlIfLangExist && hasEn) {
      //if length is 3 it means we r in the taxi deaals
      let replacedString = `${key === "en" ? "" : key}${router.asPath.length === 3 ? "" : "/"}`

      let url = router.asPath.replace(/^\/([a-z]{2})\/?/i, replacedString)
      //tr|it|sp/transfer-details...  replacing withh
      url = key === 'en' ? `${url}` : `/${url}`

      router.push(url);
    }
    else {
      //then when ever i change language i will add tr it ar
      //if it is english then  we dont need lang atrribute=>>>>>     /transfer-details...
      let url = `/${key === "en" ? "" : key}${router.asPath}`
      router.push(url);
    }
    //make hidden language dropdown in mobile menu After clicking
    setLanguageStatus(!languageStatus)
    if (expandedMenu) {
      setOpenMenu(false)
    }
  }



  const toggleMenu = () => setOpenMenu(!openMenu)

  //for language dropdown
  const outsideClickDropDown = useCallback((e) => {
    setLanguageStatus(false);
    setCurrencyStatus(false);
  }, [languageStatus, currencyStatus]);


  //when we click lang text it opens dropdown
  const setOpenLanguageDropdown = () => {

    setCurrencyStatus(false)
    setLanguageStatus(!languageStatus)

  }

  const handleClickNavLinkMobileMenuList = useCallback((params = {}) => {
    let { hasTaxiDeals = 'heathrow' } = params;
    if (hasTaxiDeals) {
      dispatch({ type: "SET_NAVBAR_TAXI_DEALS", data: { hasTaxiDeals } });
    }
    // dispatch({ type: "RESET_SELECTED_POINTS", data: { journeyType } })
    toggleMenu();
  }, [dispatch, journeyType, toggleMenu]);

  const handleClickNavLinkMobileMenuNotList = useCallback(({ index }) => {
    if (index === 0) {
      dispatch({ type: "RESET_SELECTED_POINTS", data: { journeyType } });
      dispatch({ type: "SET_NAVBAR_TAXI_DEALS", data: { hasTaxiDeals: "heathrow" } });
    }
    toggleMenu();
  }, [dispatch, journeyType, toggleMenu]);


  useEffect(() => {
    const err0 = internalState["error-booking-message-0"];
    const err1 = internalState["error-booking-message-1"];

    if (err0) {
      alert(err0);
    } else if (err1) {
      alert(err1);
    }
  }, [internalState]);

  return (
    <header className={styles.header} id="navbar_container" >
      <div className={styles.header_container}>
        <div className={styles.header_flex_div}>
          <div className={styles.left_items}>
            <div className={styles.left_items_flex_div}>
              <a href={language === 'en' ? '/' : `/${language}`} className={`${styles.logo_tag}`}  >
                <div >
                  <Image src={logoImage} alt="APL transfers" fill priority sizes="(max-width: 768px) 175px, 255px" style={{ objectFit: "contain" }} />
                </div>
              </a>
              {width > 1200 ? <DesktopMenu expandedMenu={expandedMenu} airportTranslations={airportTranslations} journeyType={journeyType} language={language} /> : <></>}
              {/* mobile  */}
              {openMenu ?
                <MobileMenu expandedMenu={expandedMenu} airportTranslations={airportTranslations} openMenu={openMenu} handleClickNavLinkMobileMenuNotList={handleClickNavLinkMobileMenuNotList} language={language} handleClickNavLinkMobileMenuList={handleClickNavLinkMobileMenuList} appData={translatedAppData} />
                : <></>}
            </div>
          </div>

          <div className={styles.right_items}>



            <div className={`${styles.language_dropdown}`} >
              <div className={styles.img_div} onClick={() => setOpenLanguageDropdown()} data-name="language" >
                {appData ? <Image src={`/languages/${language}.gif`} width={20} height={11} priority alt={language} data-name="language" /> : <></>}
              </div>
              {languageStatus ?
                <OutsideClickAlert onOutsideClick={() => outsideClickDropDown()}>
                  <DropDownAllLanguages expandedMenu={expandedMenu} languageStatus={languageStatus} handleLanguage={handleLanguage} />
                </OutsideClickAlert> : <></>}
            </div>

            <div onClick={toggleMenu} className={`${styles.menu}`} id="menu" expand={String(expandedMenu)}>
              {!openMenu ? <i className="fa-solid fa-bars"></i> : <i className="fa-solid fa-xmark"></i>}
            </div>
          </div>
        </div>
      </div>

    </header>
  );
};

export default Header;
