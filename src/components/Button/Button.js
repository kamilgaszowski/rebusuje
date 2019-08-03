import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';





const Button = ({children, to}) => (

    <Link to={to} className={styles.button}>
        {children}
    </Link >
);

export default Button;
