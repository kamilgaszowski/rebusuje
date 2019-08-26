import React from 'react';
import styles from './ImagesModal.module.scss';

// import Modal from '../Modal/Modal';



const ImagesModal = ({
    id,
    src,
    handleNextRebus,
    handlePrevRebus,
    nextRebus,
    prevRebus,
}) => {

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