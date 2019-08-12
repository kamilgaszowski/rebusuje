import React from 'react';
import styles from'./ImagesModal.module.scss';

const ImagesModal = ({
    onCloseRebus,
    onCheckAnswer,
    onHandleChange,
    id,
    src,
    name,
}) => {
    const inputs = name.split("");
    

    return(
       
        <div className={styles.container}>
            <p className={styles.title}>{id}</p>
            <div className={styles.wrapper}>
                <div className={styles.border}>
                    <div className={styles.rebus}>
                        <img src={src} alt={id}/>  
                    </div>
                    
                    <form className={styles.form} onSubmit={onCheckAnswer}>
                        <div className={styles.inputs}>
                        {inputs.map((item, index) =>(
                          <input 
                          onChangeCapture={onHandleChange}
                          className={styles.input} 
                          key={index}
                          type='text'
                          name={item}
                          placeholder={index}
                          autoComplete='off'
                          maxLength='1'
                          />  
                        ))}
                        </div>
                        <input type='submit' value='Sprawdź' className={styles.button}/>
                    </form> 
                </div> 
            </div>
        </div> 
    )  
};
  
export default ImagesModal;