/* eslint-disable no-unused-expressions */
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import AppContex from '../../contex';
import './Root.scss';
import { rebuses } from '../../data/rebuses';
import {rightMessage, wrongMessage, messageValue} from '../../data/messages';

import Menu from '../../components/Menu/Menu';

import GalleryView from '../GalleryView/GalleryView';
import ContactView from '../ContactView/ContactView'
import ImagesModal from '../../components/ImagesModal/ImagesModal';




class Root extends React.Component {
  state = {
    items: [...rebuses],
    rebus: [],
    isOpenRebus: false,
    isAnswer: false,
    isNotes: false,
    value: '',
    messageHeader: '',
    messageValue: '',
    nextRebus: [],
    prevRebus: [],
  };
  

openRebus = (e) => {
  this.setState({
    rebus: e,
    isOpenRebus: true, 
  
  }, ()=>this.getDataFromRebus()); 
}

getDataFromRebus = () => {
  const nextRebus = this.state.items.filter(item => item.id === this.state.rebus.id + 1);
  const prevRebus = this.state.items.filter(item => item.id === this.state.rebus.id -1);
  this.setState({
    nextRebus: nextRebus[0],
    prevRebus: prevRebus[0],
  });
}

handleNextRebus = () => {
  this.setState({
    value: ' ',
    rebus: this.state.nextRebus,

  }, ()=>this.getDataFromRebus());
}

handlePrevRebus = () => {
  this.setState({
    value: ' ',
    rebus: this.state.prevRebus,
  }, ()=>this.getDataFromRebus());
}

closeRebus = () => {
  this.setState({
    isOpenRebus: false,
    isAnswer: false,
  });
}

closeModal = () => {
  this.setState({
      isAnswer: false,
      isNotes: false,
  });
};

handleChange = (e) => {
  this.setState({value: e.target.value.toLowerCase()}); 
}

checkAnswer = (e)=> {
  e.preventDefault();
  this.setState({
    isNotes: false,
    isAnswer: true,
  })
  this.state.value === this.state.rebus.name 
  ? (
   this.setState({
      messageHeader: [...rightMessage][Math.floor(Math.random() * rightMessage.length)],
      messageValue: messageValue.right,
    })
  ) : (
    this.setState({
       messageHeader: [...wrongMessage][Math.floor(Math.random() * rightMessage.length)],
       messageValue: messageValue.wrong,
     })
   )
}

onOpenNotes = () => {
  this.setState(prevState =>({
    isNotes: !prevState.isNotes,
  }));
}
 

  render(){
  const {
    rebus,
    isOpenRebus,
    items,
  } = this.state;
  const context = {
    openRebus: this.openRebus,
    items: this.state.items,
    value: this.state.value,
    }
  
    return (
      <AppContex.Provider value={context}>
      <BrowserRouter>
        <Menu onCloseRebus={this.closeRebus}/>
        
            <AnimatedSwitch
            atEnter={{ opacity: 0}}
            atLeave={{ opacity: 0}}
            atActive={{ opacity: 1}}> 
              {
                isOpenRebus
                &&
                <ImagesModal 
                {...rebus} 
                {...this.state}
                onHandleChange={this.handleChange}
                checkAnswer={this.checkAnswer}
                onCloseModal={this.closeModal}
                handleNextRebus={this.handleNextRebus}
                handlePrevRebus={this.handlePrevRebus}
                onOpenNotes={this.onOpenNotes}
                  />
              }
              <Route exact path='/' component={GalleryView} {...items}/>
              <Route exact path='/contact' component={ContactView} /> 
            </AnimatedSwitch>
      </BrowserRouter>
     
       </AppContex.Provider>
    );
  } 
}

export default Root;
