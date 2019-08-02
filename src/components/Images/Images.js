import React from 'react';
import style from'./Images.module.scss';

const Images = ({src, id}) => (
    <>
     
    <div className={style.images}>
        <p className={style.imagesTitle}>{id}</p>
        <div className={style.imagesContainer}>
        <img src={src} alt={id} />
        </div>
       
    </div>
    </>
    
);

export default Images;