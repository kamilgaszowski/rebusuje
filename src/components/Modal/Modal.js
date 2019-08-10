import React from 'react';
import styles from './Modal.module.scss';

const Modal = (props) => (
    <div className={styles.wrapper}>
    <button className={styles.exit}type='button' onClick={props.onCloseModal}>X</button>
    <h2>Brawo!</h2>
    <p>Prawidłowa odpowiedź to <span>{props.name}</span></p>
    </div>
);

export default Modal;