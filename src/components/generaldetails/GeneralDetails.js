import styles from './GeneralDetails.module.scss'
import { education, personalInfo, socials, guarantor } from '../../utility/data/generalDetailsData'

const GeneralDetails = () => {
    return (
        <div className={styles.container}>
            <p className={styles.heading}>Personal Information</p>
            <div className={styles.flex_box}>
                {
                    personalInfo.map(({ item, value }, index) => (
                        <div key={index}>
                            <p className={styles.item}>{item}</p>
                            <p className={styles.value}>{value}</p>
                        </div>
                    ))
                }
            </div>

            <p className={styles.heading}>Education and Employment</p>
            <div className={styles.flex_box}>
                {
                    education.map(({ item, value }, index) => (
                        <div key={index}>
                            <p className={styles.item}>{item}</p>
                            <p className={styles.value}>{value}</p>
                        </div>
                    ))
                }
            </div>

            <p className={styles.heading}>Socials</p>
            <div className={styles.flex_box}>
                {
                    socials.map(({ item, value }, index) => (
                        <div key={index}>
                            <p className={styles.item}>{item}</p>
                            <p className={styles.value}>{value}</p>
                        </div>
                    ))
                }
            </div>

            <p className={styles.heading}>Guarantor</p>
            <div className={styles.flex_box} style={{ borderBottom: 'none' }}>
                {
                    guarantor.map(({ item, value }, index) => (
                        <div key={index}>
                            <p className={styles.item}>{item}</p>
                            <p className={styles.value}>{value}</p>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default GeneralDetails