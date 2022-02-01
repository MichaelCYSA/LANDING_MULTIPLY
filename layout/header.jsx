import React from 'react'
import styles from '../styles/Header.module.scss'

export default function Header() {
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
                                    <img className={styles.nav__button__img} src={'/button_arrow.svg'}/>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div className={styles.banner}>
                <h1 className={styles.banner__title}>MULTIPLY.TODAY</h1>
                <div className={styles.banner__subtitle}>
                    <a className={styles.banner__subtitle__a}>your most important partner</a>
                </div>
            </div>
        </React.Fragment>
    )
}