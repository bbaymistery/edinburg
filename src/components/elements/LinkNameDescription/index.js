import React from 'react'
import { useSelector } from 'react-redux'
import styles from "./styles.module.scss"
/**
 * Renders a section with a link name and description.
 *
 * @param {Object} props - The component props.
 * @param {string} props.pageContent - The HTML content to display in the section.
 * @returns {JSX.Element} - The rendered LinkNameDescription component.
 */
const LinkNameDescription = (props) => {
    let { pageContent } = props
    const state = useSelector(state => state.pickUpDropOffActions)
    let { params: { direction, } } = state;
    const createMarkup = (htmlString) => { return { __html: htmlString } };
  

    return (
        <div className={`${styles.linkname_description_section} ${direction} page`}>
            <div className={`${styles.linkname_description_section_section} page_section`}>
                <div className={`${styles.linkname_description_section_section_container} page_section_container`}>
                    <div className={styles.content} dangerouslySetInnerHTML={createMarkup(pageContent)} />
                </div>
            </div>
        </div>
    )
}

export default LinkNameDescription