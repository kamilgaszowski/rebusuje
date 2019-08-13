/* eslint-disable no-unused-expressions */
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import AppContex from '../../contex';
import './Root.scss';
import {rightMessage, messageValue} from '../../data/messages';

import Hero from '../../components/Hero/Hero';
import Menu from '../../components/Menu/Menu';

import GalleryView from '../GalleryView/GalleryView';
import ContactView from '../ContactView/ContactView'
import ImagesModal from '../../components/ImagesModal/ImagesModal';



class Root extends React.Component {
  state = {
    rebus: {},
    isOpenRebus: false,
    isAnswer: false,
    value: '',
    messageHeader: '',
    messageValue: messageValue.right,
  };

openRebus = (e) => {
  Object.assign(this.state.rebus, e);
  this.setState({
    isOpenRebus: true,
    value: '',  
  });  
}

closeRebus = () => {
  this.setState({
    isOpenRebus: false,
    isAnswer: false,
  });
}

// openModalRight = () => {
//   this.setState({
//       isAnswer: true,
//       messageHeader: [...rightMessage][Math.floor(Math.random() * rightMessage.length)],
//       messageValue:  messageValue.right,    
//   });
// };

// openModalPrompt = () => {
//   this.setState({
//     isAnswer: true, 
//     messageHeader: [...wrongMessage][Math.floor(Math.random() * wrongMessage.length)],
//     messageSubheader: 'Moze mała podpowiedź?',
//     messageValue: `Właściwa odpowiedź ma ${this.state.rebus.name.length} liter`,
// });

// }
closeModal = () => {
  this.setState({
      isAnswer: false,
  });
 
};

handleChange = (e) => {
  this.setState({value: e.target.value}, ()=>this.checkAnswer()); 
}

checkAnswer = ()=> {
  this.state.value === this.state.rebus.name ?
  setTimeout(()=> {this.setState({
      isAnswer: true,
      messageHeader: [...rightMessage][Math.floor(Math.random() * rightMessage.length)]
    }) }, 400) : null;
  }

  onSubmit = (e)=> {
    e.preventDefault();
    this.state.value === this.state.rebus.name ?
    setTimeout(()=> {this.setState({
        isAnswer: true,
        messageHeader: [...rightMessage][Math.floor(Math.random() * rightMessage.length)]
      }) }, 400) : null;
    }

  


  render(){
  const {
    rebus,
    isOpenRebus,
  } = this.state;
  const context = {
    openRebus: this.openRebus,

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
                onSubmit={this.onSubmit}
                onCloseModal={this.closeModal}
                  />
              }
             
              <Route exact path='/' component={Hero}/>
              <Route path='/gallery/' component={GalleryView}/>
              <Route exact path='/contact' component={ContactView} /> 
            </AnimatedSwitch>
      </BrowserRouter>
     
       </AppContex.Provider>
    );
  } 
}

export default Root;
