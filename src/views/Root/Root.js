/* eslint-disable no-unused-expressions */
/* eslint-disable no-lone-blocks */
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import AppContex from '../../contex';
import './Root.scss';



import Hero from '../../components/Hero/Hero';
import Menu from '../../components/Menu/Menu';


import GalleryView from '../GalleryView/GalleryView';
import ContactView from '../ContactView/ContactView'
import ImagesModal from '../../components/ImagesModal/ImagesModal';
import Modal from '../../components/Modal/Modal';






class Root extends React.Component {
  state = {
    rebus: {},
    isOpenRebus: false,
    isAnswerRight: false,
    value: '',
  };

openRebus = (e) => {
    Object.assign(this.state.rebus, e);
    this.setState({
      isOpenRebus: true,
    })
    
}

closeRebus = () => {
  this.setState({
    isOpenRebus: false,
    isAnswerRight: false,
  })
}

openModal = () => {
 
  this.setState({
      isAnswerRight: true,
  });
  console.log('jest')
};

closeModal = () => {
  this.setState({
      isAnswerRight: false,
  });
};

handleChange = (e)=> {
  this.setState({
      value:  e.target.value,
  }); 
  console.log(this.state.value);
}

checkAnswer = (e)=> {
  e.preventDefault();
  this.state.value === this.state.rebus.name ?  this.openModal() : this.closeModal();  
}

 
  render(){
  const {rebus, isOpenRebus, isAnswerRight} = this.state;
  const context = {
    openRebus: this.openRebus,
  
    }
  
    return (
      <AppContex.Provider value={context}>
      <BrowserRouter>
        <Menu />
        {isAnswerRight && <Modal {...rebus} onCloseModal={this.closeModal}/>}
            <AnimatedSwitch
            atEnter={{ opacity: 0, scale: 1.2}}
            atLeave={{ opacity: 0, scale: 0.8 }}
            atActive={{ opacity: 1, scale: 1 }}> 

              <Route
                exact path='/gallery/:id' 
                component={ImagesModal} 
                {...rebus} 
                {...this.state}
                onCloseRebus={this.closeRebus}
                onHandleChange={this.handleChange}
                onCheckAnswer={this.checkAnswer}
                />

              {
                isOpenRebus
                &&
                <ImagesModal 
                  {...rebus} 
                  {...this.state}
                  onCloseRebus={this.closeRebus}
                  onHandleChange={this.handleChange}
                  onCheckAnswer={this.checkAnswer}
                  />
              }

              
              <Route exact path='/' component={Hero}/>
              <Route path='/gallery/' component={GalleryView} />
              <Route exact path='/contact' component={ContactView} /> 
            </AnimatedSwitch>
      </BrowserRouter>

      
      
       </AppContex.Provider>
    );
  } 
}

export default Root;
