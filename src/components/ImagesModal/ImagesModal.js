import React from 'react';
import {Link} from 'react-router-dom';

import styles from'./ImagesModal.module.scss';



const ImagesModal = (props) => {
    // const input = props.name.split("");

    return(

                <div className={styles.container}>
                    <Link to={'/gallery/'} className={styles.exitBtn} onClick={props.onCloseRebus}>X</Link>
                    <p className={styles.title}>{props.id}</p>
                <div className={styles.wrapper}>
                
                    <div className={styles.rightAnswer}>
                       <p>{props.isAnswerRight && `brawo`}</p>
                    </div>
                    <div className={styles.border}>
                        <div className={styles.rebus}>
                        
                            
                            <img src={props.src} alt={props.id}/>  
                        </div>
                        <form className={styles.form} onSubmit={props.onCheckAnswer}>
                    
                            <input 
                                className={styles.input} 
                                key={props.index}
                                placeholder={`Podpowiedź: słowo ma ${props.name.length} liter ;)`}
                                required
                                onChange={props.onHandleChange}
                                />
                      
                        <button type='button' onClick={props.onCheckAnswer}>sprawdź</button> 
                    </form> 
                    </div> 
                    
                </div>
            </div> 

        
    )
    
        

    
    
};
  
export default ImagesModal;