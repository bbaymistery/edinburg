import { getTitleStringOfHastaxiDeals, splitDateTimeStringIntoDate, splitDateTimeStringIntoHourAndMinute } from '../../../helpers/splitHelper';
import { reservationSchemeValidator } from '../../../helpers/reservationSchemeValidator';
import { useDispatch, useSelector } from 'react-redux';
import styles from "./styles.module.scss"
import RadioButton from './RadioButton'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useRef, useState, } from 'react'
import dynamic from 'next/dynamic'
import { BUTTON_TYPES } from '../../elements/Button/ButtonTypes';
import Button from '../../elements/Button/Button';
import { readyToCollectQuotationOptions } from '../../../helpers/readyToCollectQuotationOptions';
import translations from './translations';
import HourMinuteComponent from './HourMinuteComponent';
import InputDateComponent from './InputDateComponent';
import HeroInputComponent from './InputHandleComponent';
import HeroImage from './HeroImage';
import { normalizeReservations } from '../../../helpers/normalizeReservations';

const WaveLoading = dynamic(() => import('../../elements/LoadingWave'))

const LinkNamePageImages = [
    {
        key: "IST",
        imageUrl: "/images/matchingItemImages/besiktas.webp"
    },
    {
        key: "SAW",
        imageUrl: "/images/matchingItemImages/eminonu.webp"
    },
    {
        key: "AYT",
        imageUrl: "/images/matchingItemImages/kas-antalya.webp"
    },
    {
        key: "DLM",
        imageUrl: "/images/matchingItemImages/marmaris.webp"
    },
    {
        key: "BJV",
        imageUrl: "/images/matchingItemImages/bodrum2.webp"
    },
    {
        key: "GZP",
        imageUrl: "/images/matchingItemImages/fethiye3.webp"
    },
    {
        key: "ADB",
        imageUrl: "/images/matchingItemImages/izmir3.webp"
    },


]

