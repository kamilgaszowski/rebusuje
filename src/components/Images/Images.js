import React from 'react';
import styles from'./Images.module.scss';





const ImagesModal = ({...items}) => {
    let image = items;
    let imageSrc = image.location.hash.split('#h').join('h');
    let imageId = image.match.params.id;
    //let imageName = image.location.search.split('?').join('');
    
    console.log(image);
    return (
        

      <div className={styles.wrapper}>
		    <div className={styles.border}>
            <p>{imageId}</p>
			    <div className={styles.rebus}>
                <img src={imageSrc} alt=''/>
			    </div>
		    </div>	
            <form className={styles.form}>
            <input className={styles.reply} placeholder ='Wpisz wynik' required/>
            <button type='submit' className={styles.button}>sprawdź wynik</button>
            </form> 
        </div>
       
    );
  
    
};

export default ImagesModal;