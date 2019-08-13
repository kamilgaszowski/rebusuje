import React from 'react';
import styles from'./ImagesModal.module.scss';

import Modal from '../Modal/Modal';


const ImagesModal = ({
    isAnswer,
    onSubmit,
    onHandleChange,
    id,
    src,
    name,
    value,
    messageHeader,
    messageValue,
    onCloseModal,

}) => {
    
    const nameArray = name.split('');
    const props = {
        messageHeader,
        messageValue,
        name,   
        onCloseModal,
}
    return (
        <div className={styles.container}>
          {isAnswer && <Modal  {...props}/>}
            <div className={styles.wrapper}>
                <div className={styles.border}>
                    <div className={styles.rebus}>
                        <p className={styles.title_hash}>{id}</p>
                        <p className={value === name ? styles.title : styles.title_hidden}>
                            {value === name ? name : nameArray.map(()=> '*')}
                        </p>
                        <img src={src} alt={id}/>  
                    </div>
                    <form className={styles.form} onSubmit={onSubmit}>
                        <label>Wpisz swoje rozwiązanie:</label>
                        <div className={styles.inputs}>
                          <input 
                          onChange={onHandleChange}
                          className={styles.input} 
                          type='text'
                          autoComplete='off'
                          required
                          autoFocus
                          />  
                        </div>
                    </form> 
                </div> 
            </div>
        </div> 
    )  
};
  
export default ImagesModal;