import React from 'react';
import {rebuses} from '../../data/rebuses';
import {Link} from 'react-router-dom';
import Image from '../../components/Image/Image';

import styles from './GalleryView.module.scss';


class GalleryView extends React.Component {
    state = {
        items: [...rebuses],
    }
    
   
    render (){
        return (
            <>
            <div className={styles.wrapper}>
                {rebuses.map(item => (
                    <Link className={styles.images}
                        key={item.src}
                        {...item} 
                        to={
                            {pathname:`/gallery/${item.id}`,
                            hash: item.src,
                            search: item.name}}>
                        <Image {...item}/>
                    </Link>
                    
                ))}
                
            </div>
            
            </>
         )
    }
};

export default GalleryView