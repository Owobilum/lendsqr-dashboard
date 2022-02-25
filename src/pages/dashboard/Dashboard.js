import React from 'react'

import Header from '../../components/header/Header'
import SideNav from '../../components/sidenav/SideNav'
import styles from './Dashboard.module.scss'
import { userCardData } from '../../utility/data/userCardData'
import Card from '../../components/card/Card'
import filterIcon from '../../images/icons/filter_icon.png'
import actionsIcon from '../../images/icons/actions_icon.png'
import prevIcon from '../../images/icons/prev_btn.png'
import nextIcon from '../../images/icons/next_btn.png'

const tableHeadings = ['Organization', 'Username', 'Email', 'Phone Number', 'Date Joined', 'Status']

const Dashboard = () => {
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
                    <p className={styles.heading}>Users</p>
                    <div className={styles.cards_container}>
                        {
                            userCardData && userCardData.map(data => (
                                <Card data={data} key={data.title} />
                            ))
                        }
                    </div>
                    {/* Table */}
                    <div className={styles.table_container}>
                        <table>
                            <thead>
                                <tr>
                                    {
                                        tableHeadings.map(heading => (
                                            <th key={heading}>
                                                <span style={{ marginRight: 4 }}>{heading}</span>
                                                <span><img src={filterIcon} alt="" /></span>
                                            </th>
                                        ))
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Organization</td>
                                    <td>Username</td>
                                    <td>Email</td>
                                    <td>Phone Number</td>
                                    <td>Date Joined</td>
                                    <td>Status</td>
                                    <td>
                                        <img src={actionsIcon} alt="" />
                                    </td>

                                </tr>
                                <tr>
                                    <td>Organization</td>
                                    <td>Username</td>
                                    <td>Email</td>
                                    <td>Phone Number</td>
                                    <td>Date Joined</td>
                                    <td>Status</td>
                                    <td>
                                        <img src={actionsIcon} alt="" />
                                    </td>

                                </tr>
                                <tr>
                                    <td>Organization</td>
                                    <td>Username</td>
                                    <td>Email</td>
                                    <td>Phone Number</td>
                                    <td>Date Joined</td>
                                    <td>Status</td>
                                    <td>
                                        <img src={actionsIcon} alt="" />
                                    </td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* table footer */}
                    <div className={styles.table_footer}>
                        <div>
                            <span>Showing </span>
                            <select>
                                <option value="100" defaultValue>{100}</option>
                            </select>
                            {" "}<span>out of 100</span>
                        </div>
                        <div className={styles.table_nav}>
                            <div>
                                <img src={prevIcon} alt="" width="24px" />
                            </div>
                            <div>
                                1 2 3 .... 16
                            </div>
                            <div>
                                <img src={nextIcon} alt="" width="24px" />

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard