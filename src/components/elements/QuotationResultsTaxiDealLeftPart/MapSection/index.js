import React from 'react'
import mapstyles from "./mapstyles.module.scss"
import ResponsiveImage from '../ResponsiveImage';
const MapSection = ({ onMapOpen, appData }) => (
    <div className={mapstyles.map_direction}>
        <p>
            <ResponsiveImage src="/images/others/mapTurkey.webp" alt="Map" />
        </p>
        <button onClick={onMapOpen} className='btn btn_hover_reverse_primary'>
            <i className="fa-solid fa-map-location-dot"></i> {appData?.words["strShowOnMap"]}
        </button>
    </div>
);
export default MapSection