import React from 'react'
import styles from '../styles/Header.module.scss'
import { useState } from 'react'

export default function Header() {
    const [open, setOpen] = useState(false)
    return (
        <React.Fragment>
            <header className={styles.header}>
                <div className={styles['header__wrapper-left']}>
                    <div className={styles.header__logo}>

                    </div>
                </div>
                <div className={styles['header__wrapper-right']}>
                    <nav className={styles.header__nav}>
                        <ul className={styles.nav__ul}>
                            <li className={styles.nav__li}><a className={styles.nav__a}>About us</a></li>
                            <li className={styles.nav__li}><a className={styles.nav__a}>Experience</a></li>
                            <li className={styles.nav__li}><a className={styles.nav__a}>Pricing</a></li>
                            <li className={styles.nav__li}>
                                <button className={styles.nav__button}>
                                    Contact
                                    <img className={styles.nav__button__img} src={'/button_arrow.svg'} />
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div onClick={() => setOpen(prev => !prev)} className={styles.burger}>

                </div>
            </header>
            <div className={styles.banner}>
                <h1 className={styles.banner__title}>MULTIPLY.TODAY</h1>
                <div className={styles.banner__subtitle}>
                    <a className={styles.banner__subtitle__a}>your most important partner</a>
                </div>
            </div>
            {
                open &&
                <div className={styles.menu}>
                    <ul className={styles.menu__ul}>
                        <li className={styles.menu__li}><a className={styles.menu__a}>About us</a></li>
                        <li className={styles.menu__li}><a className={styles.menu__a}>Experience</a></li>
                        <li className={styles.menu__li}><a className={styles.menu__a}>Pricing</a></li>
                        <li className={styles.menu__li}>
                            <a className={styles.menu__a}>
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            }
        </React.Fragment>
    )
}