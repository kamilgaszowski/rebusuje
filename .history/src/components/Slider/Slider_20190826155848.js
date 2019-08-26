import React from 'react';
import styles from './ImagesModal.module.scss';

// import Modal from '../Modal/Modal';
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

    }
    const repeat = (string, times) => times > 0 ? string.repeat(times) : "";
    // const hiddenName = name.split('');
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.border}>
                    {!prevRebus ? null : <button className={styles.prevRebus} onClick={handlePrevRebus}><img src='https://i.postimg.cc/3RsrTYVS/baseline-arrow-back-ios-black-48dp.png' alt='poprzedni' /></button>}
                    {!nextRebus ? null : <button className={styles.nextRebus} onClick={handleNextRebus}><img src='https://i.postimg.cc/pddLQ0KZ/baseline-arrow-forward-ios-black-48dp.png' alt='następny' /></button>}
                    <div className={styles.rebus}>
                        <p className={styles.title_hash}>#{id}</p>
                        {/* <p className={isRightAnswer ? styles.title : styles.title_hidden}>{value}</p> */}
                        <img src={src} alt={id} />
                    </div>
                </div>
            </div>

        </div>
    )
};

export default ImagesModal;