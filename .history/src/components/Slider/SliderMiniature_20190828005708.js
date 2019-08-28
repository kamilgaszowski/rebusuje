import React from 'react';
import Image from '../../components/Image/Image';
import styles from './SliderMiniature.module.scss';


const SliderMiniature = ({ items }) => (
    <div className={styles.wrapper}>
        {items.map(item => (
            <div className={styles.mini_slider}>
                <img src={item.src} alt={item.id}
                    key={item.id} />
            </div>

        ))}
    </div>
);


export default SliderMiniature;