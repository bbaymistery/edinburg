import React from 'react'
import styles from "./styles.module.scss"
import { currentDate } from '../../../../../helpers/getDates'
import { useDispatch } from 'react-redux'
import { hours, minutes } from '../../../../../constants/minutesHours'
const TaxiDealFlowDateTimeTogether = (props) => {
    let { index, selectedPickupPoints, reservations, appData, direction, splitedDate, splitedHour, splitedMinute } = props
    const dispatch = useDispatch()
    const onChangeSetDateTimeHandler = (params = {}) => {
        let { value, hourOrMinute, journeyType } = params
        dispatch({ type: 'SET_JOURNEY_DATETIME', data: { journeyType, hourOrMinute, value } })
    }
    return (
        <div className={styles.date_time_together}>
            <div className={` ${styles.search_menu} ${styles.book_input_date} ${styles.third_column}`}>
                <p className={direction}>{selectedPickupPoints[0]?.pcatId === 1 ? appData?.words["seLandingDate"] : appData?.words["sePickUpDate"]}</p>
                <div className={`${styles.date_div} ${direction === 'rtl' && styles.date_div_rtl}`}>
                    <input
                        type="date"
                        name="pickup-date"
                        className={direction === "rtl" ? styles.rtl : ""}
                        value={splitedDate}
                        min={index === 0 ? currentDate() : reservations[0].transferDetails.transferDateTimeString.split(" ")[0]}
                        onChange={(e) => onChangeSetDateTimeHandler({ value: e.target.value, hourOrMinute: "date", journeyType: index })}
                    />
                </div>
                <i className={`fa-solid fa-calendar-days ${styles.date_picker_icon}`}></i>
            </div>
            <div className={` ${styles.search_menu} ${styles.hours_minutes} ${styles.fourth_column}`}>
                <p className={direction}>{selectedPickupPoints[0]?.pcatId === 1 ? appData?.words["seLandingTime"] : appData?.words["sePickUpTime"]}</p>
                <div className={`${styles.select_time_div} ${direction}`}>
                    {Array.from(new Array(2)).map((arr, i) => {
                        return (
                            <div key={i} className={styles.booking_form_hour_minute_wrapper}>
                                <i className={`fa-sharp fa-solid fa-angle-down ${direction === "rtl" ? styles.left : ""}`}></i>
                                <select
                                    defaultValue={i === 0 ? splitedHour : splitedMinute}
                                    onChange={(e) => onChangeSetDateTimeHandler({ value: e.target.value, hourOrMinute: i === 0 ? "hour" : "minute", journeyType: index })} >
                                    {/* //if index==0 thenhours will show up if not then minutes show up */}
                                    {i === 0
                                        ? hours.map((hour) => (<option key={hour.id} id={hour.id} value={hour.value}> {hour.value} </option>))
                                        : minutes.map((minute) => (<option key={minute.id} id={minute.id} value={minute.value}  > {minute.value} </option>))}
                                </select>
                            </div>)
                    })}
                </div>
            </div>
        </div>
    )
}

export default TaxiDealFlowDateTimeTogether