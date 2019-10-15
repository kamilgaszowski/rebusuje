import React from 'react';
import AppContex from '../../contex';
import Image from '../../components/Image/Image';
import styles from './GalleryView.module.scss';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const GalleryView = () => {
    return (
        <AppContex.Consumer>
            {context => (
                <>
                    <div className={styles.wrapper}>
                        {context.items.map(item => (
                            <Link to={`/gallery/${item.id}`} key={item.id}>
                             <Image
                                {...item}
                                {...context}
                                onOpenRebus={() => context.openRebus(item)}
                                />
                            </Link>

                        ))}
                    </div>
                </>
            )}
        </AppContex.Consumer>
    );
};


export default GalleryView;