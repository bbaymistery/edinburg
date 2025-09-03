import { useRouter } from 'next/router';
import styles from './styles.module.scss';

import { navigator, expandedNavigatorDesktop } from '../../../constants/navigatior';
import { generalAllTranslations } from '../../../constants/generalTranslataions';

const DesktopMenu = ({ language, journeyType, airportTranslations, expandedMenu }) => {
    const router = useRouter();

    const isEnglish = language === 'en';

  
    return (
        <div className={styles.header_menu_content}>
            <ul>
                {(expandedMenu ? expandedNavigatorDesktop : navigator).map(({ path, innerText, list, type, title, strInnerText }, index) => {
                    const translatedText = generalAllTranslations?.[strInnerText]?.[language];
                    const fullPath = isEnglish ? path : `/${language}${path}`;
                    const isActive = router.pathname === path;

                    return (
                        <li key={innerText} className={`${styles.li_item} ${type === 'list' ? styles.has_children : ''}`}  >
                            {index === 0 ? (
                                <a href={isEnglish ? '/' : `/${language}`} title={translatedText} className={`${path.length ? styles.nocursor : ''} ${isActive ? styles.active : ''}`}    >
                                    <span>{translatedText}</span>
                                    <br />
                                </a>
                            ) : (
                                <a href={fullPath} title={title} className={`${path.length ? styles.nocursor : ''} ${isActive ? styles.active : ''}`} target={index === 6 ? '_blank' : ''}    >
                                    <span>{translatedText}</span>
                                    {type === 'list' && <i className="fa-solid fa-angle-down"></i>}
                                </a>
                            )}

                            {type === 'list' && (
                                <ul className={styles.hoverUl}>
                                    {list.map(({ path, hasTaxiDeals, strInnerText }) => {
                                        const fullPathList = isEnglish ? path : `/${language}${path}`;
                                        return (
                                            <li key={strInnerText} className={styles.li_item}>
                                                <a href={fullPathList} title={airportTranslations[language][strInnerText]}  >
                                                    <span>{airportTranslations[language][strInnerText]}</span>
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default DesktopMenu;
