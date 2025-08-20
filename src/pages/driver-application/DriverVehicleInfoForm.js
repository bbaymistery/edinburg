import TextInput from '../../components/elements/TextInput';
import { generalAllTranslations } from '../../constants/generalTranslataions';
import styles from './styles.module.scss'; // kendi styles modülüne göre yolu kontrol et

const DriverVehicleInfoForm = ({ internalState, onChangeHandler, error, language = "en" }) => {
    return (
        <div className={styles.form_card}>
            <h2>{generalAllTranslations.strVehicleInfo[language]}</h2>
            <div className={styles.form} boxtype={'vehicleinfo'}>
                {/* Araç Sahibi misiniz? */}
                <div className={styles.input_box}>
                    <label className={styles.radio_group_label}>{generalAllTranslations.strAreYouOwner[language]}</label>
                    <div className={styles.radio_group}>
                        <label>
                            <input type="radio" name="isOwner" value="yes" checked={internalState.isOwner === 'yes'} onChange={onChangeHandler} />
                            {generalAllTranslations.strYes[language]}
                        </label>
                        <label>
                            <input type="radio" name="isOwner" value="no" checked={internalState.isOwner === 'no'} onChange={onChangeHandler} />
                            {generalAllTranslations.strNo[language]}
                        </label>
                    </div>
                </div>

                {/* Marka / Model & Model Yılı */}
                <div className={styles.input_box}>
                    <div className={styles.input}>
                        <TextInput label={generalAllTranslations.strVehicleMakeModel[language]} name="vehicleMakeModel" value={internalState.vehicleMakeModel} onChange={onChangeHandler} inputStyle={{ border: error.vehicleMakeModel ? "1px solid red" : "" }} />
                    </div>
                    <div className={styles.input}>
                        <TextInput label={generalAllTranslations.strModelYear[language]} name="vehicleYear" value={internalState.vehicleYear} onChange={onChangeHandler} inputStyle={{ border: error.vehicleYear ? "1px solid red" : "" }} />
                    </div>
                </div>

                {/* Plaka ve Yolcu Kapasitesi */}
                <div className={styles.input_box}>
                    <div className={styles.input}>
                        <TextInput label={generalAllTranslations.strPlateNumber[language]} name="licensePlate" value={internalState.licensePlate} onChange={onChangeHandler} inputStyle={{ border: error.licensePlate ? "1px solid red" : "" }} />
                    </div>
                    <div className={styles.input}>
                        <TextInput label={generalAllTranslations.strPassengerCapacity[language]} name="passengerCapacity" value={internalState.passengerCapacity} onChange={onChangeHandler} inputStyle={{ border: error.passengerCapacity ? "1px solid red" : "" }} />
                        <p className={styles.ps_note}>* {generalAllTranslations.strExcludingDriver[language]}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DriverVehicleInfoForm;
