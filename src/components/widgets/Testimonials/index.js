import { useSelector } from 'react-redux'
import styles from "./styles.module.scss"
import DangerouslyInnerHtml from '../../elements/DangerouslyInnerHtml'
import { htmlContentsTestimonials } from '../../../constants/keywordsAndContents/testimonials/keywordsAndContens'
const Testimonials = () => {
    const state = useSelector(state => state.pickUpDropOffActions)
    let { params: { direction, language } } = state
    return (
        <div className={`${styles.testimonials} ${direction} page`} >
            <div className={`${styles.testimonials_section} page_section`}>
                <div className={`${styles.testimonials_section_container} page_section_container`}>
                    <DangerouslyInnerHtml  htmContent={htmlContentsTestimonials[language]} />
                </div>
            </div>
        </div>
    )
}

export default Testimonials