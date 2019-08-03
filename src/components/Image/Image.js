import React from 'react';
import  styles  from './Image.module.scss';

const Image = ({src, id}) => (
    <>
    <h2 className={styles.title}>{id}</h2>
    <div className={styles.container}>
    <img src={src}  alt={id}/>
    </div>
    
    </>
);
export default Image;