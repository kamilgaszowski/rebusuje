import React from 'react';

import Image from '../../components/Image/Image';

import styles from './GalleryView.module.scss';
import AppContext from '../../contex';





class GalleryView extends React.Component {
 
    render (){

        return (
            <AppContext.Consumer>
                {context =>(
                     <div className={styles.wrapper}>
                     {context.map(item => (
                         
                         <AppContext.Provider value={item} key={item.id}>
                         <Image 
                            className={styles.images}
                            {...item}
                            
                            /> 
                         </AppContext.Provider>
                        
                     ))} 
                 </div>
                )}
            </AppContext.Consumer>
            
         )
    }
};

export default GalleryView