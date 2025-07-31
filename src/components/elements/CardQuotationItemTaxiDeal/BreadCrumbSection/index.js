import React from 'react'
import styles from  "./breadcrumb.styles.module.scss"
const Breadcrumb = ({ pageTitle, language }) => {
    return (
        <p className={styles.breadcrumbs}>
            <span>
                <a href={`${language === 'en' ? "/" : `/${language}`}`} title="APL Transfers">
                    <span>Home</span>
                </a>
                →
            </span>
            &nbsp;
            &nbsp;
            <span>
                <span>{pageTitle}</span>
            </span>
        </p>
    )
}

export default Breadcrumb