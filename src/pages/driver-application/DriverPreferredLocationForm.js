import styles from './styles.module.scss';
import { generalAllTranslations } from '../../constants/generalTranslataions';
import { getLocationOptions } from '../../constants/keywordsAndContents/driver/driverAplicationConstants';


const DriverPreferredLocationForm = ({ selectedLocation, onChangeHandler, language = "en", error }) => {

    return (
        <div className={styles.form_card}>
            <h2>{generalAllTranslations.strServiceArea[language]}</h2>
            <p className={styles.ps_note}>
                {error.preferredLocation ? <span style={{ color: "red" }}>{error.preferredLocation}</span> : generalAllTranslations.strSelectServiceLocations[language]}

            </p>
            <div className={styles.form} boxtype={'territory'}>

                <div className={styles.input_box}>
                    {getLocationOptions(language).map((option) => (
                        <label key={option.value} className={styles.checkbox_option}>
                            <input
                                type="checkbox"
                                name="preferredLocation"
                                value={option.value}
                                checked={Array.isArray(selectedLocation) && selectedLocation.includes(option.value)}
                                onChange={onChangeHandler}
                            />
                            {option.label}

                            {option.value === "other" && Array.isArray(selectedLocation) && selectedLocation.includes("other") && (
                                <input
                                    type="text"
                                    name="otherLocation"
                                    rows={2}
                                    className={styles.other_input_text}
                                    placeholder={generalAllTranslations.strPleaseSpecify?.[language] || "Please specify"}
                                    onChange={onChangeHandler}
                                    style={{ borderBottom: error.preferredLocation ? "1px solid red" : "" }}
                                />
                            )}

                        </label>
                    ))}
                </div>
                <p>
                    <strong>
                        {generalAllTranslations.strSubmitApplication[language]}
                    </strong>
                    <br />
                    {generalAllTranslations.strDriverApplicationSubmitFormNote[language]}</p>
            </div>
        </div>
    );
};

export default DriverPreferredLocationForm;