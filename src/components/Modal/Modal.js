import React from 'react';
import styles from './Modal.module.scss';

const Modal = ({onCloseModal, messageHeader, messageValue, value}) => (
    <div className={styles.container}>
         <div className={styles.wrapper}>
            <button className={styles.exit} type='button' onClick={onCloseModal}>X</button>
            <h2 className={styles.header}>{messageHeader}</h2>
            <div className={styles.message}>
                <p className={styles.text}>{messageValue}</p>
                <p className={styles.answer}>{value}</p>
            </div>
        </div>
    </div>
   
);

export default Modal;