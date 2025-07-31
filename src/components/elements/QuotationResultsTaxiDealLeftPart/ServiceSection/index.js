import React from 'react'
import styles from "../styles.module.scss"
import servicestyles from "./servicestyles.module.scss"
// Sub-components
const CheckboxItem = ({ id, text, direction }) => (
    <li className={direction}>
        <input id={id} readOnly className={servicestyles.checkbox} type="checkbox" defaultChecked />
        <label htmlFor={id} className={servicestyles.primary_text}>.</label>
        {text}
    </li>
);

const ServiceSection = ({ direction, appData }) => (
    <div className={`${styles.left_info} ${servicestyles.services}`} direction={String(direction === "rtl")}>
        <p className={styles.left_info_title}>{appData?.words["strAllInclusivePrices"]}</p>
        <ul>
            <CheckboxItem id="freemeet" text={appData?.words["strCarFeatureFreeMeetAndGreet"]} direction={direction} />
            <CheckboxItem id="FlightMonitoring" text={appData?.words["strFlightMonitoring"]} direction={direction} />
            <CheckboxItem id="FreeBaby" text={appData?.words["strFreeBabyChildSeat"]} direction={direction} />
            <CheckboxItem id="AllInclusive" text={appData?.words["strAllInclusiveFixedPrices"]} direction={direction} />
            <CheckboxItem id="NoCharge4Delay" text={appData?.words["strCarFeatureNoCharge4Delay"]} direction={direction} />
            <CheckboxItem id="FreeCancellation24h" text={appData?.words["strFreeCancellation24h"]} direction={direction} />
        </ul>
    </div>
);

export default ServiceSection