import TextInput from '../../components/elements/TextInput';
import { generalAllTranslations } from '../../constants/generalTranslataions';
import styles from "./styles.module.scss"

const DriverPersonalInfoForm = ({ internalState, onChangeHandler, error, language = "en" }) => {
    return (
        <div className={styles.form_card}>
            <h2>{generalAllTranslations.strPersonalInfo[language]}</h2>
            <div className={styles.form} boxtype={'personalinfo'}>
                <div className={styles.input_box}>
                    <div className={styles.input}>
                        <TextInput inputStyle={{ border: error.fullname ? "1px solid red" : "" }} label={generalAllTranslations.strFullName[language]} name="fullname" value={internalState.fullname} onChange={onChangeHandler} />
                    </div>
                    <div className={styles.input}>
                        <TextInput inputStyle={{ border: error.email ? "1px solid red" : "" }} label={generalAllTranslations.strEmail[language]} name="email" value={internalState.email} onChange={onChangeHandler} />
                    </div>
                </div>
                <div className={styles.input_box}>
                    <div className={styles.input}>
                        <TextInput inputStyle={{ border: error.phone ? "1px solid red" : "" }} label={generalAllTranslations.strPhone[language]} name="phone" value={internalState.phone} onChange={onChangeHandler} />
                    </div>
                    <div className={styles.input}>
                        <TextInput inputStyle={{ border: error.birthdate ? "1px solid red" : "" }} label={generalAllTranslations.strBirthDate[language]} name="birthdate" type="date" value={internalState.birthdate} onChange={onChangeHandler} />
                    </div>
                </div>
                <div className={styles.input_box}>
                    <TextInput inputStyle={{ border: error.address ? "1px solid red" : "" }} label={generalAllTranslations.strHomeAddress[language]} name="address" value={internalState.address} onChange={onChangeHandler} />
                </div>
            </div>
        </div>
    );
};

export default DriverPersonalInfoForm;
