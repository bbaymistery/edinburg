import React from 'react'
import styles from "./styles.module.scss"
const AdressInformations = ({ direction, appData }) => {
    return (
        <div className={styles.right}>
            <div className={styles.form_box}>
                <div className={styles.form_title_wrap}>
                    <div className={styles.form_title_wrap}>
                        <h3 className={styles.title}>  {appData.words["appContactUsHeader"]}</h3>
                    </div>

                    <div className={styles.form_content}>
                        <div className={styles.address_book}>
                            <ul tabIndex="-1">
                                <li tabIndex="-1">
                                    <i className="fa-solid fa-phone"></i>
                                    <h5 className="title font-size-16 pb-1">{appData?.words["appContactUsHotLine"]}</h5>
                                    {direction === 'rtl' ?
                                        <a style={{ flexDirection: "row-reverse", justifyContent: "flex-end", display: 'flex' }} href="tel:+902127085540" >
                                            <span>  + </span> 902127085540
                                        </a>
                                        :
                                        <a href="tel:+442086887744" > + 90 212 7085540</a>
                                    }
                                </li>
                                <li tabIndex="-1">
                                    <i className="fa-solid fa-globe"></i>
                                    <h5 className="title font-size-16 pb-1">{appData?.words["strFromAbroad"]}</h5>
                                    {direction === 'rtl' ?
                                        <a style={{ flexDirection: "row-reverse", justifyContent: "flex-end", display: 'flex' }} href="tel:+442086887744" >
                                            <span>  + </span> 442086887744
                                        </a>
                                        :
                                        <a href="tel:+442086887744" >+44 208 6887744</a>
                                    }
                                </li>

                                <li tabIndex="-1">
                                    <i className="fa-brands fa-whatsapp"></i>
                                    <h5 className="title font-size-16 pb-1">{appData?.words["strWhatsAppUs"]}</h5>
                                    {direction === 'rtl' ?
                                        <a style={{ flexDirection: "row-reverse", justifyContent: "flex-end", display: 'flex' }} target="_blank" href="https://api.whatsapp.com/send/?phone=447387901028&text&type=phone_number&app_absent=0">
                                            <span>  + </span>
                                            44 738 7901028
                                        </a>
                                        : <a target="_blank" href="https://api.whatsapp.com/send/?phone=447387901028&text&type=phone_number&app_absent=0">
                                            +44 738 7901028
                                        </a>


                                    }
                                </li>


                                <li tabIndex="-1">
                                    <i className="fa-solid fa-envelope"></i>
                                    <h5 className="title font-size-16 pb-1">{appData?.words["appContactUsEmailAddress"]}</h5>
                                    <a href="mailto: info@apltransfers.com"> info@apltransfers.com</a>
                                </li>

                                <li tabIndex="-1">
                                    <i className='fa-solid fa-location-dot'></i>
                                    <div>
                                        <h5>Address</h5>
                                        <a href="/">
                                            <p ><span>Istanbul</span>: Evinpark Residence, A Blok D 162, Fikirtepe, Cengiz Sk No:10, 34720 Kadıköy/İstanbul, Türkiye</p>
                                            <p>
                                                <span>Fethiye</span>: Taşyaka Mah. Ölüdeniz Caddesi No:21/A D:1, Mugla, Turkiye
                                            </p>
                                            <p><span>London</span>: APL Office, Novotel Cherry Lane, UB7 9HJ, UK</p>
                                        </a>

                                    </div>


                                </li>






                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdressInformations