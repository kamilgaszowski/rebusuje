import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';

import MailSharpIcon from '@material-ui/icons/MailSharp';
import AppsSharpIcon from '@material-ui/icons/AppsSharp';



const Menu = (props) => (
    <nav >
        <ul className={styles.menu}>
            <li className={styles.nav_item}>
                <NavLink exact to="/" onClick={props.onCloseRebus}>

                    <img className={styles.logo} src='https://i.postimg.cc/BbSkQnQ6/rebusuje-logo.png' alt='home' />
                </NavLink>
            </li>
            <div className={styles.container}>
                <li>
                    <NavLink
                        activeClassName={styles.active}
                        className={styles.nav_item}
                        exact to="/gallery"
                        onClick={props.onCloseRebus}>
                        <AppsSharpIcon className={styles.icon} />

                    </NavLink>
                </li>
                <li>
                    <NavLink
                        activeClassName={styles.active}
                        className={styles.nav_item}
                        to="/contact"
                        onClick={props.onCloseRebus}>
                        <MailSharpIcon className={styles.icon} />

                    </NavLink>
                </li>
            </div>
        </ul>

    </nav>
);

export default Menu;