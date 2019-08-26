import React from 'react';
import styles from './ImagesModal.module.scss';

// import Modal from '../Modal/Modal';
import Slider from '../Slider/Slider';
import Notes from '../Notes/Notes';
import Button from '../Button/Button';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';



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
    messageHeader,
    messageValue,
    onCloseModal,
    onOpenNotes,
    handleNextRebus,
    handlePrevRebus,
    nextRebus,
    prevRebus,
    onMouseDown,

}) => {
    const props = {
        messageHeader,
        messageValue,
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
            <div className={styles.notes} onClick={onOpenNotes}><img src={'https://i.postimg.cc/c177bHVb/baseline-note-add-black-48dp.png'} alt='' /></div>

            <div className={styles.wrapper}>
                <div className={styles.border}>
                    <Slider {...props} />
                    <form className={styles.form} onSubmit={checkAnswer}>
                        <label>
                            {!isWrongAnswer && !isRightAnswer ? 'Wpisz swoje rozwiązanie:' : (isRightAnswer ? 'Prawidłowa odpowiedź' : 'Spróbuj jeszcze raz')}
                        </label>

                        <input
                            value={value}
                            // placeholder={repeat('*', name.length)}
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