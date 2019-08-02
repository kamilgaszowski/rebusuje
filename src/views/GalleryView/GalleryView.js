import React from 'react';
import {rebuses} from '../../data/rebuses';
import Images from '../../components/Images/Images';

import styles from './GalleryView.module.scss';

const GalleryView = () => (
    <div className={styles.wrapper}>
        {rebuses.map(item => (
            <Images key={item.name} {...item} />
        ))}
    </div>
);

export default GalleryView