import React from 'react';
import styles from './Modal.module.scss';

const Modal = ({onCloseModal, messageHeader,  name, messageValue}) => (
    <div className={styles.container}>
         <div className={styles.wrapper}>
            <input className={styles.exit} type='button' onClick={onCloseModal} value='X' autoFocus/>
            <h2 className={styles.header}>{messageHeader}</h2>
            <div className={styles.message}>
                <p className={styles.text}>{messageValue}</p>
                <p className={styles.answer}>{name}</p>
            </div>
        </div>
    </div>
   
);

export default Modal;