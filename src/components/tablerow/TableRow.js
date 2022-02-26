import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import actionsIcon from '../../images/icons/actions_icon.png'
import viewIcon from '../../images/icons/view_icon.png'
import blacklistIcon from '../../images/icons/blacklist_user_icon.png'
import activateIcon from '../../images/icons/activate_user_icon.png'
import styles from './TableRow.module.scss'

const TableRow = () => {
    const navigate = useNavigate()
    const [showMenu, setShowMenu] = useState(false)

    return (
        <tr>
            <td>Organization</td>
            <td>Username</td>
            <td>Email</td>
            <td>Phone Number</td>
            <td>Date Joined</td>
            <td>Status</td>
            <td>
                <img src={actionsIcon} alt="" className={styles.action}
                    onClick={() => setShowMenu(prev => !prev)}
                />
            </td>
            {showMenu &&
                <td className={styles.popover}>
                    <span onClick={() => navigate('/user/1')} className={styles.link}>
                        <img src={viewIcon} alt="" /> View Details
                    </span><br />
                    <span onClick={() => setShowMenu(prev => !prev)} className={styles.link}>
                        <img src={blacklistIcon} alt="" /> Blacklist User
                    </span><br />
                    <span onClick={() => setShowMenu(prev => !prev)} className={styles.link}>
                        <img src={activateIcon} alt="" />Activate User
                    </span><br />
                </td>
            }

        </tr>
    )

}

export default TableRow