import styles from "./styles.module.scss"
const DangerouslyInnerHtml = ({ htmContent, customStyles = {} }) => {

    return (
        <div className={styles.dangerous_div} style={customStyles} dangerouslySetInnerHTML={{ __html: htmContent }}></div>
    )
}

export default DangerouslyInnerHtml