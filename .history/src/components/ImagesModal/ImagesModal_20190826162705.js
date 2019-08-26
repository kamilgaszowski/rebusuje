import React from 'react';
import styles from './ImagesModal.module.scss';

// import Modal from '../Modal/Modal';
import Slider from '../Slider/Slider';
import Notes from '../Notes/Notes';
import Button from '../Button/Button';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';



const ImagesModal = (...props) => {

    const repeat = (string, times) => times > 0 ? string.repeat(times) : "";
    // const hiddenName = name.split('');
    return (
        <div className={styles.container}>
            <Notes {...props} />
            <div className={styles.notes} onClick={props.onOpenNotes}><img src={'https://i.postimg.cc/c177bHVb/baseline-note-add-black-48dp.png'} alt='' /></div>

            <div className={styles.wrapper}>
                <div className={styles.border}>
                    <Slider {...props}/>
                    <form className={styles.form} onSubmit={props.checkAnswer}>
                        <label>
                            {!props.isWrongAnswer && !props.isRightAnswer ? 'Wpisz swoje rozwiązanie:' : (props.isRightAnswer ? 'Prawidłowa odpowiedź' : 'Spróbuj jeszcze raz')}
                        </label>

                        <input
                            value={props.value}
                            placeholder={repeat('*', name.length)}
                            onChange={props.onHandleChange}
                            className={!props.isWrongAnswer && !props.isRightAnswer ? styles.input : (props.isRightAnswer ? styles.input_right : styles.input_wrong)}
                            type='text'
                            autoComplete='off'
                            required
                        />
                        <div className={styles.check}>
                            {!props.isWrongAnswer && !props.isRightAnswer ? (
                                <CheckCircleIcon className={styles.icon} />
                            ) : (
                                    props.isRightAnswer ? <CheckCircleIcon className={styles.right} />
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