import { useNavigate } from "react-router-dom"

import Header from "../../components/header/Header"
import SideNav from "../../components/sidenav/SideNav"
import styles from './User.module.scss'
import backArrow from '../../images/icons/back_arrow.png'
import Tabs from "../../components/tabs/Tabs"

const User = () => {
    const navigate = useNavigate()
    return (
        <div className={styles.root}>
            <Header />
            <div className={styles.container}>
                {/* SIDENAV */}
                <div className={styles.nav_container}>
                    <SideNav />
                </div>
                {/* CONTENT */}
                <div className={styles.content_container}>
                    <p className={styles.back_btn}>
                        <img src={backArrow} alt="" onClick={() => navigate(-1)} />  Back to Users
                    </p>
                    <div className={styles.heading_row}>
                        <p className={styles.heading}>User Details</p>
                        <div className={styles.btn_box}>
                            <p>
                                <button className={styles.blacklist}>
                                    blacklist user
                                </button>
                            </p>
                            <p>
                                <button className={styles.activate}>
                                    Activate user
                                </button>
                            </p>

                        </div>
                    </div>

                    {/* TABS */}
                    <Tabs />

                </div>
            </div>

        </div>
    )
}

export default User