import React from 'react';
import styles from './ImagesModal.module.scss';

// import Modal from '../Modal/Modal';
import Slider from '../Slider/Slider';
import Notes from '../Notes/Notes';
import Button from '../Button/Button';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import NoteAddSharpIcon from '@material-ui/icons/NoteAddSharp';


class ImagesModal extends React.Component {
    state = {
        inputValue: '',
    }

    inputValue = React.createRef();

    resetInputs = () => {
       const value = this.inputValue.current.value ;

       this.setState ({
           inputValue: value,
       }, ()=> console.log(value))
    }

    render() {
        const {
            isRightAnswer,
            isWrongAnswer,
            isNotes,
            notes,
            checkAnswer,
            onHandleChange,
            id,
            src,
            value,
            name,
            inputs,
            onOpenNotes,
            handleNextRebus,
            handlePrevRebus,
            nextRebus,
            prevRebus,
            onMouseDown,
            closeRebus,
        } = this.props

        const props = {
            value,
            notes,
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
        // const repeat = (string, times) => times > 0 ? string.repeat(times) : "";
        const hiddenName = name.split('');




        return (
            <div className={styles.container}>
                <Notes {...props} />

                <div className={styles.notes} onClick={onOpenNotes}><NoteAddSharpIcon className={styles.add_note} /></div>

                <div className={styles.wrapper}>
                    <div className={styles.border}>
                        <p className={styles.title_hash}>#{id}</p>
                        <CancelIcon className={styles.close} onClick={closeRebus}>X</CancelIcon>
                        <Slider {...props} />
                        <form className={styles.form} onSubmit={checkAnswer}>
                            <label>
                                {!isWrongAnswer && !isRightAnswer ? 'Wpisz swoje rozwiązanie:' : (isRightAnswer ? 'Prawidłowa odpowiedź!' : 'Spróbuj jeszcze raz')}
                            </label>
                            <div className={styles.inputs} ref={inputs}>
                                {hiddenName.map((item, index) => (

                                    <input
                                        ref={this.inputValue}
                                        placeholder={index + 1}
                                        onChange={onHandleChange}
                                        className={styles.input}
                                        type='text'
                                        autoComplete='off'
                                        maxLength='1'
                                        value={this.resetInputs}
                                    />
                                ))}
                            </div>

                            <div className={styles.check}>
                                {!isWrongAnswer && !isRightAnswer ? (
                                    <CheckCircleIcon className={styles.icon} />
                                ) : (
                                        isRightAnswer ? <CheckCircleIcon className={styles.right} />
                                            :
                                            <CancelIcon className={styles.wrong} />)}

                            </div>
                            <Button value={'sprawdź'} type={'submit'} />

                        </form>
                    </div>
                </div>

            </div>
        )

    }
}


export default ImagesModal;