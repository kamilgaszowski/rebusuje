/* eslint-disable no-unused-expressions */
/* eslint-disable no-lone-blocks */
import React from 'react';
import AppContext from '../../contex';
import styles from'./ImagesModal.module.scss';


class ImagesModal extends React.Component {
    state = {
        items: this.props,
        isModalOpen: false,
        isAnswerOpen: false,
        value: '',
        input: this.props.name.split(""),
    }


    openModal = () => {
        this.setState(prevState => ({
            isModalOpen: !prevState.isModalOpen,
        }));
    };


    handleChange = (e)=> {
        this.setState({
            value: this.state.value + e.target.value,

        }); 
        this.state.value === this.state.items.name ? this.setState({isAnswerOpen: true}) : null; 
        
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.state.value === this.state.items.name ? this.setState({isAnswerOpen: true}) : null; 
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
        
        const {items, isAnswerOpen,  input} = this.state;
       
        return (
            <>
                <AppContext.Consumer>
                    {context=>(
                        <div className={styles.container}>
                            <div className={styles.wrapper}>
                            
                           
                            <div className={styles.rightAnswer}>
                                <h2>{isAnswerOpen && 'Brawo! '}</h2>
                                <p>{isAnswerOpen && `Właściwa odpowiedź to: ${items.name}`}</p>
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
                                </div>
                            </div> 
                            
                            <form 
                                className={styles.form} 
                                onSubmit={this.handleSubmit}
                                >
                                     {input.map((item, index) => (
                                         <input 
                                            className={styles.input} 
                                            key={index}
                                            maxLength='1'
                                            placeholder={index + 1}
                                            required
                                            onChange={this.handleChange}
                                        />
                                     ))}
                                      <button onClick={this.handleSubmit} type='button'>sprawdź</button> 
                                
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