import React from 'react';
import  styles  from './Image.module.scss';




 const Image = ({id, src}) => (
    <div className={styles.wrapper}>
        <h2 className={styles.title}>{id}</h2>
            <div className={styles.image}>
                <img src={src}  alt={`rebus nr ${id}`}/>
            </div >     
    </div>
 );
        
export default Image;