import React from 'react'
import styles from "./styles.module.scss"
import { useSelector } from 'react-redux'
const DestinationsCustomers = () => {
    const { appData } = useSelector(state => state.initialReducer)
    return (
        <div className={styles.destinations}>
            <div className={styles.destinations_content}>
                <div className={styles.column}>
                    <div className={styles.numbers}>5,200 </div>
                    <div className={styles.text}>{appData?.words["strDestinations"]}</div>
                </div>

                <div className={styles.column}>
                    <div className={styles.numbers}>757</div>
                    <div className={styles.text}>{appData?.words["strTotalVehicles"]}</div>
                </div>

                <div className={styles.column}>
                    <div className={styles.numbers}>1.6 M</div>
                    <div className={styles.text}>{appData?.words["strHappyCustomer"]}</div>
                </div>

                <div className={styles.column}>
                    <div className={styles.numbers}>
                        4.8
                    </div>
                    <div className={styles.text}>{appData?.words["strServiceRatings"]}</div>
                </div>

            </div>
        </div>
    )
}

export default DestinationsCustomers