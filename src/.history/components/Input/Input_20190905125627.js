import React from 'react';
import styles from './Input.module.scss';


const Input = () => (
    <form className={styles.form} onSubmit={checkAnswer}>
        <label>
            {!isWrongAnswer && !isRightAnswer ? 'Wpisz swoje rozwiązanie:' : (isRightAnswer ? 'Prawidłowa odpowiedź!' : 'Spróbuj jeszcze raz')}
        </label>
        <div className={styles.inputs} ref={inputs}>
            {hiddenName.map((item, index) => (

                <input
                    value={letter[index]}
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
)

export default Input;