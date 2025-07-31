import React from 'react'
import styles from "./qotationheader.styles.module.scss"
const QuotationHeaderSection = ({ appData, distance, duration, distanceInMiles, distanceInKm, formattedDuration }) => {
    return (
        <div className={`${styles.quotation_header}`}>
            <ul>
                {distance ?
                    <li>
                        <span>
                            <i className={`fa-solid fa-check ${styles.li_icon}`}>
                            </i>
                        </span>
                        {appData?.words["strDistance"]} : {distanceInMiles ? <span>{distanceInMiles} {appData?.words["strMiles"]} ({distanceInKm} km)</span> : <span>{distance}</span>}
                    </li>
                    : (<></>)}
                {duration ?
                    <li>
                        <span>
                            <i className={`fa-solid fa-check ${styles.li_icon}`}></i>
                        </span>
                        <span className={styles.left} >{appData?.words["strJourneyDurationTitle"]}</span>
                        :<span>{formattedDuration}</span>
                    </li> : (<></>)}
                <li><span><i className={`fa-solid fa-check ${styles.li_icon}`}></i></span>  {appData?.words["strWeConstantlyMonitorAllFlights"]}</li>
                <li><span><i className={`fa-solid fa-check ${styles.li_icon}`}></i></span> <span className={styles.strong}>{appData?.words["strAllInclusivePrices"]}</span> {appData?.words["strMeetandGreetIncludedForAirport"]} </li>
            </ul>
        </div>
    )
}

export default QuotationHeaderSection