
import React from "react";
import styles from "./styles.module.scss";
import SearchInputLoading from "../../../../components/elements/SearchInputLoading";
import OutsideClickAlert from "../../../../components/elements/OutsideClickAlert";
import SelectedPointsOnHomePage from "../../../../components/elements/SelectedPointsOnHomePage";
import SelectedPointsOnTransferDetails from '../../../../components/elements/SelectedPointsOnTransferDetails';
import HandleSearchResults from "../../../../components/elements/HandleSearchResults";

import TaxiDealFlowDateTimeTogether from "./TaxiDealFlowDateTimeTogether";
import { collectPointsAsync } from "../../../../helpers/collectPoints";
import { useDispatch } from "react-redux";
import { ifHasUnwantedCharacters } from "../../../../helpers/ifHasUnwantedCharacters";

const TaxiDealQuotationPointSection = ({
    destination, // "pickup" | "dropoff"
    quotations,
    index,
    appData,
    env,
    imageObjects,
    internalState,
    setInternalState,
    handleSelectTaxiDeals,
    reservationError,
    direction,
    hasOneSelectedPointPickup,
    hasNoPickupPoints,
    hasSinglePickupfPoint,
    hasOneSelectedPointDropOff,
    hasNoDropoffPoints,
    hasSingleDropoffPoint,
    dropoffIdFormImage,
    pickupIdForImage,
    language,
    errorPickUpSelectBox,
    errorDropoffSelectBox,
    selectedPickupPoints,
    selectedDropoffPoints,
    reservations,
    splitedHour,
    splitedMinute,
    splitedDate,
    onSelectingPointHandler
}) => {
    const isPickup = destination === "pickup";
    const selectedPoints = isPickup ? selectedPickupPoints : selectedDropoffPoints;
    const quotation = quotations[index]?.taxiDeal;
    const points = isPickup ? quotation?.pickupPoints : quotation?.dropoffPoints;
    const placeholder = isPickup ? "Please type the pickup address" : "Please type the dropoff address";
    const label =
        isPickup ? appData?.words["strPickupPoints"] : appData?.words["strDropoffPoints"];
    const singlePointCond = isPickup
        ? !(hasSinglePickupfPoint && hasOneSelectedPointPickup) &&
        hasNoPickupPoints &&
        hasOneSelectedPointPickup
        : !(hasSingleDropoffPoint && hasOneSelectedPointDropOff) &&
        hasNoDropoffPoints &&
        hasOneSelectedPointDropOff;
    const idForImage = isPickup ? pickupIdForImage : dropoffIdFormImage;
    const searchFocus = internalState[`${destination}-search-focus-${index}`];
    const searchValue = internalState[`${destination}-search-value-${index}`];
    const searchLoading = internalState[`${destination}-search-loading-${index}`];
    const collectingPoints = internalState[`collecting-${destination}-points-${index}`];
    const errorSelectBox =
        destination === "pickup" ? errorPickUpSelectBox : errorDropoffSelectBox;
    const reservationKey = destination === "pickup" ? "selectedPickupPoints" : "selectedDropoffPoints";
    const dispatch = useDispatch()
    const outsideClick = ({ destination, index }) => {
        //it means if we have seggested points then it will work otherwise it is nt
        if (!Array.isArray(internalState[`collecting-${destination}-points-${index}`]))
            setInternalState({ [`collecting-${destination}-points-${index}`]: [], [`${destination}-search-focus-${index}`]: false })
    }

    const setFocusToInput = (params = {}) => {
        let { e, destination, index } = params

        if (window.innerWidth < 990) {
            e.target.style.opacity = 0
            setInternalState({ [`${destination}-search-focus-${index}`]: window.innerWidth > 990 ? false : true })
            setTimeout(() => e.target.style.opacity = 1);
            const navbar = document.getElementById("navbar_container")
            navbar.style.zIndex = 1
        }
    }

    const closeModal = (params = {}) => {
        let { index, destination } = params
        let inputField = document.getElementById("input_focused")
        inputField.style.opacity = 1
        setInternalState({ [`${destination}-search-focus-${index}`]: false, [`${destination}-search-value-${index}`]: "", [`collecting-${destination}-points-${index}`]: [] })
        const navbar = document.getElementById("navbar_container")
        navbar.style.zIndex = 100000
    }
    return (
        <>
            <div className={`${styles.search_menu} ${isPickup ? styles.first_column : styles.second_column}`}>
                {!selectedPoints.length > 0 ? (
                    <p className={direction}>
                        {`${isPickup ? appData?.words["strPickupAddress"] : appData?.words["strDropoffAddress"]
                            }: ${quotation?.[destination]}`}
                    </p>
                ) : (<p className={`${styles.point_title} ${direction}`}>{label}</p>)}

                {singlePointCond && (
                    <SelectedPointsOnHomePage env={env} hasOneItem={isPickup ? hasSinglePickupfPoint : hasSingleDropoffPoint} isTaxiDeal={true} index={index} destination={destination} points={selectedPoints} />)}

                {points?.length ? (
                    <div style={{ border: errorSelectBox ? "1px solid red" : "" }} className={styles.taxideals_select_div} direction={String(direction === "rtl")}  >
                        {imageObjects && idForImage && (
                            <img className={styles.point_image} src={`${env.apiDomain}${imageObjects[idForImage]}`} alt={selectedPoints[0]?.address} />)}
                        <select
                            className={styles.taxideals_select}
                            defaultValue={selectedPoints?.[index]?.address || `--- ${appData?.words["quSelectButton"]} ---`}
                            disabled={internalState["quotation-loading"]}
                            onChange={(e) => handleSelectTaxiDeals({ e, destination, index, items: [{ address: `--- ${appData?.words["quSelectButton"]} ---` }, ...points,], })}
                        >
                            {[{ address: `--- ${appData?.words["quSelectButton"]} ---` }, ...points].map(
                                (point, idx) => (
                                    <option key={idx} value={point.adress}>
                                        {point.address}
                                    </option>
                                )
                            )}
                        </select>
                    </div>
                ) : null}

                <SelectedPointsOnTransferDetails env={env} isTaxiDeal={true} pointsError={reservationError[reservationKey]} selectedPoints={selectedPoints} journeyType={index} type={destination} language={language} />

                <OutsideClickAlert onOutsideClick={() => outsideClick({ destination, index })}>
                    <div className={`${styles.input_div} ${styles["search-input-container"]}`} f={String(searchFocus)}>
                        <div className={`${styles.popup_header} ${direction}`} f={String(searchFocus)}>
                            <i
                                className={`fa-solid fa-xmark ${styles.close_icon}`}
                                onClick={(e) => closeModal({ index, destination })}
                            ></i>
                            <p className={direction}>
                                {isPickup
                                    ? appData?.words["strFromWithQuestionMark"]
                                    : appData?.words["strWhereWithQuestionMark"]}
                            </p>
                        </div>
                        {selectedPoints.length === 0 && points?.length === 0 && (
                            <input
                                type="text"
                                autoComplete="off"
                                id="input_focused"
                                placeholder={placeholder}
                                value={searchValue}
                                autoFocus={searchFocus}
                                f={String(searchFocus)}
                                onFocus={(e) => setFocusToInput({ e, destination, index })}
                                onChange={(e) =>
                                    onSelectingPointHandler({ index, destination, value: e.target.value })
                                }
                                className={`${direction} ${reservationError?.[reservationKey]?.length > 0 &&
                                    !searchValue &&
                                    selectedPoints.length === 0
                                    ? styles.error_input
                                    : ""
                                    }`}
                            />
                        )}
                        {searchLoading && (
                            <div className={styles.loading_div} popupp={String(searchFocus)} direction={String(direction === "rtl")}   >
                                <SearchInputLoading />
                            </div>
                        )}
                        {!Array.isArray(collectingPoints) && (
                            <HandleSearchResults env={env} isTaxiDeal={true} language={language} index={index} destination={destination} setInternalState={setInternalState} collectingPoints={collectingPoints} />
                        )}
                    </div>
                </OutsideClickAlert>
            </div>
            {!isPickup ?
                <TaxiDealFlowDateTimeTogether
                    index={index}
                    selectedPickupPoints={selectedPickupPoints}
                    reservations={reservations}
                    appData={appData}
                    direction={direction}
                    splitedDate={splitedDate}
                    splitedHour={splitedHour}
                    splitedMinute={splitedMinute}

                />
                : <></>}
        </>
    );
};

export default TaxiDealQuotationPointSection;
