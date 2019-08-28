import React from 'react';
import Image from '../../components/Image/Image';
import styles from './GalleryView.module.scss';


const SliderMiniature = (props) => (
                <>
                    <div className={styles.wrapper}>
                        {props.items.map(item => (
                            <Image
                                {...item}
                                {...context}
                                onOpenRebus={() => context.openRebus(item)}
                                key={item.id} />
                        ))}
                    </div>
                </>
);


export default SliderMiniature;