import React, { useEffect, useState } from 'react'

import styles from './Table.module.scss'
import filterIcon from '../../images/icons/filter_icon.png'
import Filter from '../filter/Filter'
import TableRow from '../tablerow/TableRow'
import TableFooter from '../tablefooter/TableFooter'

const Table = ({ tableHeadings }) => {
    const [showFilter, setShowFilter] = useState(false)
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])
    const [openPopover, setOpenPopover] = useState(false)
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

    const handleChange = e => {
        setusersPerPage(e.target.value)
        setCurrentPage(1)
    }

    useEffect(() => {
        handleFetch()
    }, [])

    if (loading) {
        return <h4 style={{ textAlign: 'center', textTransform: 'uppercase', paddingTop: 32 }}>loading...</h4>
    }

    const handlePageNumbers = () => {
        let pages = []
        for (let i = 0; i < totalPages; i++) {
            if (i === 3) {
                break
            }
            pages.push(<button key={i * 100} className={styles.page_btn} onClick={() => setCurrentPage(`${Number(i + 1)}`)}>{i + 1}</button>)
        }
        return pages
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
                                <TableRow user={user} key={index} openPopover={openPopover} setOpenPopover={setOpenPopover} />
                            ))
                        }
                    </tbody>
                </table>
            </div>
            {/* table footer */}
            <TableFooter
                handleChange={handleChange}
                currentPage={currentPage}
                users={users}
                setCurrentPage={setCurrentPage}
                handlePageNumbers={handlePageNumbers}
                totalPages={totalPages}
            />
            {showFilter && <Filter />}
        </div>
    )
}

export default Table