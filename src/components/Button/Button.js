import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';





const Button = ({children, ...props}) => (

    <Link to={props.to} className={styles.button}>
        {children}
    </Link >
);

export default Button;
