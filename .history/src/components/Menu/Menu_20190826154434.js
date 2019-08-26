import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';



const Menu = (props) => (
    <nav >
        <ul className={styles.menu}>
            <li className={styles.nav_item}>
                <NavLink exact to="/" onClick={props.onCloseRebus}>
                    <img src='https://i.postimg.cc/BbSkQnQ6/rebusuje-logo.png' alt='home' />
                </NavLink>
            </li>
            <div className={styles.container}>
                <li>
                    <NavLink
                        activeClassName={styles.active}
                        className={styles.nav_item}
                        exact to="/gallery"
                        onClick={props.onCloseRebus}>
                        {/* <img src='https://i.postimg.cc/15X9wTT8/menu.png' alt='home' /> */}
                        <p>Galeria</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        activeClassName={styles.active}
                        className={styles.nav_item}
                        to="/contact"
                        onClick={props.onCloseRebus}>
                        {/* <img src='https://i.postimg.cc/2yx4bcQD/baseline-alternate-email-black-48dp.png' alt='home' /> */}
                        <p>Kontakt</p>
                    </NavLink>
                </li>
            </div>
        </ul>

    </nav>
);

export default Menu;