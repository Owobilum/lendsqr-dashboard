import React from 'react'

import styles from './SideNav.module.scss'
import { navData } from "../../utility/data/navData"
import switchOrgIcon from '../../images/icons/switch_org_icon.png'
import moreIcon from '../../images/icons/more_icon.png'
import dashboardIcon from '../../images/icons/dashboard_icon.png'

const SideNav = () => {
    return (
        <div className={styles.container}>
            <div className={styles.nav_item}>
                <p className={styles.icon_box}><img src={switchOrgIcon} alt=""></img></p>
                <p className={styles.icon_text}>Switch Organization</p>
                <p className={styles.icon_action}><img src={moreIcon} alt="" /></p>
            </div>

            <div className={styles.nav_item} style={{ margin: '32px 0' }}>
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
    )
}

export default SideNav