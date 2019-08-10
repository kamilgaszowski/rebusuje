import React from 'react';
import {Link} from 'react-router-dom';

import styles from'./ImagesModal.module.scss';



const ImagesModal = (props) => {
    const input = props.name.split("");
    return(

                <div className={styles.container}>
                    <Link to={'/gallery/'} className={styles.exitBtn} onClick={props.onCloseRebus}>X</Link>
                    <p className={styles.title}>{props.id}</p>
                <div className={styles.wrapper}>
                
                    <div className={styles.rightAnswer}>
                       
                    </div>
                    <div className={styles.border}>
                        <div className={styles.rebus}>
                        
                            
                            <img src={props.src} alt={props.id}/>  
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
            </div> 

        
    )
    
        

    
    
};
  
export default ImagesModal;