import React from 'react';
import styles from './SliderMiniature.module.scss';


const SliderMiniature = ({ items, mini, myRef }) => (
    <>
    <div className={styles.wrapper}>
        {items.map(item => (
            <div ref={myRef} className={styles.mini_rebus} onClick={()=>mini(item)} >
                <img src={item.src} alt={item.id}
                    key={item.id} />
            </div>

        ))}

    </div>
    </>
);


export default SliderMiniature;