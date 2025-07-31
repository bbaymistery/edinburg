import React from 'react'
import paymentstyles from  "./paymentstyles.module.scss"
import ResponsiveImage from '../ResponsiveImage';
import styles from  "../styles.module.scss"
const PaymentMethodsSection = ({ direction, appData }) => (
    <div className={`${styles.left_info} ${paymentstyles.acceptedcards}`}>
        <p className={`${styles.left_info_title} ${direction}`}>{appData?.words["strAcceptedCards"]}</p>
        <ResponsiveImage
            src="/images/others/payments.webp"
            alt="Accepted Cards"
            className={paymentstyles.acceptedcards_img}
        />
    </div>
);


export default PaymentMethodsSection