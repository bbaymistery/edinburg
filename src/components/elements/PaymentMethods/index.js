import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { BUTTON_TYPES } from "../Button/ButtonTypes";
import Button from "../Button/Button";
import OutsideClickAlert from "../OutsideClickAlert";
import moment from "moment-timezone";
import { collectQuotationsAsync } from "../../../helpers/getQuotations";
import { getPriceDetailsFromQuotation } from "../../../helpers/getPriceDetailsFromQuotation";

const PaymentMethods = (props) => {
  let { env, seatListPrice = 0 } = props
  const router = useRouter()
  const dispatch = useDispatch()
  let state = useSelector((state) => state.pickUpDropOffActions)
  let { params: { journeyType, tokenForArchieve, sessionToken, direction, language, quotations }, reservations } = state
  const { appData, paymentTypes } = useSelector(state => state.initialReducer)

  const updatedReservationsRef = useRef(reservations); // ilk değeri mevcut reservations

  const [iframeStripe, setIframeStripe] = useState("");
  const [dataTokenForWebSocket, setDataTokenForWebSocket] = useState("");
  const [statusToken, setStatusToken] = useState("");
  const [popUpWindow, setPopUpWindow] = useState("")//for paypal

  const [cashPaymentModal, setCashPaymentModal] = useState(false)
  const fetchArchieveToken = async (params = {}) => {
    let { token, paymentType, stage, updatedReservations } = params

    let reservationObj = updatedReservations

    if (parseInt(journeyType) === 1) {
      reservationObj = [
        {
          ...reservationObj[0],
          paymentDetails:
          {
            ...reservationObj[0].paymentDetails,
            token: token,
            paymentType: paymentType,
          },
        },
        {
          ...reservationObj[1],
          paymentDetails:
          {
            ...reservationObj[1].paymentDetails,
            token: token, paymentType: paymentType,
          },
        }
      ]
    } else {
      reservationObj = [{ ...reservationObj[0], paymentDetails: { ...reservationObj[0].paymentDetails, token: token, paymentType: paymentType, }, },]
    }
    const method = "POST"
    const url = `${env.apiDomain}/api/v1/sessions/add`;
    const body = JSON.stringify({ token: tokenForArchieve, details: reservationObj, stage })
    const headers = { "Content-Type": "application/json" }
    const response = await fetch(url, { method, body, headers });
    const data = await response.json();


  };
  //sadece paypal icin bunu saxladim
  const openPopUpWindow = (params = {}) => {
    let { statusOfWindowCloseOrOpen, url } = params
    if (statusOfWindowCloseOrOpen === 'open') {
      let windowOptions = `menubar=no,location=yes,toolbar=no,left=${window.screen.width / 2 - 550 / 2},width=550,height=800`;
      let willPopUp
      willPopUp = window?.open(url, "_blank", windowOptions);
      setPopUpWindow(willPopUp)

    }
    if (statusOfWindowCloseOrOpen === 'close') {
      if (popUpWindow) {
        popUpWindow?.close();
      }
      setPopUpWindow("")
    }
  };
  //*payment methods
  const cashMethod = (params = {}) => {
    let { token, paymentType, updatedReservations } = params
    fetchArchieveToken({ token: "", paymentType: "", stage: "CLICK_OVER_CASH_BUTTON", updatedReservations })
    // if it is cash payment you have set payment type first of all then send archive
    dispatch({ type: "SET_PAYMENT_TYPE_AND_TOKEN", data: { token, paymentType } })
    router.push(`${language === 'en' ? "/reservations-document" : `${language}/reservations-document`}`)

  };
  const stripeMethod = (params = {}) => {
    let { id, quotations, passengerEmail, url, updatedReservations } = params
    if (!iframeStripe) {
      // if it is card payment you have set payment type first of all then send archive then
      fetchArchieveToken({ token: "", paymentType: 7, stage: "CLICK_OVER_CARD_BUTTON", updatedReservations })
      const method = "POST"
      const body = JSON.stringify({
        quotations,
        type: id,
        language: "en",
        passengerEmail,
        "session-id": sessionToken,
        // mode: "sandbox",

      })
      const headers = { "Content-Type": "application/json" }
      const config = { method, headers, body, };
      try {
        fetch(url, config)
          .then((res) => res.json())
          .then((data) => {

            setDataTokenForWebSocket(data); //we use inside interval in order to detect it is which payment
            setStatusToken(data?.webSocketToken); //it will trigger interval and will make request
            setIframeStripe(data?.href);
            openPopUpWindow({ statusOfWindowCloseOrOpen: "close", url: "" })
            setPopUpWindow("")

          })
          .catch((error) => {

            window.handelErrorLogs(error, 'EDINBURG TRANSFERS   PaymentMethods Component - stripeMethod function fetching catch blog  ', { config, url })
          });
      } catch (error) {
        window.handelErrorLogs(error, ' EDINBURG TRANSFERS  PaymentMethods Component - stripeMethod function try catch blog ', { id, quotations, passengerEmail, url })
      }
    }
  };
  const paypalMethod = (params = {}) => {
    let { id, quotations, passengerEmail, url, updatedReservations } = params;
    fetchArchieveToken({ token: "", paymentType: 5, stage: "CLICK_OVER_CARD_BUTTON", updatedReservations })
    const method = "POST";
    const headers = { "Content-Type": "application/json" };
    const body = JSON.stringify({
      quotations,
      type: id,
      language: "en",
      passengerEmail,
      "session-id": sessionToken,
    });
    const config = { method, headers, body };

    try {
      if (!popUpWindow) {
        // 1️⃣ Açılır pencereyi hemen oluştur, ancak içeriği yükleme!
        let tempPopup = window.open(
          "about:blank", // Boş sayfa yerine bilgilendirici bir sayfa yükleyelim
          "_blank",
          "width=550,height=800"
        );

        // Eğer popup açılamadıysa hata mesajı ver
        if (!tempPopup) {
          alert("Popup blocked! Please check your browser settings.");
          return;
        }

        // 2️⃣ Popup içine bilgilendirici bir mesaj yaz
        tempPopup.document.write(`
          <html>
            <head><title>PayPal</title></head>
            <body style="text-align:center; padding:50px;">
              <h3>"Loading the payment page...</h3>
              <p>Please wait a few seconds.</p>
            </body>
          </html>
        `);
        tempPopup.document.close();

        // 3️⃣ Fetch işlemini başlat
        fetch(url, config)
          .then((res) => res.json())
          .then((data) => {
            setIframeStripe(""); // Eğer başka bir şey açıksa kapat
            setDataTokenForWebSocket(data); // Ödeme işlemi için token kaydet
            setStatusToken(data.webSocketToken); // Interval çalıştırmak için

            // 4️⃣ Fetch tamamlandığında, popup'ı asıl URL'ye yönlendir
            tempPopup.location.href = data.href;
            setPopUpWindow(tempPopup);
          })
          .catch((error) => {
            tempPopup.close(); // Hata olursa popup'ı kapat
            window.handelErrorLogs(error, "EDINBURG TRANSFERS   PaypalMethod Fetch Catch", { config, url });
          });
      }
    } catch (error) {
      window.handelErrorLogs(error, "EDINBURG TRANSFERS    PaypalMethod Try Catch", { id, quotations, passengerEmail, url });
    }
  };

  const checkQuotationPriceUpdatedOrNot = async (statusToken) => {
    const now = moment().tz("Europe/London");
    let updatedReservations = [...reservations]; // make a copy

    for (let index in updatedReservations) {
      const obj = updatedReservations[index];
      const { transferDetails, quotation: previousQuotation } = obj;
      const { transferDateTimeString } = transferDetails;

      const transferTime = moment.tz(transferDateTimeString, "YYYY-MM-DD HH:mm", "Europe/London");

      if (transferTime.isBefore(now)) {
        alert("Transfer time for reservation is in the past. Redirecting to home page.");
        router.push("/");
        return null;
      }

      const newQuotationsResponse = await collectQuotationsAsync({ reservations, journeyType, env,  });

      if (newQuotationsResponse.status === 200 && !quotations[0].taxiDeal) {
        const newQuotations = newQuotationsResponse.data[index] || {};
        const newQuotationOptions = newQuotations.quotationOptions || [];
        const newQuotation = newQuotationOptions.find(item => item.carId === previousQuotation.carId);


        if (newQuotation) {
        let prevQuotationDetails = getPriceDetailsFromQuotation({ 'quotation': previousQuotation, qtype: previousQuotation.qtype }).data || {};
          let newQuotationDetails = getPriceDetailsFromQuotation({ 'quotation': newQuotation, qtype: newQuotation.qtype }).data || {};
          if (newQuotationDetails.price !== prevQuotationDetails.price && !statusToken) {
            dispatch({ type: "GET_QUOTATION", data: { results: newQuotationsResponse, journeyType } });
            dispatch({ type: "SET_QUOTATION_ON_SPECIAL_CASE", data: { quotation: newQuotation, journeyType: index } });
          }
        }
        updatedReservations[index] = {
          ...updatedReservations[index],
          quotation: newQuotation,
        };
      }
    }
    return updatedReservations
  }

  //this function includes all the methods of payments
  const startPayment = async (id) => {


    try {
      const updatedReservations = await checkQuotationPriceUpdatedOrNot(statusToken); // güncel hali getir
      updatedReservationsRef.current = updatedReservations; // ⬅️ ref’e ata
      //general settings FOR PAYMENTS
      const paymentPagePath = JSON.parse(paymentTypes.filter((payment) => payment.id === id)[0].pagePath).path;


      const url = `${env.apiDomain}${paymentPagePath}`;
      const quotations = parseInt(journeyType) === 0
        ? [updatedReservations[0].quotation]
        : [updatedReservations[0].quotation, updatedReservations[1].quotation];
      const passengerEmail = updatedReservations[0].passengerDetails.email;


      //Payment methods
      if (id === 1) cashMethod({ token: "", paymentType: id, updatedReservations })
      if (id === 5) paypalMethod({ id, quotations, passengerEmail, url, updatedReservations });
      if (id === 7) stripeMethod({ id, quotations, passengerEmail, url, updatedReservations });
    } catch (error) {
      window.handelErrorLogs(error, 'EDINBURG TRANSFERS  PaymentMethods Component -startPayment function trys catch blog', { id })

    }
  }

  //this function triggering modal status of cash payment
  const setCashModal = (par) => {
    setCashPaymentModal(true)
    setIframeStripe("")
    openPopUpWindow({ statusOfWindowCloseOrOpen: "close", url: "" })
    setPopUpWindow("")
    setStatusToken("");
    setDataTokenForWebSocket("")
  }
  //this is checking up interval for each second (payment suces or not)
  useEffect(() => {
    let interVal;

    if (statusToken) {
      interVal = setInterval(async () => {

        const method = "POST"
        const headers = { "Content-Type": "application/json", }
        const body = JSON.stringify({ token: statusToken })
        const url = `${env.apiDomain}/api/v1/payment/status`;
        let config = { method, headers, body };

        try {
          let requ = await fetch(url, config);
          let resp = await requ.json();

          if (resp?.status === 200) {
            //after you get a success payment status and after set a token into paymentDEtails object then send archive
            window.scroll({ top: 0, left: 0, behavior: "smooth", });

            if (dataTokenForWebSocket?.href?.includes("stripe")) {
              fetchArchieveToken({ token: resp.data.token, paymentType: 7, stage: "GET_SUCCESS_CARD_PAYMENT", updatedReservations: updatedReservationsRef.current })
              dispatch({ type: "SET_PAYMENT_TYPE_AND_TOKEN", data: { token: resp.data.token, paymentType: 7 } })
              setIframeStripe("");
              setStatusToken("");
              router.push(`${language === 'en' ? "/reservations-document" : `${language}/reservations-document`}`)

            }

            if (dataTokenForWebSocket?.href?.includes("paypal")) {
              fetchArchieveToken({ token: resp.data.token, paymentType: 5, stage: "GET_SUCCESS_CARD_PAYMENT", updatedReservations: updatedReservationsRef.current })
              dispatch({ type: "SET_PAYMENT_TYPE_AND_TOKEN", data: { token: resp.data.token, paymentType: 5 } })
              openPopUpWindow({ statusOfWindowCloseOrOpen: "close", url: "" })
              setStatusToken("");
              router.push(`${language === 'en' ? "/reservations-document" : `${language}/reservations-document`}`)
            }
            clearInterval(interVal);
          }
        } catch (error) {
          let message = "EDINBURG TRANSFERS   PaymentMethods Component - useEffect statusToken catch blog  "
          window.handelErrorLogs(error, message, { config })
        }
      }, 2000);
    }
    return () => clearInterval(interVal);
  }, [statusToken]);

  useEffect(() => {
    //make interval to check if pop  up windiw closed or not
    //if yes then initialize status token
    const interval = setInterval(() => {
      if (popUpWindow.closed) {
        clearInterval(interval);
        setStatusToken("")
        setPopUpWindow("")
        setDataTokenForWebSocket("")
      }
    }, 500);
    return () => clearInterval(interval);
  }, [popUpWindow])


  const totalPrice = useMemo(() => {
    if (seatListPrice > 0) return seatListPrice;

    if (parseInt(journeyType) === 0) {
      const q = reservations[0]?.quotation;
      return q?.exchangedPrice ?? q?.price;
    }

    const prices = reservations.map(r => r?.quotation?.exchangedPrice ?? r?.quotation?.price);
    return prices.reduce((sum, p) => sum + parseInt(p || 0), 0);
  }, [seatListPrice, journeyType, reservations]);



  return (
    <>
      <div className={`${styles.payment_details}`}>
        <div className={styles.header} direction={String(direction === 'rtl')}>
          <div className={styles.header_top}>
            <h2 className={`${styles.header_top_title} ${direction}`} > {appData?.words["strHowWouldYouLikeToPay"]}</h2>
            <Link href={"/terms"} target="_blank" >
              <p className={styles.header_top_subtitle} direction={String(direction === 'rtl')}>
                <i className="fa-solid fa-check"></i>
                <span dangerouslySetInnerHTML={{ __html: (appData?.words["strByProceedingNote"].replace("_link_", "/terms")) }} />
              </p>
            </Link>
          </div>
          <div className={styles.header_tot_price} direction={String(direction === 'rtl')}>
            <p className={styles.header_tot_price_text}>{appData?.words["strTotalPrice"]}</p>
            <span className={styles.header_tot_price_price}>
              £ {totalPrice}
            </span>
          </div>
        </div>

        <div className={styles.payment_list}>
          {iframeStripe?.length > 0 ? <iframe src={iframeStripe} className={styles.iframe} frameBorder="0" allow="payment" ></iframe> : <React.Fragment></React.Fragment>}
          {/* */}

          <div className={`${styles.items_buttons}`}>
            <div title={appData?.words["strToDriverCashTitle"]} onClick={setCashModal} className={` ${styles.item} ${styles.item_1}`}   >
              <p>{appData?.words["strToDriverCashTitle"]}</p>
              <img src="/images/others/pp.jpg" alt="" />
            </div>
            {<div title={appData?.words["Pay with PayPal"]} onClick={() => startPayment(5)} className={` ${styles.item} ${styles.item_2}`}   >
              <p>{appData?.words["strPaywithPayPal"]} </p>
              <img src="/images/others/paypal.png" alt="" />
            </div>
            }
            {<div onClick={() => startPayment(7)} title={appData?.words["strPaybycard"]} className={`${styles.item} ${styles.item_4}`}   >
              <p>{appData?.words["strPaybycard"]} </p>
              <img src="/images/others/vsMaster.jpg" alt="" />
            </div>}
          </div>

          {cashPaymentModal ?
            <div className={`${styles.content_modal} ${styles.appear}`}>
              <div className={`${styles.confirmation_box} `}>
                <OutsideClickAlert onOutsideClick={() => setCashPaymentModal(false)}>
                  <div className={styles.header}>
                    <p>{appData?.words["strConfirmation"]}</p>
                    <i onClick={() => setCashPaymentModal(false)} className="fa-solid fa-xmark"></i>
                  </div>
                  <div className={styles.body}>
                    <p>{appData?.words["strYouHaveChosenToPayByCash"]}.</p>
                  </div>
                  <div className={styles.footer}>
                    <Button onBtnClick={() => startPayment(1)} type={BUTTON_TYPES.PRIMARY} btnText={`${appData?.words["strBookNow"]}`} />
                  </div>
                </OutsideClickAlert>
              </div>
            </div>
            : <></>}
        </div>
      </div>
    </>
  );
};

export default PaymentMethods;
