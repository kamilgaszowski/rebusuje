import React from 'react';
import styles from './ContactView.module.scss';
import Logo from '../../components/Logo/Logo';


const ContactView = () => (
    <div className={styles.wrapper}>
        <Logo />
        <h2 className={styles.title}>Jarek Miś</h2>
        <p>Napisz do mnie:</p>
        <a href='mailto:J.mis@outlook.com'>J.mis@outlook.com</a>


    </div>
);

export default ContactView;