import React from 'react';


import Image from '../../components/Image/Image';
import { rebuses } from '../../data/rebuses';
import styles from './GalleryView.module.scss';
import ImagesModal from '../../components/ImagesModal/ImagesModal';
import { Link } from 'react-router-dom';



class GalleryView extends React.Component {
    state = {
        items: [...rebuses],
        rebus: {},
        isOpenRebus: false,
      };

    openRebus = (e) => {
        Object.assign(this.state.rebus, e);
        this.setState({
            isOpenRebus: true,
        })

    }
 
    render (){
        const {items, rebus, isOpenRebus} = this.state;
        return (
                  <>
                     {isOpenRebus && <ImagesModal {...rebus}/>}  
                     <div className={styles.wrapper}>
                     {items.map(item => (
                         <>

                         <Link 
                            key={item.id}
                            onClick={()=>this.openRebus(item)}>
                              <Image className={styles.images}  {...item} alt='' />
                         </Link>
                          
                            
                         </>
                     ))} 
                    
                 </div>
                 </>
                )}   
};

export default GalleryView