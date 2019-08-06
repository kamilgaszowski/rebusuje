/* eslint-disable no-unused-expressions */
/* eslint-disable no-lone-blocks */
import React from 'react';
import AppContext from '../../contex';
import styles from'./ImagesModal.module.scss';

class ImagesModal extends React.Component {
    state = {
        items: this.props,
        isModalOpen: false,
        value: ' ',
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

    handleChange = (e)=> {
        e.preventDefault();
        this.setState({
            value: e.target.value
        }) 
    }

    handleSubmit = (e)=> {
        e.preventDefault();
        this.state.value === this.state.items.name ?  this.openModal() : this.closeModal();  
    }

    handleChange = this.handleChange.bind(this);
    handleSubmit = this.handleSubmit.bind(this);


    render(){
        
        const {items, isModalOpen} = this.state;
        return (
                <AppContext.Consumer>
                    {context=>(
                         <div className={styles.wrapper}>
                            <button onClick={() => context.closeModal()}>Zamknij</button>
                            <p>{isModalOpen  && 'Brawo! Prawidłowa odpowiedź to: '}</p>
                            <p className={styles.rightAnswer}>{isModalOpen  && items.name}</p>
                            <p>{items.id}</p>
                            <div className={styles.border}>
                                <div className={styles.rebus}>
                                    <img src={items.src} alt={items.id}/>
                                </div>
                            </div> 
                            <form className={styles.form} onSubmit={this.handleSubmit} >
                                 <input className={styles.reply} placeholder ='Wpisz wynik'  onChange={this.handleChange.bind(this)} onFocus={true} required/>   
                                 <input type="submit" value="Sprawdź" />
                            </form> 
                           
                        </div>
                    )}
                
                </AppContext.Consumer>
             );   
    }

    
};

export default ImagesModal;