const Hero = (props) => {
    let { islinknamecomponent = false, bggray = true, env } = props
    const router = useRouter()
    const dispatch = useDispatch()
    const state = useSelector(state => state.pickUpDropOffActions)
    let { reservations, params } = state
    let { sessionToken: reducerSessionToken, journeyType, direction, language, hasTaxiDeals } = params

    const { appData } = useSelector(state => state.initialReducer)
    let [internalState, setInternalState] = React.useReducer((s, o) => ({ ...s, ...o }), {
        'pickup-search-value-0': '',
        'dropoff-search-value-0': '',
        'pickup-search-value-1': '',
        'dropoff-search-value-1': '',
        'collecting-pickup-points-0': [],
        'collecting-dropoff-points-0': [],
        'collecting-pickup-points-1': [],
        'collecting-dropoff-points-1': [],
        'pickup-search-loading-0': false,
        'dropoff-search-loading-0': false,
        'pickup-search-loading-1': false,
        'dropoff-search-loading-1': false,
        'show-pickup-extra-point-0': false,
        'show-dropoff-extra-point-0': false,
        'show-pickup-extra-point-1': false,
        'show-dropoff-extra-point-1': false,

        //focus
        'pickup-search-focus-0': false,//it is for modal
        'dropoff-search-focus-0': false,//it is for modal
        'pickup-search-focus-1': false,//it is for modal
        'dropoff-search-focus-1': false,//it is for modal

        "quotation-loading": false,
        'errorHolder': [],
        "error-booking-message-0": "",
        "error-booking-message-1": ""

    })
    const reservationsRef = useRef(reservations);

    const [matchingLinkNameImage, setmatchingLinkNameImage] = useState("/images/popularDestinations/istanbul/besiktas.webp")

    const onChangeSetDateTimeHandler = (params = {}) => {
        let { value, hourOrMinute, journeyType } = params
        dispatch({ type: 'SET_JOURNEY_DATETIME', data: { journeyType, hourOrMinute, value } })
    };
    //when we click getQuotations there we check fields .If fields not empty then it will be triggering

    const getQuotations = useCallback((e) => {
        //when we add postcode point we set id :" "  if smone come back to home page change datetime we need to set id:0
        const checkedReservations = normalizeReservations(reservations)

        let errorHolder = reservationSchemeValidator({ reservations: checkedReservations, appData });
        setInternalState({ errorHolder });
        if (errorHolder.status === 200) {
            let propsOfReadyColection = {
                dispatch, setInternalState, router, journeyType,
                reservations: checkedReservations, language,
                shouldNavigate: true, env, appData,
            }
            readyToCollectQuotationOptions(propsOfReadyColection)

        }
    }, [reservations, appData, setInternalState, dispatch, router, journeyType, language]);


    useEffect(() => {
        const matchingImage = LinkNamePageImages?.find((item) => item.key === hasTaxiDeals)?.imageUrl;
        setmatchingLinkNameImage(matchingImage)
    }, [hasTaxiDeals])

    // Fallback to English if language not found
    const { mainTitle, subtitle } = translations[language] || translations.en;
    //when we go quotation page then go back In that case we should check
    //if we have points or not.
    //According to this we will show add extrapoint or not
    useEffect(() => {
        let { selectedDropoffPoints, selectedPickupPoints } = reservations[0]
        if (selectedDropoffPoints?.length > 0 && selectedPickupPoints?.length > 0) {
            setInternalState({ [`show-pickup-extra-point-0`]: true, [`show-dropoff-extra-point-0`]: true })
        }
        // bu rendere sebeb olur
        dispatch({ type: "CHECHK_FLIGHT_WAITING_TIME", data: { journeyType } })
    }, [])
    // Update the ref whenever `reservations` changes in Redux
    useEffect(() => {
        reservationsRef.current = reservations;
    }, [reservations]);

    return (
        <div className={`${styles.hero} ${direction} page`} >
            <HeroImage islinknamecomponent={islinknamecomponent} matchingLinkNameImage={matchingLinkNameImage} />
            <div className={`${styles.hero_section} page_section`}>
                <div className={`${styles.hero_section_container} page_section_container`}>
                    <div className={styles.points_content}>
                        <h1 className={styles.main_title}>{mainTitle}</h1>
                        <p className={styles.subtitle}>{subtitle}</p>

                        <div className={styles.main_search}>
                            {islinknamecomponent ? <div className={styles.linkname_title_div}>
                                <h2 style={{ textTransform: "capitalize" }} className={`${styles.title} ${direction} `}>
                                    {getTitleStringOfHastaxiDeals(hasTaxiDeals, language)}
                                </h2>
                            </div> : null}

                            <RadioButton setInternalState={setInternalState} internalState={internalState} />
                            <br />
                            {reservations.map((obj, index) => {
                                let reservationError = (internalState.errorHolder.status === 403 && Array.isArray(internalState.errorHolder.reservations)) ? internalState.errorHolder.reservations?.[index] : {};
                                let { transferDetails, selectedPickupPoints, selectedDropoffPoints } = obj
                                let { transferDateTimeString } = transferDetails
                                const [splitedHour, splitedMinute] = splitDateTimeStringIntoHourAndMinute(transferDateTimeString) || []
                                const [splitedDate] = splitDateTimeStringIntoDate(transferDateTimeString) || []
                                return (
                                    <div key={index}>
                                        {reservations.length > 1 && index == 0 ? <div className={`${styles.tr_journey_title} ${direction}`}>{appData?.words["seGoingDetails"]}</div> : <React.Fragment></React.Fragment>}
                                        {index == 1 ? <div className={`${styles.return_journey_title} ${direction}`}>{appData?.words["seReturnDetails"]}</div> : <React.Fragment></React.Fragment>}
                                        <div className={`${styles.points_wrapper} ${direction}`} direction={String(direction === "rtl")}>

                                            {
                                                ["pickup", "dropoff"].map((destination) => (
                                                    <HeroInputComponent
                                                        key={destination}
                                                        destination={destination}
                                                        points={destination === "pickup" ? selectedPickupPoints : selectedDropoffPoints}
                                                        direction={direction}
                                                        appData={appData}
                                                        env={env}
                                                        index={index}
                                                        language={language}
                                                        reservations={reservations}
                                                        internalState={internalState}
                                                        reducerSessionToken={reducerSessionToken}
                                                        reservationsRef={reservationsRef}
                                                        reservationError={reservationError}
                                                        dispatch={dispatch}
                                                        setInternalState={setInternalState}
                                                    />
                                                ))
                                            }

                                            <InputDateComponent
                                                islinknamecomponent={islinknamecomponent}
                                                splitedDate={splitedDate}
                                                index={index}
                                                selectedPickupPoints={selectedPickupPoints}
                                                direction={direction}
                                                appData={appData}
                                                onChangeSetDateTimeHandler={onChangeSetDateTimeHandler}
                                                reservations={reservations}
                                            />

                                            <HourMinuteComponent
                                                islinknamecomponent={islinknamecomponent}
                                                splitedHour={splitedHour}
                                                splitedMinute={splitedMinute}
                                                index={index}
                                                selectedPickupPoints={selectedPickupPoints}
                                                direction={direction}
                                                appData={appData}
                                                onChangeSetDateTimeHandler={onChangeSetDateTimeHandler}
                                                transferDateTimeString={transferDateTimeString}
                                            />

                                            {/* when jtype is 1  button not gonna be visible on transfer details point */}
                                            {index === 1 && reservations.length > 1 || index === 0 && reservations.length === 1 ?
                                                <div className={`${styles.btn_div}`}  >
                                                    {internalState[`quotation-loading`] ?
                                                        <div className={`${styles.waveloadingdiv}`} style={{ marginTop: '0px' }}>
                                                            <WaveLoading />
                                                        </div>
                                                        :
                                                        <Button
                                                            onBtnClick={(e) => getQuotations(e)}
                                                            type={BUTTON_TYPES.PRIMARY}
                                                            style={{ fontSize: "14px", padding: `${"10px"}` }}
                                                            btnText={appData?.words["seGetQuotation"]}
                                                            icon={<i className="fa-solid fa-magnifying-glass"></i>}
                                                            iconPos="LEFT" />
                                                    }
                                                </div>
                                                : <React.Fragment></React.Fragment>}
                                        </div>
                                        {internalState[`error-booking-message-${index}`] ?
                                            <div className={styles.errorBookedMessage}>
                                                <p>{internalState[`error-booking-message-${index}`]}</p>
                                            </div> : <></>}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
