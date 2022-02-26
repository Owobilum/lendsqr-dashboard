import React, { useState } from 'react'

import styles from './Table.module.scss'
import filterIcon from '../../images/icons/filter_icon.png'
// import actionsIcon from '../../images/icons/actions_icon.png'
import prevIcon from '../../images/icons/prev_btn.png'
import nextIcon from '../../images/icons/next_btn.png'
import Filter from '../filter/Filter'
import TableRow from '../tablerow/TableRow'

const Table = ({ tableHeadings }) => {
    const [showFilter, setShowFilter] = useState(false)
    return (
        <div className={styles.root}>
            {/* Table */}
            <div className={styles.table_container}>
                <table>
                    <thead>
                        <tr>
                            {
                                tableHeadings.map((heading, index) => (
                                    <th key={heading}>
                                        <span style={{ marginRight: 4 }}>{heading}</span>
                                        <span>
                                            {(tableHeadings.length !== index + 1) &&
                                                <img src={filterIcon} alt="" className={styles.filter_icon}
                                                    onClick={() => setShowFilter(prev => !prev)}
                                                />
                                            }
                                        </span>
                                    </th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        <TableRow />
                        <TableRow />
                        <TableRow />
                        {/* <tr>
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

                        </tr> */}
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
            {showFilter && <Filter />}
        </div>
    )
}

export default Table