import React from 'react';
import styles from './SliderMiniature.module.scss';


const SliderMiniature = ({ items, miniSlider }) => (
    <>
        <div className={styles.wrapper}>
            {items.map(item => (
                <div  className={styles.mini_rebus} onClick={() => miniSlider(item)} >
                    <img src={item.src} alt={item.id}
                        key={item.id} />
                </div>
            ))}
        </div>
    </>
);


export default SliderMiniature;