import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Menu.module.scss';



const Menu = (props) => (
    <nav >
        <ul className={styles.menu}>
            <li className={styles.menuLogo}></li>
            <ul className={styles.nav}>
                <li className={styles.navItem}>
                    <NavLink exact to="/gallery" onClick={props.onCloseRebus}>
                    <img src='https://i.postimg.cc/15X9wTT8/menu.png' alt='home' />
                    </NavLink>
                </li>
                <li className={styles.navItem}>
                    <NavLink to="/contact" onClick={props.onCloseRebus}>
                    <img src='https://i.postimg.cc/W4grjtwc/add-comment-button.png' alt='home' />
                    </NavLink>
                </li>
            </ul>
        </ul>
    </nav>
);

export default Menu;