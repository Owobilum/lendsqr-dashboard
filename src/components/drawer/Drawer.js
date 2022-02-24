import React from 'react'

import styles from './Drawer.module.scss'
import bellIcon from '../../images/bell_icon.png'
import profileImg from '../../images/profile_img.jpg'
import downArrow from '../../images/down_arrow.png'

const Drawer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.profile_container}>
                <div className={styles.flex_container}>
                    <div className={styles.img_container}>
                        <img src={profileImg} alt="" className={styles.profile_img} />
                    </div>
                    <div className={styles.username}>
                        <p className={styles.name}>{'Lawrence'}</p>
                        <div className={styles.action}><img src={downArrow} alt="" /></div>
                    </div>
                </div>

                <div>
                    <span>Docs</span>
                </div>
                <div>
                    <img src={bellIcon} alt="" />
                </div>
            </div>
            <hr className={styles.divider} />
        </div>
    )
}

export default Drawer

