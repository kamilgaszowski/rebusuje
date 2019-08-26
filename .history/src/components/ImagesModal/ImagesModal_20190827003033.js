import React from 'react';
import styles from './ImagesModal.module.scss';

// import Modal from '../Modal/Modal';
import Slider from '../Slider/Slider';
import Notes from '../Notes/Notes';
import Button from '../Button/Button';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import NoteAddSharpIcon from '@material-ui/icons/NoteAddSharp';



const ImagesModal = ({
    isRightAnswer,
    isWrongAnswer,
    isNotes,
    checkAnswer,
    onHandleChange,
    id,
    src,
    value,
    name,
    onCloseModal,
    onOpenNotes,
    handleNextRebus,
    handlePrevRebus,
    nextRebus,
    prevRebus,
    onMouseDown,

}) => {
    const props = {
        value,
        onCloseModal,
        onHandleChange,
        checkAnswer,
        onMouseDown,
        isNotes,
        id,
        src,
        name,
        handleNextRebus,
        handlePrevRebus,
        nextRebus,
        prevRebus,
    }
    const repeat = (string, times) => times > 0 ? string.repeat(times) : "";
    // const hiddenName = name.split('');
    return (
        <div className={styles.container}>
            <Notes {...props} />
            <div className={styles.notes} onClick={onOpenNotes}><NoteAddSharpIcon className={styles.add_note}/></div>

            <div className={styles.wrapper}>
                <div className={styles.border}>
                <p className={styles.title_hash}>#{id}</p>
                    <Slider {...props} />
                    <form className={styles.form} onSubmit={checkAnswer}>
                        <label>
                            {!isWrongAnswer && !isRightAnswer ? 'Wpisz swoje rozwiązanie:' : (isRightAnswer ? 'Prawidłowa odpowiedź' : 'Spróbuj jeszcze raz')}
                        </label>

                        <input
                            value={value}
                            placeholder={repeat('*', name.length)}
                            onChange={onHandleChange}
                            className={!isWrongAnswer && !isRightAnswer ? styles.input : (isRightAnswer ? styles.input_right : styles.input_wrong)}
                            type='text'
                            autoComplete='off'
                            required
                        />
                        <div className={styles.check}>
                            {!isWrongAnswer && !isRightAnswer ? (
                                <CheckCircleIcon className={styles.icon} />
                            ) : (
                                    isRightAnswer ? <CheckCircleIcon className={styles.right} />
                                        :
                                        <CancelIcon className={styles.wrong} />)}

                        </div>
                        <Button value={'sprawdź'} />

                    </form>
                </div>
            </div>

        </div>
    )
};

export default ImagesModal;