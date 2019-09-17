import React from 'react';
import styles from './ContactView.module.scss';
import Logo from '../../components/Logo/Logo';


const ContactView = () => (
    <div className={styles.wrapper}>
        <Logo />
        <h2 className={styles.title}>Jarek Miś</h2>
        <p>Napisz do mnie:</p>
        <a href='mailto:J.mis@outlook.com'>J.mis@outlook.com</a>
        <form name="contact" method="POST" data-netlify="true" action="/contact" >
            <p>
                <label>Your Name: <input type="text" name="name" /></label>
            </p>
            <p>
                <label>Your Email: <input type="email" name="email" /></label>
            </p>

            <p>
                <label>Message: <textarea name="message"></textarea></label>
            </p>
            <p>
                <button type="submit">Send</button>
            </p>
        </form>

    </div>
);

export default ContactView;