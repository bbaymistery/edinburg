import React, { useState } from 'react';
import styles from "./styles.module.scss";
import { useSelector } from 'react-redux';
import dynamic from 'next/dynamic';
import ContactInfoSection from './ContactInfoSection';
import TripAdvisorSection from './TripAdvisorSection';
import ServiceSection from './ServiceSection';
import TFLSection from './TFLsection';
import MapSection from './MapSection';
import PaymentMethodsSection from './PaymentMethodSection';

// Dynamic Imports
const Map = dynamic(() => import('../../../pages/quotation-results/Map'));
const OutsideClickAlert = dynamic(() => import('../OutsideClickAlert'));

// Section Components
const MapModal = ({ onClose, markerPoints, polylinePath, env }) => (
    <div className={`${styles.modal_map} ${styles.modal}`}>
        <OutsideClickAlert onOutsideClick={onClose}>
            <div className={styles.modal_map_container}>
                <div onClick={onClose} className={styles.close_div}>
                    <i className="fa-sharp fa-solid fa-xmark"></i>
                </div>
                <Map datas={{ markerPoints, polylinePath }} isTaxiDeal={true} env={env} />
            </div>
        </OutsideClickAlert>
    </div>
);

// Main Component
const QuotationResultsTaxiDealLeftPart = ({ polylinePath, markerPoints, env }) => {
    const [taxidealMapStatus, setTaxidealMapStatus] = useState(false);

    const { appData } = useSelector(state => state.initialReducer)
    const state = useSelector(state => state.pickUpDropOffActions)
    let { params } = state
    let { direction, } = params
    return (
        <div className={styles.quotation_panel_istaxideal}>
            {taxidealMapStatus && (<MapModal onClose={() => setTaxidealMapStatus(false)} markerPoints={markerPoints} polylinePath={polylinePath} env={env} />)}

            <TripAdvisorSection direction={direction} appData={appData} />
            <ContactInfoSection direction={direction} appData={appData} />
            <ServiceSection direction={direction} appData={appData} />
            <MapSection onMapOpen={() => setTaxidealMapStatus(true)} appData={appData} />
            <PaymentMethodsSection direction={direction} appData={appData} />
            <TFLSection />
        </div>
    );
};

export default QuotationResultsTaxiDealLeftPart;