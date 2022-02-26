import React, { useState } from 'react'

import styles from './Tabs.module.scss'
import avatar from '../../images/icons/avatar.png'
import filledStar from '../../images/icons/filled_star.png'
import outlinedStar from '../../images/icons/outlined_star.png'
import GeneralDetails from '../generaldetails/GeneralDetails'

const tabHeadings = [
    { name: "generalDetails", text: "General Details" },
    { name: "documents", text: "Documents" },
    { name: "bankDetails", text: "Bank Details" },
    { name: "loans", text: "Loans" },
    { name: "savings", text: "Savings" },
    { name: "appAndSystem", text: "App and System" }
]

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('generalDetails')

    const handleActiveTab = e => {
        setActiveTab(e.target.name)
    }

    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.nav_section}>
                    <div className={styles.col_one}>
                        <img src={avatar} alt="" />
                    </div>
                    <div className={styles.col_two}>
                        <p className={styles.bold}>Grace Effiom</p>
                        <p>GEESMSDN29</p>
                    </div>
                    <div className={styles.col_three}>
                        <p className={styles.bold}>User's Teir</p>
                        <p><img src={filledStar} alt="" /><img src={outlinedStar} alt="" /></p>
                    </div>
                    <div className={styles.col_four}>
                        <p className={styles.bold}>₦200,000.00</p>
                        <p>1029930303/Providus Bank</p>
                    </div>
                </div>
                {/* Links */}
                <div className={styles.links_section}>
                    {
                        tabHeadings.map(({ name, text }) => (
                            <div key={name}
                                style={activeTab === name ? { borderBottom: 'solid #39CDCC' } : {}}
                            >
                                <button onClick={handleActiveTab} name={name}>{text}</button>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* Mounted component */}
            <div className={styles.selected_tab}>
                {activeTab === "generalDetails" && <GeneralDetails />}
            </div>

        </div>
    )
}

export default Tabs