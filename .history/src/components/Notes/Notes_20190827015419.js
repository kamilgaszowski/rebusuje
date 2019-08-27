import React from 'react';
import styles from './Notes.module.scss';
// import Draggable from 'react-draggable';
// import Button from '../Button/Button';


const Notes = ({ onCloseNotes, onHandleChange, notes, onMouseDown, isNotes}) => (

    <div className={isNotes ? styles.show : styles.hidden}>
        {/* <Draggable> */}
            <div className={styles.wrapper}>
                <h3 className={styles.header}>NOTATKI</h3>
                <form className={styles.form_notes} onMouseDown={onMouseDown} >
                    <textarea className={styles.notes} value={notes}/>
                </form>
            </div>
        {/* </Draggable> */}

    </div>


);

export default Notes;