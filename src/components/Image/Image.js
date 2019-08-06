import React from 'react';


import  styles  from './Image.module.scss';
import AppContext from '../../contex';
import ImagesModal from '../ImagesModal/ImagesModal';


class Image extends React.Component {
    state = {
        isModalOpen: false,
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
      const {isModalOpen} = this.state;
        return(
            
           <>
                 <AppContext.Consumer>
                    {context => (  
                        <>
                         {isModalOpen && <ImagesModal closeModalFn={this.closeModal}{...context}/>}
                    <div className={styles.wrapper}>
                    <h2 className={context.title}>{context.id}</h2>
                    <div className={styles.image}>
                        <div onClick={this.openModal}>
                            <img src={context.src}  alt={context.id}/>
                        </div >
                        
                       
                    </div>     
                </div>
               
             </>
            )}  
             
        </AppContext.Consumer>
          
         
           </>
           
        
        
        )
    }
} ;
export default Image;