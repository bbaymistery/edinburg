import React from 'react'
import styles from "./styles.module.scss"
import Textarea from '../../../../components/elements/Textarea'
const TaxiDealQuotationFlowTextArea = ({ appData, specialRequests, dispatch, passengerDetailsStatus, index }) => {
    const handleTextarea = (e, index) => {
        let { name, value } = e.target;
        if (["specialRequests"].includes(name))
            dispatch({ type: 'SET_TRANSFER_DETAILS', data: { name, value, index, updateBothJourneyCheckBox: passengerDetailsStatus } })
    }
    return (
        <div className={styles.textarea_div}>
            <Textarea label={appData?.words["strSpecialRequestsTitle"]} name="specialRequests" value={specialRequests} onChange={(e) => handleTextarea(e, index)} />
        </div>
    )
}

export default TaxiDealQuotationFlowTextArea