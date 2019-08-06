/* eslint-disable no-unused-expressions */
/* eslint-disable no-lone-blocks */
import React from 'react';
import AppContext from '../../contex';
import styles from'./ImagesModal.module.scss';
import Modal from '../Modal/Modal';







class ImagesModal extends React.Component {
    state = {
        items: this.props,
        isModalOpen: false,
    }

    openModal = () => {
        this.setState({
            isModalOpen: true,
        });
    };

    closeModal = () => {
        this.setState({
            isModalOpen: false,
        });
    };

    checkAnswer = (e)=> {
        e.preventDefault();
        e.target.value === this.state.items.name ?  this.openModal() : this.closeModal();  
    }

    render(){
        
        const {items, isModalOpen} = this.state;
        return (
                <AppContext.Consumer>
                    {context=>(
                         <div className={styles.wrapper}>
                        <button onClick={() => context.closeModal()}>Zamknij</button>
                         <p>{items.id}</p>
                         <div className={styles.border}>
                             <div className={styles.rebus}>
                                 <img src={items.src} alt={items.id}/>
                             </div>
                         </div> 
                         <form className={styles.form} onSubmit={this.checkAnswer} >
                                 <input className={styles.reply} placeholder ='Wpisz wynik' onChange={this.checkAnswer} required/>
                                 
                             </form> 
                             {isModalOpen && <Modal />}
                     </div>
                    )}
                
                </AppContext.Consumer>
             );   
    }

    
};

export default ImagesModal;