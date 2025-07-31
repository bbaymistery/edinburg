import React from 'react'
import advisorstyle from  "./advisorstyle.module.scss"
import styles from  "../styles.module.scss"
import ResponsiveImage from '../ResponsiveImage';
const ImageLinkItem = ({ href, src, alt, style, className }) => (
    <li>
        <a className={advisorstyle.tripad_a} target="_blank" rel="noopener noreferrer" href={href} title={alt}>
            <ResponsiveImage src={src} alt={alt} style={style} className={className} />
        </a>
    </li>
);

const TripAdvisorSection = ({ direction, appData }) => (
    <div className={`${styles.left_info} ${advisorstyle.tripad_left_info}`}>
        <p className={`${styles.left_info_title} ${direction}`}>{appData?.words["strTripAdvisorReviews"]}</p>
        <ul>
            <ImageLinkItem
                href="https://www.tripadvisor.co.uk/Attraction_Review-g186338-d11966434-Reviews-Airport_Pickups_London-London_England.html"
                src="/images/others/TripAdvisor2.webp"
                alt="TripAdvisor Review"
                className={advisorstyle.tripad_img}
                style={{ width: "274px", objectFit: "cover" }}
            />
        </ul>
    </div>
);


export default TripAdvisorSection