import React from 'react';
import styles from './Button.module.scss';





const Button = ({value}) => (
    <input className={styles.btn_submit} type='submit' value={value}/>
);

export default Button;
