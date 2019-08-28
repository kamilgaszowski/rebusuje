import React from 'react';
import AppContex from '../../contex';
import Image from '../../components/Image/Image';
import styles from './GalleryView.module.scss';


const GalleryView = () => {
    return (
        <AppContex.Consumer>
            {context => (
                <>
                    <div className={styles.wrapper}>
                        {context.items.map(item => (
                            <Image
                                {...item}
                                {...context}
                                onOpenRebus={() => context.openRebus(item)}
                                key={item.id} />
                        ))}
                    </div>
                </>
            )}
        </AppContex.Consumer>
    );
};


export default GalleryView;