import React from 'react';
import styles from './Slider.module.scss';




const Slider = ({...props}) => {

    return (
                <div className={styles.border}>
                    {!props.prevRebus ? null : <button className={styles.prevRebus} onClick={props.handlePrevRebus}><img src='https://i.postimg.cc/3RsrTYVS/baseline-arrow-back-ios-black-48dp.png' alt='poprzedni' /></button>}
                    {!props.nextRebus ? null : <button className={styles.nextRebus} onClick={props.handleNextRebus}><img src='https://i.postimg.cc/pddLQ0KZ/baseline-arrow-forward-ios-black-48dp.png' alt='następny' /></button>}
                    <div className={styles.rebus}>
                        <p className={styles.title_hash}>#{props.id}</p>
                        {/* <p className={isRightAnswer ? styles.title : styles.title_hidden}>{value}</p> */}
                        <img src={props.src} alt={props.id} />
                    </div>
                </div>

    )
};

export default Slider;