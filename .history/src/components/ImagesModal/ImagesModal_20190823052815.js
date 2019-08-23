import React from 'react';
import styles from './ImagesModal.module.scss';

// import Modal from '../Modal/Modal';
import Notes from '../Notes/Notes';
import Button from '../Button/Button';


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

    }
    // const hiddenName = name.split('');
    return (
        <div className={styles.container}>
            <div className={styles.notes} onClick={onOpenNotes}><img src={'https://i.postimg.cc/c177bHVb/baseline-note-add-black-48dp.png'} alt='' /></div>
            {isNotes && <Notes {...props} />}

            <div className={styles.wrapper}>
                <div className={styles.border}>
                    {!prevRebus ? null : <button className={styles.prevRebus} onClick={handlePrevRebus}><img src='https://i.postimg.cc/3RsrTYVS/baseline-arrow-back-ios-black-48dp.png' alt='poprzedni' /></button>}
                    {!nextRebus ? null : <button className={styles.nextRebus} onClick={handleNextRebus}><img src='https://i.postimg.cc/pddLQ0KZ/baseline-arrow-forward-ios-black-48dp.png' alt='następny' /></button>}
                    <div className={styles.rebus}>
                        <p className={styles.title_hash}>#{id}</p>
                        {/* <p className={isRightAnswer ? styles.title : styles.title_hidden}>{value}</p> */}
                        <img src={src} alt={id} />
                    </div>

                    <form className={styles.form} onSubmit={checkAnswer}>
                        <label>Wpisz swoje rozwiązanie:</label>
                        <div className={styles.inputs}>
                            <div className={styles.sygnature}>
                            <img src='https://i.postimg.cc/WzRcNw2V/mis.png' alt='' />
                            </div>
                            <input
                                name={name}
                                onChange={onHandleChange}
                                className={name !== value ? styles.input : styles.input_right }
                                type='text'
                                autoComplete='off'
                                required
                            />
                            <div className={styles.check}>
                            {name === value ? (<p className={styles.right}>V</p>) : (<p className={styles.right}></p>)}
                            {name !== value ? (<p className={styles.wrong}>X</p>) : (<p className={styles.wrong}></p>)}

                            </div>
                        </div>
                        <Button value={'sprawdź'} />

                    </form>
                </div>
            </div>
        </div>
    )
};

export default ImagesModal;