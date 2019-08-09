/* eslint-disable no-unused-expressions */
/* eslint-disable no-lone-blocks */
import React from 'react';
import styles from'./ImagesModal.module.scss';


const ImagesModal = ({id, name, src}) => (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.rightAnswer}>
                <p>Właściwa odpowiedź to: {name}</p>
            </div>
            <div className={styles.border}>
                <div className={styles.rebus}>
                    <button className={styles.exitBtn}>X</button>
                    <p className={styles.title}>{id}</p>
                    <img src={src} alt={id}/>  
                </div>
            </div> 
            <form className={styles.form}>
                <button type='button'>sprawdź</button> 
            </form> 
        </div>
    </div>  

);
  
export default ImagesModal;