import React from 'react';
import Image from '../../components/Image/Image';
import styles from './SliderMiniature.module.scss';


const SliderMiniature = (...props) => (
                    <div className={styles.wrapper}>
                        {props.items.map(item => (
                            <Image
                                {...item}
                                key={item.id} />
                        ))}
                    </div>
);


export default SliderMiniature;