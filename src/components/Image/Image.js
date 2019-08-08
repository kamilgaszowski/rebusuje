import React from 'react';
import  styles  from './Image.module.scss';
import ImagesModal from '../ImagesModal/ImagesModal';
import AppContext from '../../contex';


class Image extends React.Component {
    state = {
        items: this.props,
        isModalOpen: false,
        currentIndex: 0,
    }

    openModal = () => {
        
        this.setState({
            isModalOpen: true,
        });
    }

    closeModal = () => {
        this.setState({ 
            isModalOpen: false,
        });
    }
   

    render (){
      const {isModalOpen, items} = this.state;
      const contextElement = {
          closeModal: this.closeModal,
      }
        return(
            
           <AppContext.Provider value={contextElement}>
               {isModalOpen && <ImagesModal {...items}/>}
                <div className={styles.wrapper}>
                    <h2 className={items.title}>{items.id}</h2>
                    <div className={styles.image}>
                        <div 
                            onClick={this.openModal}>
                                <img src={items.src}  alt={items.id}/>
                        </div >
                    </div>     
                </div>
           </AppContext.Provider>
        )
    }
} ;
export default Image;