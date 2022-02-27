import React, { useEffect, useState } from 'react'

import styles from './Table.module.scss'
import filterIcon from '../../images/icons/filter_icon.png'
import prevIcon from '../../images/icons/prev_btn.png'
import nextIcon from '../../images/icons/next_btn.png'
import Filter from '../filter/Filter'
import TableRow from '../tablerow/TableRow'

const Table = ({ tableHeadings }) => {
    const [showFilter, setShowFilter] = useState(false)
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [usersPerPage, setusersPerPage] = useState(10)
    const indexOfLastUser = currentPage * usersPerPage
    const indexOfFirstUser = indexOfLastUser - usersPerPage
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser)
    const totalPages = users.length / usersPerPage

    const handleFetch = async () => {
        let storedUsers = localStorage.getItem("users")

        if (!storedUsers) {
            setLoading(true)
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/comments')
                const data = await res.json()
                setUsers(data)
                localStorage.setItem('users', JSON.stringify(data))
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        } else {
            setUsers(JSON.parse(storedUsers))
        }


    }

    useEffect(() => {
        handleFetch()
    }, [])

    if (loading) {
        return <h4 style={{ textAlign: 'center', textTransform: 'uppercase', paddingTop: 32 }}>loading...</h4>
    }

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
                                        <span style={{ marginRight: 4, minWidth: 32, padding: '0 4px' }}>{heading}</span>
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
                        {
                            currentUsers && currentUsers.map((user, index) => (
                                <TableRow user={user} key={index} />
                            ))
                        }
                    </tbody>
                </table>
            </div>
            {/* table footer */}
            <div className={styles.table_footer}>
                <div>
                    <span>Showing </span>
                    <select onChange={(e) => setusersPerPage(e.target.value)}>
                        <option value={10} defaultValue>{10}</option>
                        <option value={25} >{25}</option>
                        <option value={100} >{100}</option>
                    </select>
                    {" "}<span>out of 500</span>
                </div>
                <div className={styles.table_nav}>
                    <div>
                        <img
                            src={prevIcon}
                            alt=""
                            width="24px"
                            onClick={() => currentPage > 1 && setCurrentPage(prev => prev - 1)}
                        />
                    </div>
                    <div>
                        <button className={styles.page_btn} onClick={() => setCurrentPage(1)}>1</button>
                        <button className={styles.page_btn} onClick={() => setCurrentPage(1)}>2</button>
                        <button className={styles.page_btn} onClick={() => setCurrentPage(3)}>3</button>
                        <span>....</span>
                        <button className={styles.page_btn} onClick={() => setCurrentPage(totalPages)}>{totalPages}</button>
                    </div>
                    <div>
                        <img src={nextIcon} alt="" width="24px"
                            onClick={() => currentPage < totalPages && setCurrentPage(prev => prev + 1)}
                        />
                    </div>
                </div>
            </div>
            {showFilter && <Filter />}
        </div>
    )
}

export default Table