import React, { useEffect, useState } from 'react'
import { urlWithLangAtribute } from '../../helpers/urlWithLangAtrribute'
import { Router, useRouter } from "next/router";
import { useDispatch, useSelector } from 'react-redux'
import store from '../../store/store';
import { createWrapper } from 'next-redux-wrapper';
import moment from "moment-timezone";
import styles from "./styles.module.scss"
import GlobalLayout from '../../components/layouts/GlobalLayout';
import PaymentPageSummary from '../../components/elements/PaymentPageSummary'
import PaymentMethods from '../../components/elements/PaymentMethods'
import { splitDateTimeStringIntoDate, splitDateTimeStringIntoHourAndMinute } from '../../helpers/splitHelper';
import { quotationImagesObjWebp } from '../../constants/quotationImages';
import Image from 'next/image';
import { useWindowSize } from '../../hooks/useWindowSize';
import { collectQuotationsAsync } from '../../helpers/getQuotations';
import { getPriceDetailsFromQuotation } from '../../helpers/getPriceDetailsFromQuotation';
import { BUTTON_TYPES } from '../../components/elements/Button/ButtonTypes';
import Button from '../../components/elements/Button/Button';
import Alert from '../../components/elements/alert/Alert';
let title = ""
let keywords = ""
let description = ""
const PaymentDetails = (props) => {
    let { env } = props

    const router = useRouter()
    let state = useSelector((state) => state.pickUpDropOffActions)
    let { reservations, params: { tokenForArchieve, direction, quotations, language, journeyType } } = state


    const { appData } = useSelector(state => state.initialReducer)
    const carObject = appData?.carsTypes?.reduce((obj, item) => ({ ...obj, [item.id]: item, }), {});

    const tourActionState = useSelector(state => state.tourActions) || {}; // Add a fallback to an empty object
    let { selectedTour, seatLists, seatListPrice,isPound } = tourActionState;
    const numberOfAdults = seatLists[0].minNum
    const numberOfChildren = seatLists[1].minNum
    const numberOfInfants = seatLists[2].minNum
    const dispatch = useDispatch()
    const { nexturls, previousUrls, currentUrls } = urlWithLangAtribute({ languages: appData.languages, previousUrl: "/transfer-details", nextUrl: "/reservations-document", currentUrl: router.asPath })
    // const confirmationAlert = useConfirm({ previousUrl: previousUrls, nextUrl: nexturls, currentUrls, message: "If you refresh the page, all data will be deleted." })

    const [confirmation, setConfirmation] = useState(true);

    //passenger landing payment page We need archieveToken
    const fetchArchieveToken = async (params = {}) => {
        let { stage, } = params

        const method = "POST"
        const reservationObj = reservations
        const url = `${env.apiDomain}/api/v1/sessions/add`;
        const headers = { "Content-Type": "application/json" }
        const body = JSON.stringify({ token: tokenForArchieve, details: reservationObj, stage })
        const response = await fetch(url, { method, body, headers, });
        const data = await response.json();


    };


    useEffect(() => {
        let hasPriceUpdateWarningShown = false;

        const handleFocus = async () => {
            if (hasPriceUpdateWarningShown) return; // ❗ Alert gösterildiyse tekrar çalışmasın

            const now = moment().tz("Europe/Istanbul");
            console.log("focus");

            for (let index in reservations) {
                const obj = reservations[index];
                const { transferDetails, 'quotation': previousQuotation } = obj;
                const { transferDateTimeString } = transferDetails;

                const transferTime = moment.tz(transferDateTimeString, "YYYY-MM-DD HH:mm", "Europe/Istanbul");

                if (transferTime.isBefore(now)) {
                    alert(`Transfer time for reservation is in the past. Redirecting to home page.`);
                    router.push("/");
                    return;
                } else {
                    const newQuotationsResponse = await collectQuotationsAsync({ reservations, journeyType, env,  });

                    if (newQuotationsResponse.status === 200 && !quotations[0].taxiDeal) {
                        const newQuotations = newQuotationsResponse.data[index] || {};
                        const newQuotationOptions = (newQuotations || {}).quotationOptions || [];

                        const newQuotation = newQuotationOptions.find(item => item.carId === previousQuotation.carId);

                        if (newQuotation) {
                            let prevQuotationDetails = getPriceDetailsFromQuotation({ 'quotation': previousQuotation }).data || {};
                            let newQuotationDetails = getPriceDetailsFromQuotation({ 'quotation': newQuotation }).data || {};
                            console.log({ prevQuotationDetails, newQuotationDetails });

                            if (newQuotationDetails.price !== prevQuotationDetails.price) {
                                hasPriceUpdateWarningShown = true; // ❗ Alert gösterildi, artık tetiklenmesin
                                alert(appData.words["strPriceUpdatedOnPaymentPage"]);
                                return;
                            }
                        }
                    }
                }
            }
        };
        console.log({ hasPriceUpdateWarningShown });

        window.addEventListener("focus", handleFocus);
        return () => {
            window.removeEventListener("focus", handleFocus);
        };
    }, []);
    const printTourConfirmation = () => {
        const obj = reservations[0];
        const { transferDetails, passengerDetails, } = obj;
        const { transferDateTimeString, specialRequests } = transferDetails;

        const [splitedHour, splitedMinute] = splitDateTimeStringIntoHourAndMinute(transferDateTimeString) || [];
        const [splitedDate] = splitDateTimeStringIntoDate(transferDateTimeString) || [];

        const formattedDate = splitedDate.split(" ")[0].replace(/(\d+)\-(\d+)-(\d+)/, "$3-$2-$1");
        const formattedTime = `${splitedHour} : ${splitedMinute}`;


        const htmlTemplate = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <title>APL Transfers Tour Booking </title>
        </head>
        <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;" onload="window.print(); window.close();">
          <div style="max-width: 750px; margin: 0 auto; background: #ffffff; padding: 25px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
            
            <div style="text-align: center; margin-bottom: 20px;">
              <h2 style="margin: 0; font-size: 24px; color: #333;">Booking Confirmation</h2>
              <p style="margin: 5px 0; font-size: 14px; color: #555;">Thank you for booking with us</p>
            </div>
      
            <div style="border-top: 2px solid #eee; padding-top: 20px;">
              <h3 style="font-size: 18px; color: #051036;">Passenger Details</h3>
              <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                <tbody>
                  <tr><td style="padding: 8px;"><strong>Full Name:</strong></td><td style="padding: 8px;">${passengerDetails.firstname}</td></tr>
                  <tr><td style="padding: 8px;"><strong>Email Address:</strong></td><td style="padding: 8px;">${passengerDetails.email}</td></tr>
                  <tr><td style="padding: 8px;"><strong>Phone Number:</strong></td><td style="padding: 8px;">+${passengerDetails.phone}</td></tr>
                  <tr><td style="padding: 8px;"><strong>Date:</strong></td><td style="padding: 8px;">${formattedDate}</td></tr>
                  <tr><td style="padding: 8px;"><strong>Time:</strong></td><td style="padding: 8px;">${formattedTime}</td></tr>
                  <tr><td style="padding: 8px;"><strong>Notes:</strong></td><td style="padding: 8px;">${specialRequests || "-"}</td></tr>
                  <tr><td style="padding: 8px;"><strong>You Selected:</strong></td><td style="padding: 8px;">${selectedTour[0]?.pageTitle[language] || "-"}</td></tr>
                  <tr><td style="padding: 8px;"><strong>Adults:</strong></td><td style="padding: 8px;">${numberOfAdults}</td></tr>
                  <tr><td style="padding: 8px;"><strong>Children:</strong></td><td style="padding: 8px;">${numberOfChildren}</td></tr>
                  <tr><td style="padding: 8px;"><strong>Infants:</strong></td><td style="padding: 8px;">${numberOfInfants}</td></tr>
                  <tr><td style="padding: 8px;"><strong>Total Price:</strong></td><td style="padding: 8px;">${seatListPrice} ${isPound ? "£" : "Є"}</td></tr>
                </tbody>
              </table>
            </div>
      
            <div style="text-align: center; margin-top: 30px; font-size: 14px; color: #999;">
              <p>APL Transfers &copy; 2025</p>
            </div>
          </div>
        </body>
        </html>`;



        handleSendTourDetails(htmlTemplate)
    };

    const handleSendTourDetails = (htmlTemplate) => {
        try {
            dispatch({ type: "ALERT", payload: { loading: true } })
            const method = "POST"
            const headers = { Accept: "application/json, text/plain, */*", "Content-Type": "application/json", }
            const body = JSON.stringify({
                senderId: 7,
                reciverMails: ["info@apltransfers.com"],
                subject: "Tour reservation",
                mailContent: htmlTemplate
            })
            let reqOptions = { method, body, headers, };
            fetch(`${env.apiDomain}/tools/mailer`, reqOptions)
                .then((res) => {
                    dispatch({ type: "ALERT", payload: { loading: false } })
                    if (res.status === 200) {
                        dispatch({ type: "ALERT", payload: { success: "Tour reservation sent to our team. We’ll get back to you shortly." } })
                    }
                    setTimeout(() => {
                        router.push("/")
                        dispatch({ type: "RESET_SELECTED_POINTS", data: { journeyType: 0 } });
                    }, 2500);

                })
                .catch((e) => {
                    dispatch({ type: "ALERT", payload: { errors: "Bir hata oluştu. Lütfen bizimle iletişime geçiniz." } })
                });
        } catch (error) {
            console.log(error);

        }
    }


    let size = useWindowSize();
    let { width } = size
    // prompt the user if they try and leave with unsaved changes
    useEffect(() => {
        if (!selectedTour?.[0]) {
            const confirmationMessage = "If you leave the page, all data will be deleted.";
            // This function will be triggered when the user tries to leave the page
            const beforeUnloadHandler = async (e) => {
                // When we click to close the browser
                setTimeout(() => { fetchArchieveToken({ stage: "PLAN_TO_CLOSE_PAYMENT_PAGE" }) }, 10);

                // In case it is cancelled
                if (window.event.cancelable) {
                    setTimeout(() => { fetchArchieveToken({ stage: "PAYMENT_PAGE_NOT_CLOSED" }) }, 450);
                }

                if (confirmation) {
                    (e || window.event).returnValue = confirmationMessage;
                    return confirmationMessage;
                }
            };

            // This function will be triggered when the user tries to navigate to another page
            const beforeRouteHandler = (url) => {

                if (confirmation) {
                    if (nexturls.includes(url) || previousUrls.includes(url) || currentUrls.includes(url)) {
                        setConfirmation(false);
                        return;
                    } else {
                        setConfirmation(true);
                    }

                    if (Router.pathname !== url && !confirm(confirmationMessage)) {
                        Router.events.emit("routeChangeError");
                        throw `Route change to "${url}" was aborted (this error can be safely ignored). See https://github.com/zeit/next.js/issues/2476.`;
                    }
                }
            };

            // This function is triggered when the user closes the browser or reloads the page
            const handleEndConcert = async () => {
                const headers = new Headers();
                headers.append("Content-Type", "application/json");
                const method = "POST";
                const reservationObj = reservations;
                const url = `${env.apiDomain}/api/v1/sessions/add`;
                const body = JSON.stringify({ token: tokenForArchieve, details: reservationObj, stage: "PAYMENT_PAGE_IS_CLOSED" });
                const response = await fetch(url, { method, body, headers, keepalive: true });
                const data = await response.json();
            };
            // Add event listeners to handle the above functions
            window.addEventListener("beforeunload", beforeUnloadHandler);
            window.addEventListener('unload', handleEndConcert);
            Router.events.on("routeChangeStart", beforeRouteHandler);
            // Remove the event listeners when the component is unmounted
            return () => {
                window.removeEventListener("beforeunload", beforeUnloadHandler);
                window.removeEventListener('unload', handleEndConcert);
                Router.events.off("routeChangeStart", beforeRouteHandler);
            };
        }

    }, [confirmation]);



    return (
        <GlobalLayout keywords={keywords} title={title} description={description} >
            <div className={`${styles.payment_details} page`}>
                <div className={`${styles.payment_details_section} page_section`}>
                    <Alert />

                    <div className={`${styles.payment_details_section_container} page_section_container`}>
                        {/* strTotalPrice */}
                        <div className={styles.payment_details_section} >
                            {reservations.map((obj, index) => {
                                let { transferDetails, quotation, selectedPickupPoints, selectedDropoffPoints, passengerDetails } = obj
                                let { transferDateTimeString, passengersNumber, specialRequests } = transferDetails
                                const [splitedHour, splitedMinute] = splitDateTimeStringIntoHourAndMinute(transferDateTimeString) || []
                                const [splitedDate] = splitDateTimeStringIntoDate(transferDateTimeString) || []
                                //here will be visible when passenger comes from home page
                                const passengerDetailsConfig = [
                                    {
                                        icon: "fas fa-user",
                                        label: appData.words["appContactUsFormFullname"],
                                        value: passengerDetails.firstname,
                                    },
                                    {
                                        icon: "fas fa-at",
                                        label: appData.words["strEmailAddress"],
                                        value: passengerDetails.email,
                                    },
                                    {
                                        icon: "fas fa-phone",
                                        label: appData.words["appContactUsFormPhone"],
                                        value: `+${passengerDetails.phone}`,
                                    },
                                    {
                                        icon: "fas fa-users",
                                        label: appData.words["strPassengers"],
                                        value: passengersNumber,
                                    },
                                    {
                                        icon: "fas fa-calendar-alt",
                                        label: appData.words["strOn"],
                                        value: splitedDate.split(" ")[0].replace(/(\d+)\-(\d+)-(\d+)/, "$3-$2-$1"),
                                    },
                                    {
                                        icon: "fas fa-clock",
                                        label: appData.words["strTime"],
                                        value: `${splitedHour} : ${splitedMinute}`,
                                    },
                                    {
                                        icon: "fa-solid fa-road",
                                        label: appData.words["strDistance"],
                                        value: quotations[index]?.distance,
                                    },
                                    {
                                        icon: "fa-solid fa-clock-rotate-left",
                                        label: appData.words["strDuration"],
                                        value: quotations[index]?.duration,
                                    },
                                    {
                                        icon: "fas fa-car",
                                        label: appData.words["carsTransferType"],
                                        value: carObject[quotation.carId]?.name,
                                    },
                                    {
                                        icon: "fa-solid fa-comment",
                                        label: appData.words["strNotes"],
                                        value: specialRequests,
                                    },
                                ];
                                const toursPassengerDetailsConfig = [
                                    {
                                        icon: "fas fa-user",
                                        label: appData.words["appContactUsFormFullname"],
                                        value: passengerDetails.firstname,
                                    },
                                    {
                                        icon: "fas fa-at",
                                        label: appData.words["strEmailAddress"],
                                        value: passengerDetails.email,
                                    },
                                    {
                                        icon: "fas fa-phone",
                                        label: appData.words["appContactUsFormPhone"],
                                        value: `+${passengerDetails.phone}`,
                                    },
                                    {
                                        icon: "fas fa-calendar-alt",
                                        label: appData.words["strOn"],
                                        value: splitedDate.split(" ")[0].replace(/(\d+)\-(\d+)-(\d+)/, "$3-$2-$1"),
                                    },
                                    {
                                        icon: "fas fa-clock",
                                        label: appData.words["strTime"],
                                        value: `${splitedHour} : ${splitedMinute}`,
                                    },
                                    {
                                        icon: "fa-solid fa-comment",
                                        label: appData.words["strNotes"],
                                        value: specialRequests,
                                    },
                                    {
                                        icon: "fa-solid fa-landmark",
                                        label: appData.words["strYouSelected"],
                                        value: selectedTour[0]?.pageTitle[language] ? selectedTour[0]?.pageTitle[language] : "",
                                    },
                                    {
                                        icon: "fa-solid fa-user",
                                        label: appData.words["strAdults"],
                                        value: numberOfAdults,
                                    },
                                    {
                                        icon: "fa-solid fa-child",
                                        label: appData.words["strChildren"],
                                        value: numberOfChildren,
                                    },
                                    {
                                        icon: "fa-solid fa-baby",
                                        label: appData.words["strInfants"],
                                        value: numberOfInfants,
                                    }
                                ];
                                return (
                                    <div key={index}>
                                        <div className={`${styles.main_container}`} >
                                            <div className={styles.left}>
                                                <div className={styles.left_top_title}>
                                                    {index === 0 ? appData?.words["strYourBookingDetails"] : appData?.words["strReturnJourneyDetails"]}
                                                </div>
                                                <div className={styles.left_content_of_card}>

                                                    {selectedTour?.length > 0 ? <></> : <div className={styles.show_ondestkop}>
                                                        <PaymentPageSummary selectedPickupPoints={selectedPickupPoints} selectedDropoffPoints={selectedDropoffPoints} />
                                                    </div>}
                                                    {selectedTour?.length > 0 ? <></> :
                                                        (<div className={styles.image_div}>
                                                            <div className={styles.names}>
                                                                <div className={styles.text_1} style={{ textTransform: 'capitalize' }}>
                                                                    {appData?.words["strYouSelected"]}
                                                                </div>
                                                                <div className={styles.text_2} style={{ textTransform: 'capitalize' }}>
                                                                    {carObject[quotation.carId]?.name}
                                                                </div>
                                                            </div>
                                                            <div className={styles.image}>
                                                                <img src={`${quotationImagesObjWebp[quotation?.carId]?.image}`} alt="" />
                                                            </div>
                                                        </div>
                                                        )}


                                                    {/* we r adding manually tour imagebut it willbe dynamic when we select selected tour */}
                                                    {selectedTour?.length > 0 ?
                                                        <div className={styles.tour_image_div}  >
                                                            <Image
                                                                src={selectedTour[0]?.images[0]}
                                                                className={styles.img}
                                                                fill
                                                                alt={"tem.headTitle"}
                                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                            />
                                                        </div> : <></>}
                                                </div>
                                            </div>
                                            <div className={styles.right} id="print_for_email_tour">
                                                <div className={styles.right_top_title}>
                                                    {index === 0 ? appData?.words["strPassengerDetails"] : appData?.words["strReturnJourneyPassengerDetails"]}
                                                </div>

                                                <div className={styles.passenger_details}>
                                                    <div className={styles.card_info}>
                                                        <div className={styles.info}>
                                                            <ul>
                                                  
                                                                {
                                                                    (selectedTour?.length > 0 ? toursPassengerDetailsConfig.slice(0, 4) : passengerDetailsConfig.slice(0, 4)).map((detail, idx) => (
                                                                        // simply we dont add boder bottom for last element of toursPassengerDetailsConfig
                                                                        <li key={idx} >
                                                                            <div className={styles.details}>
                                                                                <div className={`${styles.details_headerr_li} ${direction}`}>
                                                                                    <div className={styles.li_info}>
                                                                                        <i className={detail.icon} aria-hidden="true"></i>
                                                                                        <p className={styles.property}>{detail.label}</p>
                                                                                    </div>
                                                                                    <p className={styles.value}>:{detail.value}</p>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                    ))
                                                                }
                                                                {width <= 990 ? <li className={styles.show_onmobile}>
                                                                    <PaymentPageSummary selectedPickupPoints={selectedPickupPoints} selectedDropoffPoints={selectedDropoffPoints} showIcon={true} />
                                                                </li> : <></>}

                                                                {/* name email phone and passengers  here visible */}
                                                                {
                                                                    (selectedTour?.length > 0 ? toursPassengerDetailsConfig : passengerDetailsConfig)
                                                                        .slice(4).map((detail, idx) => (
                                                                            <li key={idx}>
                                                                                <div className={styles.details}>
                                                                                    <div className={`${styles.details_headerr_li} ${direction}`}>
                                                                                        <div className={styles.li_info}>
                                                                                            <i className={detail.icon} aria-hidden="true"></i>
                                                                                            <p className={styles.property}>{detail.label}</p>
                                                                                        </div>
                                                                                        <p className={styles.value}>{`:${detail.value}`}</p>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                        ))
                                                                }
                                                                {selectedTour?.length > 0 ?
                                                                    <p className={styles.tour_price}><span>Total Price </span>  <span>{seatListPrice} {isPound ? "£" : "Є"}</span> </p>
                                                                    :
                                                                    <></>}


                                                            </ul>
                                                        </div>
                                                    </div>

                                                </div>
                                                {selectedTour.length > 0 ?
                                                    <div className={styles.btn_div}>
                                                        <Button
                                                            type={BUTTON_TYPES.PRIMARY_OUTLINE}
                                                            onBtnClick={printTourConfirmation}
                                                            style={{ padding: "10px 17.5px", }}
                                                            btnText={appData.words["strConfirmSendTitle"]}
                                                        />
                                                    </div>
                                                    : <></>}

                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                            {selectedTour.length > 0 ? <></> : <PaymentMethods env={env} seatListPrice={seatListPrice} />}
                        </div>
                    </div>
                </div>
            </div>
        </GlobalLayout>
    )
}

export default PaymentDetails
const makestore = () => store;
const wrapper = createWrapper(makestore);

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req, res, ...etc }) => {
    const initialLanguages = store.getState().initialReducer?.appData?.languages
    const langs = initialLanguages.map((lang) => lang.value)

    for (let i = 0; i < langs.length; i++) {
        const lang = langs[i]
        const langUrl = lang === 'en' ? '/payment-details' : `/${lang}/payment-details`
        if (req.url === langUrl) {
            return {
                redirect: {
                    destination: lang === 'en' ? "/" : `/${lang}`,
                    permanent: false
                }
            }
        }
    }


    return {
        props: {
            data: ''
        }
    }


});