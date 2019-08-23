import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Menu.module.scss';



const Menu = (props) => (
    <nav >
        <ul className={styles.menu}>
            
                <li className={styles.nav_item}>
                    <NavLink exact to="/" onClick={props.onCloseRebus}>
                    <img src='https://i.postimg.cc/15X9wTT8/menu.png' alt='home' />
                    </NavLink>
                </li>
                <li className={styles.nav_item}>
                    <NavLink to="/contact" onClick={props.onCloseRebus}>
                    <img src='https://i.postimg.cc/2yx4bcQD/baseline-alternate-email-black-48dp.png' alt='home' />
                    </NavLink>
                </li>
           
        </ul>
    </nav>
);

export default Menu;