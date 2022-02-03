import React from 'react'
import styles from '../styles/Header.module.scss'
import { useState } from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
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
                            <li className={styles.nav__li}><a href={'#experience'} className={styles.nav__a}>About us</a></li>
                            <li className={styles.nav__li}><a href={'#cases'} className={styles.nav__a}>Our cases</a></li>
                            <li className={styles.nav__li}><a href={'#parsing'} className={styles.nav__a}>Pricing</a></li>
                            <li className={styles.nav__li}>
                                <button className={styles.nav__button}>
                                    Contact
                                    <img className={styles.nav__button__img} src={'/button_arrow.svg'} />
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div onClick={handleClick} className={styles.burger}>

                </div>
            </header>
            <div className={styles.banner}>
                <h1 className={styles.banner__title}>MULTIPLY.TODAY</h1>
                <div className={styles.banner__subtitle}>
                    <a className={styles.banner__subtitle__a}>we add figures to your amazon business</a>
                </div>
            </div>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                styles={{borderRadius: 25}}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <div className={styles.menu_a}>
                <ul className={styles.menu__ul}>
                    <li className={styles.menu__li}><a onClick={handleClose} href={'#experience'} className={styles.menu__a}>About us</a></li>
                    <li className={styles.menu__li}><a onClick={handleClose} href={'#cases'} className={styles.menu__a}>Our cases</a></li>
                    <li className={styles.menu__li}><a onClick={handleClose} href={'#parsing'} className={styles.menu__a}>Pricing</a></li>
                    <li className={styles.menu__li}>
                        <a href={'#contacts'} className={styles.menu__a}>
                            Contact
                        </a>
                    </li>
                </ul>
                </div>
            </Menu>
        </React.Fragment>
    )
}