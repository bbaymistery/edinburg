import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import TransferJourneySummaryPanel from '../../../components/elements/TransferJourneySummaryPanel';
import { collectPointsAsync } from '../../../helpers/collectPoints';
import { ifHasUnwantedCharacters } from '../../../helpers/ifHasUnwantedCharacters';
import { reservationSchemeValidator } from '../../../helpers/reservationSchemeValidator';
import { splitDateTimeStringIntoDate, splitDateTimeStringIntoHourAndMinute } from '../../../helpers/splitHelper';
import styles from "../styles.module.scss";
import HandlePassengerDetailsTransferForm from '../transferDetailsComponents/HandlePassengerDetailsTransferForm';
import TransferDetailsBackNextButton from '../transferDetailsComponents/TransferDetailsBackNextButton';
import TransferDetailsTeaxtArea from '../transferDetailsComponents/TransferDetailsTeaxtArea';
import TaxiDealQuotationPointSection from './TaxiDealQuotaionFlowSelectedPoints';
const TaxiDealQuotationFlow = (props) => {


    let { quotations, appData, env, language, passengerDetailsStatus, reservations, direction, reducerSessionToken } = props


    let [internalState, setInternalState] = React.useReducer((s, o) => ({ ...s, ...o }), {
        'errorHolder': [],
        'pickup-search-value-0': '',
        'dropoff-search-value-0': '',
        'collecting-pickup-points-0': [],
        'collecting-dropoff-points-0': [],
        //focus
        'pickup-search-focus-0': false,//it is for modal
        'dropoff-search-focus-0': false,//it is for modal

        'pickup-search-loading-0': false,
        'dropoff-search-loading-0': false,

        //quotation loading
        "quotation-loading": false,
    })
    let { errorHolder } = internalState;

    const dispatch = useDispatch()
    const router = useRouter()
    const reservationsRef = useRef(reservations);
    const [pickupIdForImage, setpickupIdForImage] = useState(null)
    const [dropoffIdFormImage, setdropoffIdFormImage] = useState(null)
    const [errorDropoffSelectBox, setErrorDropoffSelectBox] = useState(false)
    const [errorPickUpSelectBox, setErrorPickUpSelectBox] = useState(false)

    const objectDetailss = appData?.pointTypeCategories?.reduce((obj, item) => ({ ...obj, [item.id]: JSON.parse(item.objectDetails), }), {});
    const imageObjects = appData?.pointTypeCategories?.reduce((obj, item) => ({ ...obj, [item.id]: item.image, }), {});



    //pop up modal
    const onSelectingPointHandler = (params = {}) => {
        let { index, value, destination } = params
        let { passengerDetails: { token: passengerDetailsToken } } = reservations[0]


        //hinder user  to add some Characters
        if (ifHasUnwantedCharacters(value)) return

        setInternalState({ [`${destination}-search-value-${index}`]: value })

        if (value.length > 2) {
            (async () => {
                //set input loading to true
                setInternalState({ [`${destination}-search-loading-${index}`]: true })

                // 🔹 First request: ignoreGooglePlaces = true
                const log1 = await collectPointsAsync({ value, reducerSessionToken, language, ignoreGooglePlaces: true, env, errorMessage: "APL TaxiDealQuotationFlow component _collectPoints() catch block" });

                const { status, "session-token": sessionToken = "", token } = log1;


                if (status == 200) {
                    setInternalState({ [`${destination}-search-loading-${index}`]: false })

                    //  immediately show log1.result for fast feedback
                    setInternalState({ [`collecting-${destination}-points-${index}`]: log1.result });


                    //if we dont have passengerDetailsToken then save token on reservation objects;s passenger details
                    if (!passengerDetailsToken) dispatch({ type: 'SET_TOKEN_TO_PASSENGERDETAILS', data: { token } })
                    //check if session doesnt exist then  set session token to the reducer
                    if (!reducerSessionToken) dispatch({ type: 'SET_SESSION_TOKEN', data: { sessionToken } });
                    //!
                    // 🔹 Second request: ignoreGooglePlaces = true
                    const log2 = await collectPointsAsync({ value, reducerSessionToken, language, ignoreGooglePlaces: false, env, errorMessage: "APL Hero component _collectPoints() catch block ignoreGooglePlaces:false" });

                    // Access the most up-to-date reservations (even inside stale closures)
                    const selected = reservationsRef.current[index][`selected${destination === "pickup" ? "Pickup" : "Dropoff"}Points`] || [];

                    if (selected.length === 0) {
                        setInternalState({ [`collecting-${destination}-points-${index}`]: log2.result });
                    }

                } else {
                    setInternalState({ [`collecting-${destination}-points-${index}`]: {} })
                    setInternalState({ [`${destination}-search-loading-${index}`]: false })
                }
            })()
        } else {
            //reset collecting points
            setInternalState({ [`collecting-${destination}-points-${index}`]: [] })
        }
    }

    const handleSelectTaxiDeals = (params = {}) => {
        let { e, destination, index, items } = params
        let emptyValue = { token: "", pid: "", ptype: "", }

        //in case if he select select point
        if (e.target.selectedIndex === 0 && destination === 'pickup') {
            setpickupIdForImage(null)
            dispatch({ type: "ADD_NEW_POINT_AT_PATHNAME", data: { pickupPoints: [], dropoffPoints: reservations[index].selectedDropoffPoints, index } })
            setErrorPickUpSelectBox(true)
            return
        }
        if (e.target.selectedIndex === 0 && destination !== 'pickup') {
            setdropoffIdFormImage(null)
            dispatch({ type: "ADD_NEW_POINT_AT_PATHNAME", data: { pickupPoints: reservations[index].selectedPickupPoints, dropoffPoints: [], index } })
            setErrorDropoffSelectBox(true)
            return
        }

        let value = items[e.target.selectedIndex]
        let point = { ...value, ...objectDetailss[value?.pcatId] }//...point    flightDetails{ flightNumber="",waitingPickupTime=0}


        if (destination === 'pickup') {
            if (point.pcatId === 1) {
                point = { ...point, flightDetails: { ...point.flightDetails, waitingPickupTime: "" } }
            }
            dispatch({ type: "ADD_NEW_POINT_AT_PATHNAME", data: { pickupPoints: [point], dropoffPoints: reservations[index].selectedDropoffPoints, index } })
            setpickupIdForImage(+value.pcatId)
            setErrorPickUpSelectBox(false)

        } else {
            dispatch({ type: "ADD_NEW_POINT_AT_PATHNAME", data: { pickupPoints: reservations[index].selectedPickupPoints, dropoffPoints: [point], index } })
            setdropoffIdFormImage(+value.pcatId)
            setErrorDropoffSelectBox(false)
        }

    }

    const checkValidation = (e) => {
        let errorHolder = reservationSchemeValidator({ reservations, appData }, { checkTransferDetails: true });
        setInternalState({ errorHolder })
        if (errorHolder.status === 200) router.push(`${language === 'en' ? "/payment-details" : `${language}/payment-details`}`)


        if (reservations[0].selectedPickupPoints.length === 0) {
            setErrorPickUpSelectBox(true)
        } else {
            setErrorPickUpSelectBox(false)

        }
        if (reservations[0].selectedDropoffPoints.length === 0) {
            setErrorDropoffSelectBox(true)
        } else {
            setErrorDropoffSelectBox(false)
        }
    }
    const handleTextarea = (e, index) => {
        let { name, value } = e.target;
        if (["specialRequests"].includes(name))
            dispatch({ type: 'SET_TRANSFER_DETAILS', data: { name, value, index, updateBothJourneyCheckBox: passengerDetailsStatus } })
    }
    //if we have one point then we allow to see flight number wainting time on the box
    useEffect(() => {
        if (quotations[0]?.taxiDeal?.pickupPoints?.length <= 1) {
            setpickupIdForImage(quotations[0]?.taxiDeal?.pickupPoints[0]?.pcatId)
        }

        if (quotations[0]?.taxiDeal?.dropoffPoints?.length <= 1) {
            setdropoffIdFormImage(quotations[0]?.taxiDeal?.dropoffPoints[0]?.pcatId)
        }
    }, [])
    // Update the ref whenever `reservations` changes in Redux
    useEffect(() => {
        reservationsRef.current = reservations;
    }, [reservations]);
    return (
        <div className={styles.transferdetails_subcontainer}>
            {/* taxiDeal is gonna exist if when ever we choice go by taxiDeals  */}
            {quotations[0]?.taxiDeal ?
                reservations.map((obj, index) => {
                    let reservationError = (errorHolder.status === 403 && Array.isArray(errorHolder.reservations)) ? errorHolder.reservations[index] : {};
                    let { transferDetails, selectedPickupPoints, quotation, selectedDropoffPoints, passengerDetails, } = obj
                    let { transferDateTimeString, passengersNumber, specialRequests } = transferDetails
                    let { phone, email, firstname } = passengerDetails
                    const [splitedHour, splitedMinute] = splitDateTimeStringIntoHourAndMinute(transferDateTimeString) || []
                    const [splitedDate] = splitDateTimeStringIntoDate(transferDateTimeString) || []


                    const hasSingleDropoffPoint = quotations[index]?.taxiDeal?.dropoffPoints?.length === 1;
                    const hasNoDropoffPoints = quotations[index]?.taxiDeal?.dropoffPoints?.length === 0;
                    const hasOneSelectedPointDropOff = selectedDropoffPoints?.length === 1;

                    const hasSinglePickupfPoint = quotations[index]?.taxiDeal?.pickupPoints?.length === 1;
                    const hasNoPickupPoints = quotations[index]?.taxiDeal?.pickupPoints?.length === 0;
                    const hasOneSelectedPointPickup = selectedPickupPoints?.length === 1;


                    return (
                        <div className={`${styles.transferdetails_subcontainer_content} ${direction}`} key={index}>
                            <div className={`${styles.transferdetails_subcontainer_content_points_and_passengerdetails}`}>
                                <div className={`${styles.points} ${direction}`} direction={String(direction === 'rtl')}>
                                    <h2>{appData?.words["seGoingDetails"]}</h2>
                                    {
                                        ["pickup", "dropoff"].map((destination) => (
                                            <TaxiDealQuotationPointSection
                                                key={destination}
                                                destination={destination}
                                                quotations={quotations}
                                                index={index}
                                                appData={appData}
                                                env={env}
                                                imageObjects={imageObjects}
                                                internalState={internalState}
                                                setInternalState={setInternalState}
                                                handleSelectTaxiDeals={handleSelectTaxiDeals}
                                                onSelectingPointHandler={onSelectingPointHandler}

                                                reservationError={reservationError}
                                                direction={direction}
                                                hasOneSelectedPointPickup={hasOneSelectedPointPickup}
                                                hasNoPickupPoints={hasNoPickupPoints}
                                                hasSinglePickupfPoint={hasSinglePickupfPoint}
                                                hasOneSelectedPointDropOff={hasOneSelectedPointDropOff}
                                                hasNoDropoffPoints={hasNoDropoffPoints}
                                                hasSingleDropoffPoint={hasSingleDropoffPoint}
                                                dropoffIdFormImage={dropoffIdFormImage}
                                                pickupIdForImage={pickupIdForImage}
                                                language={language}
                                                errorDropoffSelectBox={errorDropoffSelectBox}
                                                errorPickUpSelectBox={errorPickUpSelectBox}
                                                selectedPickupPoints={selectedPickupPoints}
                                                selectedDropoffPoints={selectedDropoffPoints}
                                                reservations={reservations}
                                                splitedHour={splitedHour}
                                                splitedMinute={splitedMinute}
                                                splitedDate={splitedDate}

                                            />
                                        ))

                                    }
                                </div>
                                {/* //!passenger details for transfer journey */}
                                {/* //!if client choise unchecked for input checkbox then it will show up  */}
                                <HandlePassengerDetailsTransferForm
                                    passengerDetailsStatus={passengerDetailsStatus}
                                    index={index}
                                    appData={appData}
                                    reservationError={reservationError}
                                    email={email}
                                    firstname={firstname}
                                    phone={phone}
                                    passengersNumber={passengersNumber}
                                    quotation={quotation}
                                    direction={direction}
                                />


                                <TransferDetailsTeaxtArea appData={appData} specialRequests={specialRequests} index={index} handleTextarea={handleTextarea} />
                                <TransferDetailsBackNextButton direction={direction} router={router} appData={appData} checkValidation={checkValidation} />
                            </div>

                            {<TransferJourneySummaryPanel
                                language={language} isTaxiDeal={true}
                                index={index} splitedHour={splitedHour}
                                selectedPickupPoints={selectedPickupPoints}
                                splitedMinute={splitedMinute} splitedDate={splitedDate}
                                quotation={quotation} selectedDropoffPoints={selectedDropoffPoints}
                            />}
                        </div>
                    )
                })
                : <></>}
        </div>
    )
}

export default TaxiDealQuotationFlow