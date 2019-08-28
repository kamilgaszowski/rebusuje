import React from 'react';
import Image from '../../components/Image/Image';
import styles from './SliderMiniature.module.scss';


const SliderMiniature = ({ items }) => (
    <>
        {items.map(item => (
            <div className={styles.wrapper}>
                <img src={item.src} alt={item.id}
                    key={item.id} />
            </div>

        ))}
    </>
);


export default SliderMiniature;