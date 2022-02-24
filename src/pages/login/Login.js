import React, { useState } from 'react'

import logo from '../../images/logo.svg'
import hero from '../../images/hero.svg'
import styles from './Login.module.scss'

const Login = () => {
    const [isShowPassword, setIsShowPasword] = useState(false)

    return (
        <div className={styles.container}>
            {/* LOGO */}
            <div>
                <img src={logo} alt="lendsqr_logo" className={styles.logo} />
            </div>
            {/* Login Form */}
            <div className={styles.main}>
                <div className={styles.form_container}>
                    <h1 className={styles.heading}>Welcome!</h1>
                    <p className={styles.subhead}> Enter details to login</p>
                    <form>
                        <div className={styles.input_container}>
                            <input type="text" placeholder='Email' />
                        </div>
                        <div className={styles.input_container}>
                            <input
                                type={isShowPassword ? 'text' : "password"} placeholder='Password' />
                            <p className={styles.show_btn} onClick={() => setIsShowPasword(prev => !prev)}>
                                <span>{isShowPassword ? 'hide' : 'show'}</span>
                            </p>
                        </div>
                        <a href='#'>forgot password?</a><br />
                        <button onClick={e => e.preventDefault()}>log in</button>
                    </form>
                </div>
                {/* Hero Image */}
                <div className={styles.hero_container}>
                    <img src={hero} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Login