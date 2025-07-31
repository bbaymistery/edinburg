import React from 'react';
import styles from "./styles.module.scss";
import { useSelector } from 'react-redux';
import translations from './translations';
const icons = [
    {
        altName: "icon",
        i: "fa-solid fa-ticket"
    },
    {
        altName: "icon",
        i: "fa-solid fa-circle-check"
    },
    {
        altName: "icon",
        i: "fa-solid fa-gem"
    },
    {
        image: "/images/icons/medal.webp",
        altName: "icon",
        i: "fa-solid fa-award"
    },
]
const WhyChoice = () => {
    const state = useSelector(state => state.pickUpDropOffActions);
    const { params: { direction, language } } = state;

    const translation = translations[language] || translations.en;
    return (
        <div className={`${styles.whychoice} ${direction} page`} >
            <div className={`${styles.whychoice_section} page_section`}>
                <div className={`${styles.whychoice_section_container} page_section_container`}>
                    <div className={`${styles.featureIcons}`}>
                        {icons.map((icon, idx) => {
                            const content = translation.icons[idx];
                            return (
                                <div className={styles.featureIcon} key={idx}>
                                    <div className={styles.featureIcon_icon}>
                                        <i className={icon.i}></i>
                                    </div>
                                    <h2>{content.mainTitle}</h2>
                                    <p className={styles.featureIcon__text}>{content.subtitle}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyChoice;
