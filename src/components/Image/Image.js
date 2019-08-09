import React from 'react';
import  styles  from './Image.module.scss';




 const Image = ({title, id, src}) => (
     
   
         <div className={styles.wrapper}>
        <h2 className={title}>{id}</h2>
        <div className={styles.image}>
            <img src={src}  alt={id}/>
        </div >     
    </div>

   
 );
 
         
export default Image;