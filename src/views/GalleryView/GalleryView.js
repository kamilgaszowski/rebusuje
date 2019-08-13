import React from 'react';
import AppContex from '../../contex';
import Image from '../../components/Image/Image';
import { rebuses } from '../../data/rebuses';
import styles from './GalleryView.module.scss';


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
                                <div
                                    onClick={()=>context.openRebus(item)}
                                    key={item.id} >
                                        <Image className={styles.images}  {...item} />
                                </div>
                            ))}
                        </div>
                    </>  
                )}
            </AppContex.Consumer>   
        );
    }                         
};

export default GalleryView;