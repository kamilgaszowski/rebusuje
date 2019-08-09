import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AppContex from '../../contex';
import './Root.scss';

import { rebuses } from '../../data/rebuses';

import Hero from '../../components/Hero/Hero';
import Menu from '../../components/Menu/Menu';


import GalleryView from '../GalleryView/GalleryView';
import ContactView from '../ContactView/ContactView'
import ImagesModal from '../../components/ImagesModal/ImagesModal';






class Root extends React.Component {
  state = {
    rebus: {},
    isOpenRebus: false,
  };

openRebus = (e) => {
    Object.assign(this.state.rebus, e);
    this.setState({
      isOpenRebus: true,
    })
    console.log(this.state.rebus);
}

closeRebus = (e) => {
  e.preventDefault();
  this.setState({
    isOpenRebus: false,
  })
  console.log('dupa');
}
 
  render(){
  const {rebus, isOpenRebus} = this.state;
  const context = {
    rebus : this.state.rebus,
    openRebus: this.openRebus,
    closeRebus: this.closeRebus,
    }
    return (
      <AppContex.Provider value={context}>
      <BrowserRouter>
      

      
        <Menu />
        
            <Switch> 
            {isOpenRebus && <ImagesModal {...rebus} onCloseRebus={this.closeRebus}/>}
            <Route exact path='/gallery/:id' component={ImagesModal} {...rebus} onCloseRebus={this.closeRebus}/> }
              <Route exact path='/gallery/' component={GalleryView} onOpenRebus={() => this.openRebus()}/>
              
              <Route exact path='/' component={Hero}/>
              <Route exact path='/contact' component={ContactView} /> 
             
            </Switch>
      </BrowserRouter>

      
      
       </AppContex.Provider>
    );
  } 
}

export default Root;
