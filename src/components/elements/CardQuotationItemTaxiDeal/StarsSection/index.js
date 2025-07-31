import React from 'react'
import styles from "./stars.module.scss"
const StarsSection = ({ review, direction, appData }) => {
    return (
        <div direction={String(direction === "rtl")} className={styles.stars}>
            <a href="https://www.reviews.co.uk/company-reviews/store/airport-pickups-london-com" target={"_blank"} title="APL Transfers" className={styles.reviews} rel="noreferrer"  >
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <span style={{ marginLeft: "10px" }}> {review?.ratingValue}/{review?.bestRating}</span>

            </a>

            <a href="https://www.reviews.co.uk/company-reviews/store/airport-pickups-london-com" target={"_blank"} title="APL Transfers  " className={styles.reviews} rel="noreferrer">
                <i className="fa-solid fa-comment"></i>
                {review?.reviewCount} {`${appData?.words["strReviews"]}`}
            </a>
        </div>
    )
}

export default StarsSection