import React from 'react';
import styles from './SliderMiniature.module.scss';


const SliderMiniature = ({ items, mini }) => (
    <div className={styles.wrapper}>
        {items.map(item => (
            <div className={styles.mini_rebus} onClick={mini} >
                <img src={item.src} alt={item.id}
                    key={item.id} />
            </div>

        ))}
    </div>
);


export default SliderMiniature;