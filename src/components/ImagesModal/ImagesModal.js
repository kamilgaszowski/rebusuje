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

    inputRef = React.createRef()

    openModal = () => {
        this.setState(prevState => ({
            isModalOpen: !prevState.isModalOpen,
        }));
    };

    closeModal = () => {
        this.setState({
            isModalOpen: false,
        });
    };

    handleChange = (e)=> {
        this.setState({
            isModalOpen: false,
        });
        this.setState({
            value: e.target.value
        });
       
    }

    handleSubmit = (e)=> {
        e.preventDefault();
       
       
    }

    
putInputs = () => {
        let letterAmount = [];
        for(let i = 0; i < this.state.items.name.length; i++){
            letterAmount.push(i);            
        }

        this.setState({
            prompt: letterAmount
        }); 
    }


    render(){
        
        const {items, isModalOpen, value} = this.state;
        let input = [];
        input = items.name.split("");
       
        return (
            <>
          
                <AppContext.Consumer>
                    {context=>(
                        <div className={styles.container}>
                            <div className={styles.wrapper}>
                            
                           
                            <div className={styles.rightAnswer}>
                                <p>{value === items.name ?'Brawo!  ' : null}</p>
                                <p>Prawidłowa odpowiedź to:</p>
                                <p>{value === items.name ? value  : null}</p>
                            </div>
                          
                            <div className={styles.border}>
                           
                                <div className={styles.rebus}>
                                <button 
                                onClick={() => context.closeModal()}
                                className={styles.exitBtn}
                                >
                                    X
                            </button>
                                <p className={styles.title}>{items.id}</p>
                                    <img src={items.src} alt={items.id}/>
                                    <div className={styles.prompt}>{isModalOpen && `Rozwiązanie ma ${input.length} liter`}</div>
                                    <button type='button' onClick={this.openModal}>?</button>
                                </div>
                            </div> 
                            
                            <form className={styles.form}>
                                <input 
                                    className={styles.input}
                                     onChange={this.handleChange}
                                     maxLength={items.name.length}
                                     placeholder='Wpisz swoje rozwiązanie:'
                                     required />  
                                
                            </form> 
                           
                        </div>
                        </div>
                         
                    )}
                
                </AppContext.Consumer>
                </>
             );   
    }

    
};

export default ImagesModal;