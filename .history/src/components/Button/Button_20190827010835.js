import React from 'react';
import styles from './Button.module.scss';





const Button = ({value, type}) => (
    <input className={styles.btn_submit} type={type} value={value}/>
);

export default Button;
