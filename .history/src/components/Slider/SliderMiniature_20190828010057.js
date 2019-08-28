import React from 'react';
import styles from './SliderMiniature.module.scss';


const SliderMiniature = ({ items }) => (
    <div className={styles.wrapper}>
        {items.map(item => (
            <div className={styles.mini_rebus}>
                <img src={item.src} alt={item.id}
                    key={item.id} />
            </div>

        ))}
    </div>
);


export default SliderMiniature;