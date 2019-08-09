import React from 'react';
import {Link} from 'react-router-dom';

import styles from'./ImagesModal.module.scss';



const ImagesModal = (props) => {
    const input = props.name.split("");
    return(

                <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.rightAnswer}>
                       
                    </div>
                    <div className={styles.border}>
                        <div className={styles.rebus}>
                        <a href={'/gallery'} className={styles.exitBtn} onClick={props.onCloseRebus}>X</a>
                            <p className={styles.title}>{props.id}</p>
                            <img src={props.src} alt={props.id}/>  
                        </div>
                    </div> 
                    <form className={styles.form}>
                        {input.map((item, index) => (
                            <input 
                                className={styles.input} 
                                key={index}
                                maxLength='1'
                                placeholder={index + 1}
                                required/>
                        ))}
                        <button type='button'>sprawdź</button> 
                    </form> 
                </div>
            </div> 

        
    )
    
        

    
    
};
  
export default ImagesModal;