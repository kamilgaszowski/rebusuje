import React from 'react';
import styles from './Notes.module.scss';
import Draggable from 'react-draggable';


const Notes = ({ onCloseModal, onHandleChange, onMouseDown, children }) => (

    <div className={isNotes ? styles.show : styles.hidden}>
        <Draggable>
            <div className={styles.wrapper}>
                <input className={styles.close} onClick={onCloseModal} type='button' value='X' />
                <h3 className={styles.header}>NOTATKI</h3>
                <form className={styles.form_notes} onMouseDown={onMouseDown} >
                    <textarea className={styles.notes} onChange={onHandleChange}  />

                </form>
            </div>
        </Draggable>

    </div>


);

export default Notes;