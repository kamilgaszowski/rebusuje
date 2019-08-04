/* eslint-disable no-unused-expressions */


import React from 'react';
import styles from'./ImagesModal.module.scss';
//import Modal from '../Modal/Modal';
//import Button from '../Button/Button';





    



const ImagesModal = ({...items}) => {
    let image = items;
    let imageSrc = image.location.hash.split('#h').join('h');
    let imageId = image.match.params.id;
    let imageName = image.location.search.split('?').join('');
    var answer = [];
    
    const checkAnswer = (e, to) => {
        e.preventDefault();
        imageName === e.target.value ? alert('Brawo!'): null;
    };

    return (
      <div className={styles.wrapper}>
		    <div className={styles.border}>
            <div className={styles.title}>
                {answer.length ? (
                    imageName,
                    imageId
                ) : (
                    imageId
                ) }
                
            </div>
			    <div className={styles.rebus}>
                <img src={imageSrc} alt=''/>
			    </div>
		    </div>	
            <form className={styles.form} >
            <input className={styles.reply} placeholder ='Wpisz wynik' required onChange={checkAnswer}/>
           
            </form> 
            
        </div>

       
    );
    
    
};

export default ImagesModal;