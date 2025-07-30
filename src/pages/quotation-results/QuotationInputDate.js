import { currentDate } from '../../helpers/getDates'
import styles from "./styles.module.scss"
const QuotationInputDate = ({ reservations, onChangeSetDateTimeHandler, index ,direction,selectedPickupPoints,appData,splitedDate}) => {
    return <div className={` ${styles.search_menu} ${styles.book_input_date} `}>
        <h4 className={direction}>{selectedPickupPoints[0]?.pcatId === 1 ? appData?.words["seLandingDate"] : appData?.words["sePickUpDate"]}</h4>
        <div className={`${styles.date_div} ${direction}`}>
            <input
                type="date"
                name="pickup-date"
                className={direction === "rtl" ? styles.rtl : ""}
                value={splitedDate}
                min={index === 0 ? currentDate() : reservations[0].transferDetails.transferDateTimeString.split(" ")[0]}
                onChange={(e) => onChangeSetDateTimeHandler({ value: e.target.value, hourOrMinute: "date", journeyType: index })}
            />
        </div>
        <i className={`fa-solid fa-calendar-days ${styles.date_picker_icon} ${direction === "rtl" && styles.date_picker_icon_left}`}></i>
    </div>
}

export default QuotationInputDate