import React from 'react'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'


function Header() {

    return (
        <>
            <header>
                <div className={styles.hamburger}>
                    <GiHamburgerMenu />
                </div>

                <div className={styles.logo}>
                    <img src="/assets/svg/logo.svg" alt="Privia Logo" />
                </div>

                <nav>
                    <ul>
                        <li> <Link to='/about'> About </Link> </li>
                        <li> <Link to='/product'> Product </Link> </li>
                        <li> <Link to='/pricing'> Pricing </Link> </li>
                        <li> <Link to='/resources'> Resources </Link> </li>
                        <li> <Link to='/customers'> Customers </Link> </li>
                    </ul>
                </nav>

                <div className={styles['profile-area']}>
                    <div className={styles.login}>Login</div>
                    <div className={styles.trial}>Start Free Trial</div>
                </div>
            </header>
        </>
    )
}

export default Header