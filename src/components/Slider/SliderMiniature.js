import React from 'react';
import styles from './SliderMiniature.module.scss';

import ArrowForwardIosSharpIcon from '@material-ui/icons/ArrowForwardIosSharp';
import ArrowBackIosSharpIcon from '@material-ui/icons/ArrowBackIosSharp';


const SliderMiniature = ({ items, miniSlider, miniatures, nextThumbnails, prevThumbnails, thumbnail }) => (
    <>
        <div className={styles.wrapper}>
            <div className={styles.container} ref={miniatures}>
                {items.map((item, index) => (
                    <div className={styles.mini_rebus} onClick={() => miniSlider(item)} id={index}>
                        <img src={item.src} alt={item.id}
                            key={item.id} />
                    </div>
                ))}

            </div>
            {thumbnail === 0 ? null : <button className={styles.prev_arrow} type='button' onClick={() => prevThumbnails()}><a href={`#${thumbnail}`} ><ArrowBackIosSharpIcon /></a></button>}
            {thumbnail === items.length ? null : <button className={styles.next_arrow} type='button' onClick={() => nextThumbnails()}><a href={`#${thumbnail}`}><ArrowForwardIosSharpIcon /></a></button>}


        </div>
    </>
);


export default SliderMiniature;