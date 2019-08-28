import React from 'react';
import Image from '../../components/Image/Image';
import styles from './SliderMiniature.module.scss';


const SliderMiniature = ({items}) => (
                    <div className={styles.wrapper}>
                        {items.map(item => (
                            <Image
                                {...item}
                                key={item.id} />
                        ))}
                    </div>
);


export default SliderMiniature;