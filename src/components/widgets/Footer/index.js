import { useDispatch, useSelector } from "react-redux"
import styles from "./styles.module.scss"
import Image from "next/image"
import fbImage from '../../../../public/images/social/fb.gif';
import twImage from '../../../../public/images/social/tw.gif';
import srImage from '../../../../public/images/social/rss.png';
import instaIamge from '../../../../public/images/social/Instigram.gif';
import airportTranslations, { generalAllTranslations } from "../../../constants/generalTranslataions";
import { airportTaxiLinks } from "../../../constants/navigatior";
import { useWindowSize } from "../../../hooks/useWindowSize";
const officeLocations = [

    {
        id: "Test",
        city: "Test 2",
        address: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt vitae neque libero ab molestias reprehenderit vero hic atque nostrum incidunt?"
    },
    {
        id: "Rest",
        city: "Rest",
        address: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt vitae neque libero ab molestias reprehenderit vero hic atque nostrum incidunt?"

    },
    {
        id: "london",
        city: "London",
        address: "APL Office,  123 London Street, London, UK , HE1 1AA"
    }
];

const Footer = () => {

    const state = useSelector(state => state.pickUpDropOffActions)
    let { params: { direction, language, journeyType } } = state
    const { appData } = useSelector(state => state.initialReducer)
    const dispatch = useDispatch()
    let size = useWindowSize();
    let { width } = size

    return (
        <div className={`${styles.footer} ${direction} page`} >
            <div className={`${styles.footer_section} page_section`}>
                <div className={`${styles.footer_section_container} page_section_container`}>
                    <div className={styles.footer_content}>
                        <div className={`${styles.column} ${styles.numbers_column}`}>
                            <p>{appData?.words["strContactUs"]}</p>
                            <ul>
                                <li className={styles.phone}>
                                    <span>
                                        <Image src={"/images/others/tel.webp"} alt="Edinburg transfers hotline" width={32} height={32} />
                                        {appData?.words["appContactUsHotLine"] ? appData?.words["appContactUsHotLine"] : "Hotline 24/7"}:
                                    </span>
                                   <a href="tel:+442086887744">020 8688 7744</a>
                                </li>
                                <li className={styles.ep}>
                                    <span>
                                        <Image src={"/images/others/world.webp"} alt="Edinburg transfers  Support" width={25} height={20} />                                        {generalAllTranslations.strEurope[language]}:
                                    </span>
                                    <a href="tel:+442086887744">
                                        +44 208 688 7744
                                    </a>
                                </li>
                                {/* <li className={styles.wp}>
                                    <span>
                                        <Image src={"/images/others/WhatsAppp.webp"} alt="Edinburg transfers WhatsApp" width={25} height={25} />                                        {appData?.words["strWhatsAppUs"]}:
                                    </span>
                                    <a target="_blank" href="https://wa.me/447387901028">
                                        +44 738 790 1028
                                    </a>
                                </li> */}
                                <li className={styles.mail}>
                                    <span>
                                        <Image src={"/images/others/mail.webp"} alt="Edinburg transfers Email" width={25} height={20} />                                        {appData.words["strEmail"]}:
                                    </span>
                                    <a href="mailto:info@apl-edinburgh.com" >info@apl-edinburgh.com</a>
                                </li>
                            </ul>


                        </div>
                        <div className={`${styles.column} ${styles.office_column}`}>
                            <p>{generalAllTranslations.strOurOffices[language]}</p>
                            <ul className={styles.officeList}>
                                {officeLocations.map(({ id, city, address }) => (
                                    <li key={id} className={styles.officeItem}>
                                        <span className={styles.icon}>📍</span>
                                        <strong>{city}:</strong> {address}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={`${styles.column}`}>
                            <p>{generalAllTranslations.strQuickLinks[language]}</p>
                            <div>
                                <a href={`${language === 'en' ? `/about-us` : `/${language}/about-us`}`} title={(appData || {}).words["strAboutUs"]}>
                                    {(appData || {}).words["strAboutUs"]}
                                </a>
                                <a href={`${language === 'en' ? `/contact-us` : `/${language}/contact-us`}`} title={(appData || {}).words["appContactUsHeader"]} >
                                    {(appData || {}).words["appContactUsHeader"]}
                                </a>
                                <a href={`${language === 'en' ? `/terms` : `/${language}/terms`}`} title={(appData || {}).words["strTermsOfUse"]}  >
                                    {(appData || {}).words["strTermsOfUse"]}
                                </a>
                                <a href={`${language === 'en' ? `/privacy-policy` : `/${language}/privacy-policy`}`} title={(appData || {}).words["strPrivacyPolicy"]}  >
                                    {(appData || {}).words["strPrivacyPolicy"]}
                                </a>
                                <a href={`${language === 'en' ? `/fleet` : `/${language}/fleet`}`} title={(appData || {}).words["strOurFleet"]}  >
                                    {(appData || {}).words["strOurFleet"]}
                                </a>
                                <a href={`${language === 'en' ? `/travel-agents` : `/${language}/travel-agents`}`} title={(appData || {}).words["strTravelNews"]}  >
                                    {(appData || {}).words["strTravelNews"]}
                                </a>
                                {/* <a href={"/tr/sofor-araniyor"} hrefLang="tr" title={generalAllTranslations.strDriverWanted[language]} >
                                    {generalAllTranslations.strDriverWanted[language]}
                                </a> */}

                                <a href={`${language === 'en' ? `/sitemap` : `/${language}/sitemap`}`} title={generalAllTranslations.strSiteMap[language]} >
                                    {generalAllTranslations.strSiteMap[language]}
                                </a>
                            </div>
                        </div>
                        <div className={`${styles.column} `}>
                            <p>{appData.words["strAirportTaxi"]}</p>
                            <div>
                                {
                                    airportTaxiLinks
                                        // .filter((item) => item.hasTaxiDeals !== "ADB" && item.hasTaxiDeals !== "GZP") // Exclude ADB & GZP
                                        .map((item) => {
                                            let { strInnerText, path: listPath, hasTaxiDeals } = item;

                                            return (
                                                <a
                                                    href={`${language === 'en' ? `${listPath}` : `/${language}${listPath}`}`}
                                                    key={strInnerText}
                                                    onClick={() => {
                                                        dispatch({ type: "SET_NAVBAR_TAXI_DEALS", data: { hasTaxiDeals } });
                                                        dispatch({ type: "RESET_SELECTED_POINTS", data: { journeyType } });
                                                    }}
                                                    title={airportTranslations[language][strInnerText]}
                                                >
                                                    <span>{airportTranslations[language][strInnerText]}</span>
                                                </a>
                                            );
                                        })
                                }
                            </div>
                        </div>
                        <div className={`${styles.column} `}>
                            <div className={styles.social_icons}>
                                <a href="https://www.facebook.com/APLTransfers" target={"_blank"} title={"Edinburg transfers Facebook"}>
                                    <Image src={fbImage} alt="Edinburg transfers Facebook" width={25} height={25} />
                                </a>
                                <a href="https://x.com/APLTransfers" target={"_blank"} title="Edinburg transfers Twitters">
                                    <Image src={twImage} alt="Edinburg transfers Twitters" width={25} height={25} />
                                </a>
                                <a href="https://bsky.app/profile/apltransfers.bsky.social" target="_blank" title="Edinburg transfers News RSS">
                                    <Image src={srImage} alt="Edinburg transfers News RSS" width={25} height={25} />
                                </a>
                                <a href="https://www.instagram.com/apltransfers" target="_blank" title="Edinburg transfers Instigram page">
                                    <Image src={instaIamge} alt="Edinburg transfers Instigram page" width={25} height={25} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${styles.footer_section_container2} page_section_container`}>
                    <div className={styles.footer_bottom}>
                        <div className={styles.social_icons}>
                            <a href="https://www.facebook.com/APLTransfers" target={"_blank"} title={"Edinburg transfers Facebook"}>
                                <Image src={fbImage} alt="Edinburg transfers Facebook" width={25} height={25} />
                            </a>
                            <a href="https://x.com/APLTransfers" target={"_blank"} title="Edinburg transfers Twitters">
                                <Image src={twImage} alt="Edinburg transfers Twitters" width={25} height={25} />
                            </a>
                            <a href="https://bsky.app/profile/apltransfers.bsky.social" target="_blank" title="Edinburg transfers News RSS">
                                <Image src={srImage} alt="Edinburg transfers News RSS" width={25} height={25} />
                            </a>
                            <a href="https://www.instagram.com/apltransfers" target="_blank" title="Edinburg transfers Instigram page">
                                <Image src={instaIamge} alt="Edinburg transfers Instigram page" width={25} height={25} />
                            </a>
                        </div>
                        <p className={styles.allrights}>{new Date().getFullYear()} EdinburgTransfers.com All Rights Reserved</p>
                        <div className={styles.footer_bottom_images}>
                            <div>
                                <Image src={"/images/visa.webp"} alt="Edinburg transfers Visa" style={{ objectFit: "contain" }} width={48} height={24} />
                            </div>
                            <div>
                                <Image src={"/images/master.webp"} alt="Edinburg transfers Master" style={{ objectFit: "contain" }} width={48} height={24} />
                            </div>
                            <div>
                                <Image src={"/images/applePay.webp"} alt="Edinburg transfers Apple" style={{ objectFit: "contain" }} width={48} height={24} />
                            </div>
                            <div>
                                <Image src={"/images/paypal.webp"} alt="Edinburg transfers Paypal" style={{ objectFit: "contain" }} width={48} height={24} />
                            </div>
                            <div>
                                <Image src={"/images/amex.webp"} alt="Edinburg transfers Amex" style={{ objectFit: "contain" }} width={48} height={24} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer