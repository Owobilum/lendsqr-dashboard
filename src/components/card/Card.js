import styles from './Card.module.scss'

const Card = ({ data: { icon, title, figure } }) => {
    return (
        <div className={styles.container}>
            <p className={styles.img_box}>
                <img src={icon} alt="" className={styles.card_img} />
            </p>
            <p className={styles.title}>{title}</p>
            <p className={styles.figure}>{figure}</p>
        </div>
    )
}

export default Card