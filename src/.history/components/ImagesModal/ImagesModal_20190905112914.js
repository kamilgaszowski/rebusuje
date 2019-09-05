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
        inputValue: [],
    }


    resetInputs = () => {
        const value = [];
        const name = this.props.name.split('');

        name.forEach(item => {
            value.push(item.value)
        }, ()=> console.log(value))

        this.setState({
            inputValue: value,
        })
    }

    render() {
        const {
            isRightAnswer,
            isWrongAnswer,
            checkAnswer,
            onHandleChange,
            id,
            name,
            inputs,
            value,
            onOpenNotes,
            closeRebus,
        } = this.props


        // const repeat = (string, times) => times > 0 ? string.repeat(times) : "";
        const hiddenName = name.split('');


        return (
            <div className={styles.container}>
                <Notes {...this.props} />

                <div className={styles.notes} onClick={onOpenNotes}><NoteAddSharpIcon className={styles.add_note} /></div>

                <div className={styles.wrapper}>
                    <div className={styles.border}>
                        <p className={styles.title_hash}>#{id}</p>
                        <CancelIcon className={styles.close} onClick={closeRebus}>X</CancelIcon>
                        <Slider {...this.props} />
                        <form className={styles.form} onSubmit={checkAnswer}>
                            <label>
                                {!isWrongAnswer && !isRightAnswer ? 'Wpisz swoje rozwiązanie:' : (isRightAnswer ? 'Prawidłowa odpowiedź!' : 'Spróbuj jeszcze raz')}
                            </label>
                            <div className={styles.inputs} ref={inputs}>
                                {hiddenName.map((item, index) => (

                                    <input
                                        value={value[index]}
                                        placeholder={index + 1}
                                        onChange={onHandleChange}
                                        className={styles.input}
                                        type='text'
                                        autoComplete='off'
                                        maxLength='1'
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