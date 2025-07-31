import React from 'react'
import contactstyle from  "./contactInfo.styles.module.scss"
import styles from  "../styles.module.scss"
import ResponsiveImage from '../ResponsiveImage';
const ContactItem = ({ icon, href, text }) => (
    <li>
        <span>
            <ResponsiveImage src={icon.src} alt={icon.alt} style={{ width: icon.width }} />
        </span>
        <a href={href}>{text}</a>
    </li>
);
const ContactInfoSection = ({ direction, appData }) => (
    <div className={`${styles.left_info} ${contactstyle.left_support}`}>
        <p className={`${styles.left_info_title} ${direction}`}>{appData?.words["appContactUsHotLine"]}</p>
        <ul>
            <ContactItem
                icon={{ src: "/images/others/tel.webp", alt: "Phone", width: "19px" }}
                href="tel:+902127085540"
                text="+90 212 708 5540"
            />
            <ContactItem
                icon={{ src: "/images/others/WhatsAppp.webp", alt: "Whatsapp", width: "23px" }}
                href="https://api.whatsapp.com/send/?phone=447387901028"
                text="+44 73 8790 1028"
            />
            <ContactItem
                icon={{ src: "/images/others/mail.webp", alt: "Mail", width: "19px" }}
                href="mailto:info@apltransfers.com"
                text="info@apltransfers.com"
            />
        </ul>
    </div>
);

export default ContactInfoSection