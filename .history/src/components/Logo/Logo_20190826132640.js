import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Logo.module.scss';


const Logo = () => (
    <div className={styles.wrapper}>
        <Link  
            className={styles.logo} 
            to="/">
                <img className={styles.image}src='https://i.postimg.cc/BbSkQnQ6/rebusuje-logo.png' alt='Rebusuje_logo' />
        </Link>
    </div>              
);

export default Logo;