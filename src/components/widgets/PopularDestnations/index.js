import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from "./styles.module.scss";
import { generalAllTranslations } from '../../../constants/generalTranslataions';



const PopularDestinations = (props) => {
    const { env } = props

    const dispatch = useDispatch();
    const state = useSelector(state => state.pickUpDropOffActions);
    const { params: { direction, language, hasTaxiDeals, } } = state;
    const { appData } = useSelector(state => state.initialReducer)

    const [points, setPoints] = useState([])

    const fecthPoints = async (params = {}) => {
        let { language, dealsNameProp = hasTaxiDeals } = params;
        let channelId = state.reservations[0].reservationDetails.channelId;
        // Encode the dealsNameProp to handle spaces and special characters
        // EDH>"edinburgh airport"
        if (dealsNameProp === "EDH") {
            dealsNameProp = "edinburgh airport"
        }

        let encodedDealsNameProp = encodeURIComponent(dealsNameProp);
        let url = `${env.apiDomain}/api/v1/taxi-deals/list?points=${encodedDealsNameProp}&language=${language}&channelId=${channelId}`;
        let response = await fetch(url);
        let { data, status } = await response.json();
        console.log({ data, status });

        if (status === 200) {
            setPoints(data.destinations)
        }
    };


    useEffect(() => {
        fecthPoints({ dealsNameProp: hasTaxiDeals, language })
        //asagidaki iki kod asagidaki use effecti acanda yox olmalidir
        dispatch({ type: "SET_NAVBAR_TAXI_DEALS", data: { hasTaxiDeals } });
    }, [language, hasTaxiDeals,])

    const imagesUrls = [
        {
            url: "/images/matchingItemImages/webp/Edinburgh-airport-apl-edinburgh.webp"
        },
        {
            url: '/images/matchingItemImages/webp/Glasgow-apl-edinburgh.webp'
        },
        {
            url: "/images/matchingItemImages/webp/Aberdeen-apl-edinburgh.webp"
        },
        {
            url: "/images/matchingItemImages/webp/fort-william-apl-edinburgh.webp"
        },
        {
            url: "/images/matchingItemImages/webp/inverness-apl-edinburgh.webp"
        },
        {
            url: "/images/matchingItemImages/webp/StAndrews-apl-edinburgh.webp"
        },
        {
            url: "/images/matchingItemImages/webp/Edinburgh-airport-apl-edinburgh.webp"
        },
        {
            url: '/images/matchingItemImages/webp/Glasgow-apl-edinburgh.webp'
        },
        {
            url: "/images/matchingItemImages/webp/Aberdeen-apl-edinburgh.webp"
        },
        {
            url: "/images/matchingItemImages/webp/fort-william-apl-edinburgh.webp"
        },
        {
            url: "/images/matchingItemImages/webp/inverness-apl-edinburgh.webp"
        },
        {
            url: "/images/matchingItemImages/webp/StAndrews-apl-edinburgh.webp"
        },
    ]

    return (
        <div className={`${styles.populardestination} ${direction} page`} >
            <div className={`${styles.populardestination_section} page_section`}>
                <div className={`${styles.populardestination_section_container} page_section_container`}>
                    <h1>
                        {generalAllTranslations.strEdinburgh[language]}     {generalAllTranslations.strTaxiPrices[language]}
                    </h1>
                    <div className={styles.featureIcons}>
                        {points.map((item, idx) => {
                            return (
                                <div className={styles.featureIcon} key={idx}>
                                    <a href={item.pathname}>
                                        <div className={styles.tourcard_header}>
                                            <div className={styles.tourcard_image}>
                                                <Image alt={item.translatedPageTitle || item.pageTitle} sizes="(max-width: 768px) 100vw, (min-width: 769px) 300px" src={imagesUrls?.[idx]?.url} width={250} height={198} />
                                            </div>
                                        </div>
                                        <div className={styles.tourcard_content}>
                                            <div className={styles.location}>
                                                <i className="fa-solid fa-location-dot"></i>
                                                {item.pickup}
                                            </div>
                                            <h1 className={styles.title}>
                                                <span>{item.translatedPageTitle}</span>
                                            </h1>
                                            <div className={styles.tourcard_rating}>
                                                <div className={styles.stars}>
                                                    <div><i className="fa-solid fa-star "></i></div>
                                                    <div><i className="fa-solid fa-star "></i></div>
                                                    <div><i className="fa-solid fa-star "></i></div>
                                                    <div><i className="fa-solid fa-star "></i></div>
                                                    <div><i className="fa-solid fa-star "></i></div>
                                                </div>
                                                <span>4.8 (3000+)</span>
                                            </div>
                                            <div className={styles.tourcard_bottom}>
                                                <div>
                                                    <i className={"fa-solid fa-clock"}></i>
                                                </div>
                                                <div className={styles.price}>
                                                    {appData.words["strStartFrom"]} <span> {item.price} </span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopularDestinations;
