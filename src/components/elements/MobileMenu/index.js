import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { navigator , expandedNavigatorMobile} from '../../../constants/navigatior';
import styles from './styles.module.scss';
import { generalAllTranslations } from '../../../constants/generalTranslataions';

const MobileMenu = ({ handleClickNavLinkMobileMenuNotList, language, handleClickNavLinkMobileMenuList, openMenu, airportTranslations ,expandedMenu}) => {
    const router = useRouter();
    const isEnglish = language === 'en';

    const handleSubLinkClick = (listPath, hasTaxiDeals) => {
        const targetPath = isEnglish ? listPath : `/${language}${listPath}`;

        if (router.asPath !== targetPath) {
            handleClickNavLinkMobileMenuList({ hasTaxiDeals });
            router.push(targetPath);
        }
    };

    return (
        <div className={`${styles.header_content_menu_mobile} ${openMenu ? styles.active_header_content_menu_mobile : ''}`} expand={String(expandedMenu)}>
            <ul className={styles.menu_content_ul}>
                {(expandedMenu ? expandedNavigatorMobile : navigator).map((item, index) => {
                    let { path, innerText, list, type, title, firstChild, strInnerText } = item
                    const fullPath = isEnglish ? path : `/${language}${path}`;
                    const showDropdown = type === 'list';
                    const hasNoCursor = type==='list';
                    const isFirstChild = firstChild;
                    const isExternal = index ===6;
                    return (
                        <li key={innerText} className={`${showDropdown ? styles.has_children : ''}`} id="navLink"   >
                            <Link href={fullPath} onClick={() => handleClickNavLinkMobileMenuNotList({ index })} title={generalAllTranslations?.[strInnerText]?.[language]} className={`${hasNoCursor ? styles.nocursor : ''} ${isFirstChild ? styles.first_child_a : ''}`} target={isExternal ? '_blank' : ''}>
                                <span>{generalAllTranslations?.[strInnerText]?.[language]}</span>
                                {showDropdown && <i className="fa-solid fa-angle-down"></i>}
                            </Link>

                            {showDropdown && (
                                <ul className={styles.hoverUl}>
                                    {list.map(({ path: listPath, hasTaxiDeals, strInnerText }) => {
                                        const translation = airportTranslations?.[language]?.[strInnerText];

                                        return (
                                            <li key={strInnerText} onClick={() => handleSubLinkClick(listPath, hasTaxiDeals)} className={`  ${styles.li_item} ${!listPath.length ? styles.nocursor : ''}  `}   >
                                                <p title={translation}>
                                                    <span>{translation}</span>
                                                </p>
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div >
    );
};

export default MobileMenu;
