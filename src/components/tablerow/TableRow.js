import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import actionsIcon from '../../images/icons/actions_icon.png'
import viewIcon from '../../images/icons/view_icon.png'
import blacklistIcon from '../../images/icons/blacklist_user_icon.png'
import activateIcon from '../../images/icons/activate_user_icon.png'
import styles from './TableRow.module.scss'

const TableRow = ({ user: { id, name, email }, openPopover, setOpenPopover }) => {
    const navigate = useNavigate()
    const [showMenu, setShowMenu] = useState(false)
    if (name.length > 12) {
        name = name.substring(0, 12)
    }

    useEffect(() => {
        !openPopover && setShowMenu(false)
    }, [openPopover])

    return (
        <tr>
            <td>Lendsqr</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>09090909090</td>
            <td>{`${id}/${id}/${'2020'}`}</td>
            <td
            >
                <button
                    style={{
                        border: 'none',
                        backgroundColor: '#f3fcf6',
                        color: 'green',
                        borderRadius: '20%',
                        padding: 8
                    }}
                >Active
                </button>
            </td>
            <td style={{ minWidth: 32, textAlign: 'right' }}>
                <img src={actionsIcon} alt="" className={styles.action}
                    onClick={() => {
                        setOpenPopover(prev => !prev)
                        setShowMenu(prev => !prev)
                    }}
                />
            </td>
            {showMenu && openPopover &&
                <td className={styles.popover}>
                    <span onClick={() => navigate(`/user/${id}`)} className={styles.link}>
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

export default React.memo(TableRow)