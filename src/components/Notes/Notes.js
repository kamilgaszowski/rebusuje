import React from 'react';
import styles from './Notes.module.scss';
import Button from '../Button/Button';

const Notes = ({onCloseModal, onHandleChange, checkAnswer}) => (
    <div className={styles.container}>
        <div className={styles.wrapper}>
        <input className={styles.close} onClick={onCloseModal} type='button'  value='X'/>
        <h3 className={styles.header}>NOTATKI</h3>
        
        <form className={styles.form_notes} onSubmit={checkAnswer}>
            <textarea className={styles.notes} onChange={onHandleChange} placeholder='zapisz swoje myśli' autoFocus/>
            <Button value={'ustaw odpowiedź'} type='submit'/>
        </form>
    </div>
    </div>
    

);

export default Notes;