import React from 'react';
import styles from './Notes.module.scss';
import Button from '../Button/Button';
import Draggable from 'react-draggable';


const Notes = ({onCloseModal, onHandleChange, checkAnswer, onMouseDown}) => (
    
    <div className={styles.container}>
         <Draggable>
         <div className={styles.wrapper}>
        <input className={styles.close} onClick={onCloseModal} type='button'  value='X'/>
        <h3 className={styles.header}>NOTATKI</h3>
        
            <form className={styles.form_notes} onMouseDown={onMouseDown} onSubmit={checkAnswer}>
            <textarea className={styles.notes} onChange={onHandleChange} placeholder='zapisz swoje myśli' autoFocus/>
            <Button value={'ustaw odpowiedź'} type='submit'/>
        </form>
    </div>
         </Draggable>
        
    </div>
    

);

export default Notes;