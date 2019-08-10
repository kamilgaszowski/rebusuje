import React from 'react';
import AppContex from '../../contex';

import Image from '../../components/Image/Image';
import { rebuses } from '../../data/rebuses';
import styles from './GalleryView.module.scss';

import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';




class GalleryView extends React.Component {
    state = {
        items: [...rebuses],  
      };

    render (){
        const {items} = this.state;
        return (
            <AppContex.Consumer>
                {context=>(
                    <>
                        <Logo />
                        <div className={styles.wrapper}>
                            {items.map(item => (
                                <Link 
                                    to={`/gallery/${item.id}`}
                                    key={item.id}
                                    onClick={()=>context.openRebus(item)}>
                                        <Image className={styles.images}  {...item} />
                                </Link>
                            ))}
                        </div>
                    </>  
                )}
            </AppContex.Consumer>   
        );
    }                         
};

export default GalleryView;