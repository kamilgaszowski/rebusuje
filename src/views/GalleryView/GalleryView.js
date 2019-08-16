import React from 'react';
import AppContex from '../../contex';
import Image from '../../components/Image/Image';
import styles from './GalleryView.module.scss';
import Logo from '../../components/Logo/Logo';


const GalleryView = () => {
    return (
        <AppContex.Consumer>
            {context=>(
                <>
                    <Logo />
                    <div className={styles.wrapper}>
                        {context.items.map(item => (
                            <Image
                                className={styles.images}
                                {...item}
                                {...context}
                                onOpenRebus={()=>context.openRebus(item)}
                                key={item.id} />
                        ))}
                    </div>
                </>  
            )}
        </AppContex.Consumer>   
    );
};


export default GalleryView;