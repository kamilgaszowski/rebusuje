import React from 'react';
import styles from './ContactView.module.scss';
import Logo from '../../components/Logo/Logo';


const ContactView = () => (
    <div className={styles.wrapper}>
        <Logo />
        <h2 className={styles.title}>Jarek Miś</h2>
        <p>Napisz do mnie:</p>
        <p>J.mis@outlook.com</p>
        <form action="https://formspree.io/kamil.gaszowski@gmail.com" method="POST">
            <label>Imię:</label>
            <input type="text" name="name" />
            <label>Twój imejl:</label>
            <input type="email" name="_replyto" />
            <label>Twoja wiadomość:</label>
            <textarea type='text' name='message'/>
            <input type="submit" value="Send" />
        </form>
    </div>
);

export default ContactView;