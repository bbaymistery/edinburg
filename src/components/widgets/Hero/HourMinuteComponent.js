import styles from "./styles.module.scss"
import { hours, minutes } from '../../../constants/minutesHours'
// HourMinuteComponent.jsx
const HourMinuteComponent = ({
    onChangeSetDateTimeHandler,
    selectedPickupPoints,
    direction, appData, index,
    splitedHour, splitedMinute,
    transferDateTimeString // <-- ekle
}) => {
    const hour = String(splitedHour).padStart(2, "0");
    const minute = String(splitedMinute).padStart(2, "0");
    console.log({ hour, minute });

    return (
        <div className={styles.main_search_wrapper} key={transferDateTimeString}>
            <div className={styles.icon_wrapper}><i className="fa-solid fa-clock"></i></div>

            <div className={`${styles.search_menu} ${styles.hours_minutes}`}>
                <p className={direction}>
                    {selectedPickupPoints[0]?.pcatId === 1 ? appData?.words["seLandingTime"] : appData?.words["sePickUpTime"]}
                </p>

                <div className={`${styles.select_time_div} ${direction}`}>
                    {/* Saat */}
                    <div className={styles.booking_form_hour_minute_wrapper}>
                        <label htmlFor="hour"></label>
                        <select
                            aria-label="hour"
                            value={hour} // <--- controlled
                            onChange={(e) =>
                                onChangeSetDateTimeHandler({ value: e.target.value, hourOrMinute: "hour", journeyType: index })
                            }
                        >
                            {hours.map((h) => (
                                <option key={h.id} value={h.value}>{h.value}</option> // value "00".."23"
                            ))}
                        </select>
                    </div>

                    {/* Dakika */}
                    <div className={styles.booking_form_hour_minute_wrapper}>
                        <label htmlFor="minute"></label>
                        <select
                            aria-label="minute"
                            value={minute} // <--- controlled
                            onChange={(e) =>
                                onChangeSetDateTimeHandler({ value: e.target.value, hourOrMinute: "minute", journeyType: index })
                            }
                        >
                            {minutes.map((m) => (
                                <option key={m.id} value={m.value}>{m.value}</option> // value "00","05",...
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default HourMinuteComponent