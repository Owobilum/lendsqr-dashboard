import React from 'react'

import styles from './Overlay.module.scss'

const Overlay = ({ setShowDrawer }) => {
    return (
        <div className={styles.container} onClick={() => setShowDrawer(false)}>
        </div>
    )
}

export default Overlay

