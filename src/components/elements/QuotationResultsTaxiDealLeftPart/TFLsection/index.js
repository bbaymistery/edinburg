import React from 'react'
import ResponsiveImage from '../ResponsiveImage';
import styles from "../styles.module.scss"
import tflstyles from "./tflstyles.module.scss"
const TFLSection = () => (
    <div className={`${styles.left_info} ${tflstyles.tfl}`}>
        <ResponsiveImage src="/images/others/tfl2.webp" alt="TFL Logo" className={tflstyles.tfl_img} />
    </div>
);
export default TFLSection