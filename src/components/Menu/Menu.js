import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Menu.module.scss';



const Menu = () => (
    <nav >
        <ul className={styles.menu}>
        <li className={styles.navItemLogo}>
                <NavLink exact to="/">
                <img src='  https://i.postimg.cc/BbSkQnQ6/rebusuje-logo.png' alt='home' />
                </NavLink>
            </li>
            <ul className={styles.navItem}>
            <li className={styles.navItem}>
                <NavLink exact to="/gallery">
                <img src='https://i.postimg.cc/15X9wTT8/menu.png' alt='home' />
                </NavLink>
            </li>
            <li className={styles.navItem}>
                <NavLink to="/contact">
                <img src='https://i.postimg.cc/W4grjtwc/add-comment-button.png' alt='home' />
                </NavLink>
            </li>
            </ul>
           
        </ul>
        
    </nav>
    
);

export default Menu;