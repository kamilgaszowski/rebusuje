import React from 'react';
import {Link} from 'react-router-dom';

import styles from'./ImagesModal.module.scss';

const ImagesModal = ({
    onCloseRebus,
    onCheckAnswer,
    onHandleChange,
    id,
    src,
    name,
    index,
}) => {
    return(
        <div className={styles.container}>
            <Link to={'/gallery/'} className={styles.exitBtn} onClick={onCloseRebus}>X</Link>
            <p className={styles.title}>{id}</p>
            <div className={styles.wrapper}>
                <div className={styles.border}>
                    <div className={styles.rebus}>
                        <img src={src} alt={id}/>  
                    </div>
                    <form className={styles.form} onSubmit={onCheckAnswer}>
                        <input 
                            onChange={onHandleChange}
                            className={styles.input} 
                            key={index}
                            type='text'
                            placeholder={`${name.length} liter`}
                            required
                            autoFocus
                            autoComplete='off'
                            autoCorrect='off'
                            />
                        <input type='submit' value='Sprawdź' className={styles.button}/>
                    </form> 
                </div> 
            </div>
        </div> 
    )  
};
  
export default ImagesModal;