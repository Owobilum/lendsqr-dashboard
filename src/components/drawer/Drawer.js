import React from 'react'

import styles from './Drawer.module.scss'
import bellIcon from '../../images/bell_icon.png'
import profileImg from '../../images/profile_img.jpg'
import downArrow from '../../images/down_arrow.png'
import switchOrgIcon from '../../images/icons/switch_org_icon.png'
import moreIcon from '../../images/icons/more_icon.png'
import dashboardIcon from '../../images/icons/dashboard_icon.png'
import { navData } from '../../utility/data/navData'


const Drawer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
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

                <div className={styles.nav_item}>
                    <p className={styles.icon_box}><img src={switchOrgIcon} alt=""></img></p>
                    <p className={styles.icon_text}>Switch Organization</p>
                    <p className={styles.icon_action}><img src={moreIcon} alt="" /></p>
                </div>

                <div className={styles.nav_item}>
                    <p className={styles.icon_box}><img src={dashboardIcon} alt=""></img></p>
                    <p className={styles.icon_text}>Dashboard</p>
                </div>

                {
                    Object.keys(navData).map(category => (
                        <React.Fragment key={category}>
                            <p className={styles.category}>{category}</p>
                            <div>
                                {navData[category].map(({ title, icon }) => (
                                    <div className={styles.nav_item} key={title}
                                        style={title === 'Users' ? { background: '#f3fcfc', borderLeft: 'solid 1px #39CDCC', paddingLeft: 2 } : {}}
                                    >
                                        <p className={styles.icon_box}><img src={icon} alt=""></img></p>
                                        <p className={styles.icon_text}>{title}</p>
                                    </div>
                                ))}
                            </div>
                        </React.Fragment>
                    ))
                }
            </div>
        </div>
    )
}

export default Drawer

