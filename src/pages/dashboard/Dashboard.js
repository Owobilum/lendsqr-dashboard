import React from 'react'

import Header from '../../components/header/Header'
import SideNav from '../../components/sidenav/SideNav'
import styles from './Dashboard.module.scss'
import { userCardData } from '../../utility/data/userCardData'
import Card from '../../components/card/Card'
import Table from '../../components/table/Table'


const tableHeadings = ['Organization', 'Username', 'Email', 'Phone Number', 'Date Joined', 'Status', '']

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
                    <Table tableHeadings={tableHeadings} />
                </div>
            </div>

        </div>
    )
}

export default Dashboard