import React from 'react';
import styles from './Image.module.scss';
// import {Link} from 'react-router-dom';


const Image = ({ id, src, onOpenRebus }) => (
    <div className={styles.wrapper}>
        <div className={styles.image} onClick={onOpenRebus}>
            <img src={src} alt={`rebus nr ${id}`} />
        </div >
    </div>
);

export default Image;