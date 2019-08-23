import React from 'react';
import styles from './ImagesModal.module.scss';

import Modal from '../Modal/Modal';
import Notes from '../Notes/Notes';
import Button from '../Button/Button';


const ImagesModal = ({
    isAnswer,
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

    }
    const hiddenName = name.split('').map(()=> '*');
    return (
        <div className={styles.container}>
            <div className={styles.notes} onClick={onOpenNotes}><img src={'https://i.postimg.cc/c177bHVb/baseline-note-add-black-48dp.png'} alt='' /></div>
            {isAnswer && <Modal  {...props} />}
            {isNotes && <Notes {...props} />}

            <div className={styles.wrapper}>
                <div className={styles.border}>

                    <div className={styles.rebus}>
                        <p className={styles.title_hash}>#{id}</p>
                        {value === name ? <p className={styles.title}>{name}</p> : <p className={styles.title_hidden}>{hiddenName}</p> }
                        <img src={src} alt={id} />

                            {!prevRebus ? null : <button className={styles.prevRebus} onClick={handlePrevRebus}><img src='https://i.postimg.cc/3RsrTYVS/baseline-arrow-back-ios-black-48dp.png' alt='poprzedni' /></button>}
                            {!nextRebus ? null : <button className={styles.nextRebus} onClick={handleNextRebus}><img src='https://i.postimg.cc/pddLQ0KZ/baseline-arrow-forward-ios-black-48dp.png' alt='następny' /></button>}


                    </div>

                    <form className={styles.form} onSubmit={checkAnswer}>
                        <label>Wpisz swoje rozwiązanie:</label>
                        <div className={styles.inputs}>
                            <input
                                onChange={onHandleChange}
                                className={styles.input}
                                type='text'
                                autoComplete='off'
                                required
                            />

                        </div>
                        <Button value={'sprawdź'} />

                    </form>
                </div>
            </div>
        </div>
    )
};

export default ImagesModal;