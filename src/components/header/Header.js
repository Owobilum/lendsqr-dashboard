import React, { useState } from 'react'

import styles from './Header.module.scss'
import hamburger from '../../images/hamburger.svg'
import logo from '../../images/logo.svg'
import mobileLogo from '../../images/mobile_logo.png'
import bellIcon from '../../images/bell_icon.png'
import profileImg from '../../images/profile_img.jpg'
import downArrow from '../../images/down_arrow.png'
import searchIcon from '../../images/search_icon.png'
import Drawer from '../drawer/Drawer'
import Overlay from '../overlay/Overlay'

const Header = () => {
    const [showDrawer, setShowDrawer] = useState(false)

    return (
        <div className={styles.container}>
            <div className={styles.logo_container}>
                <img src={logo} alt="" className={styles.logo} />
                <img src={mobileLogo} alt="" className={styles.mobile_logo} />
            </div>
            <div className={styles.search_container}>
                <div className={styles.input_container}>
                    <input placeholder='Search for anything' />
                </div>
                <div className={styles.button_container}>
                    <button>
                        <img src={searchIcon} alt="" />
                    </button>
                </div>
            </div>
            <div className={styles.profile_container}>
                <div>
                    <span>Docs</span>
                </div>
                <div>
                    <img src={bellIcon} alt="" />
                </div>
                <div>
                    <img src={profileImg} alt="" className={styles.profile_img} />
                </div>
                <div className={styles.username}>
                    <p className={styles.name}>{'Lawrence'}</p>
                    <div className={styles.action}><img src={downArrow} alt="" /></div>
                </div>
            </div>
            <div className={styles.hamburger_container}>
                <img src={hamburger} alt="menu" className={styles.hamburger}
                    onClick={() => setShowDrawer(prev => !prev)}
                />
            </div>
            {
                showDrawer && <Drawer />
            }
            {
                showDrawer && <Overlay setShowDrawer={setShowDrawer} />
            }
        </div>
    )
}

export default Header