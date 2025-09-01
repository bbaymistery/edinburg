import React, { useEffect, useState } from 'react'
import styles from "./cardItems.styles.module.scss"
import { quotationImagesObjWebp } from '../../../../constants/quotationImages';
import Image from 'next/image';

const CardItems = ({ datas, selectedQuotation, handleClickForMobile, carObject, direction, appData, setQuotationHandleClick }) => {

    const [renderedDatas, setRenderedDatas] = useState([]);

    useEffect(() => {
        if (datas && datas.length > 0) {
            setRenderedDatas(datas);
        }
    }, [datas]);
    return renderedDatas?.map((item, index) => {


        const isSelected = Number(selectedQuotation?.carId) === Number(quotationImagesObjWebp[item?.carId].id)
     


        const dataId = index === 0 ? "first_car" : (index === 1 ? "second_car" : "")
        return (
            <div id="main_container" key={index}>
                <div dataid={dataId} className={`${styles.card_item} ${isSelected ? styles.selectedCard : ""}`} onClick={(e) => handleClickForMobile({ e, quotation: item })} >
                    <div data={quotationImagesObjWebp[item?.carId].id} className={styles.column_first} >
                        <Image src={quotationImagesObjWebp[item?.carId]?.image} alt="Car Image" width={300} height={100} style={{ objectFit: "contain", }} priority />
                    </div>
                    <div className={styles.column_second}>
                        <div className={styles.column_second_flex_column}>
                            <div className={styles.name_and_postcode_div}>
                                <div className={styles.postcode}>
                                    {carObject[item?.carId]?.transferType}
                                </div>
                                <div className={styles.name}>
                                    {carObject[item?.carId]?.name}
                                    <div className={styles.feature_column}> <i className="fa-solid fa-user"></i> <span>{carObject[item?.carId]?.pax}</span>  </div>
                                </div>
                            </div>
                            <div className={styles.car_features}>
                                <div className={styles.feature_column}> <i className="fa-solid fa-user"></i> <span>{carObject[item?.carId]?.pax}</span>  </div>
                                <div className={styles.feature_column}> <i className="fa-solid fa-suitcase"></i><span>{carObject[item?.carId]?.suitcases}</span></div>
                                <div className={`${styles.feature_column} ${styles.meet_greet_icon}`} direction={String(direction === 'rtl')}>
                                    <Image src={"/images/icons/blackMeetAndGreet.webp"} width="18" height="20" alt="Meet and Greet icon " priority />
                                    <span style={{ paddingLeft: "5px", fontWeight: '500' }}>Meet & Greet</span>
                                </div>

                            </div>
                            <div className={styles.apl_features}>
                                <p className={`${styles.apl_feature} ${styles.show_more_than360}`}> <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i> <span>{appData?.words["strCarFeatureFreeMeetAndGreet"]}</span></p>
                                <p className={`${styles.apl_feature} ${styles.show_more_than360}`}>  <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strCarFeatureNoCharge4Delay"]}</span></p>
                                <p className={`${styles.apl_feature} ${styles.show_more_than360}`}> <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strCarFeatureFreeWaitingTime"]}</span> </p>
                                <p className={`${styles.apl_feature} ${styles.show_more_than360}`}> <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strFreeCancellation24h"]}</span> </p>
                                <p className={`${styles.apl_feature} ${styles.show_more_than360}`}><i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strCarFeatureFlightTracking"]}</span></p>
                                <p className={`${styles.apl_feature} ${styles.show_more_than360}`}> <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strComfortableVehicles"]}</span> </p>
                                <p className={`${styles.apl_feature} ${styles.show_less_than360}`}><i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strCarFeatureFlightTracking"]}</span></p>
                                <p className={`${styles.apl_feature} ${styles.show_less_than360}`}>  <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}></i><span>{appData?.words["strCarFeatureFreeMeetAndGreet"]}</span></p>
                                <p className={`${styles.apl_feature} ${styles.show_less_than360} ${styles.show_less_than360_with_price}`}>
                                    <span>
                                        <i className={`fa-solid fa-check ${direction === "rtl" ? styles.leftFeatureIcon : ""}`}>
                                        </i>
                                        <span>{appData?.words["strFreeCancellation24h"]}</span>
                                    </span>
                                    <span className={styles.price_span}>
                                        {`£${String(item?.price || '').split('.')[0]}.`}

                                        <span>00</span>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={`${direction === 'rtl' ? styles.thirdcolumnDirection : ""} ${styles.column_third}`}>
                        <div className={styles.price}>
                            {`£${String(item?.price || '').split('.')[0]}.`}

                            <span>00</span>
                        </div>
                        <div className={styles.total}>{appData?.words["strTotalPrice"]}</div>
                        <button onClick={() => setQuotationHandleClick({ quotation: item })} className={`btn btn_primary ${isSelected ? styles.selectedBtn : ""}`}   >
                            {isSelected ? `${appData?.words["quSelectedButton"]}` : `${appData?.words["quSelectButton"]}`}
                        </button>
                    </div>
                </div>
            </div>
        )
    })
}

export default CardItems