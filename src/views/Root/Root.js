import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './Root.scss';
import AppContext from '../../contex';
import { rebuses } from '../../data/rebuses';

import Hero from '../../components/Hero/Hero';
import Menu from '../../components/Menu/Menu';



import GalleryView from '../GalleryView/GalleryView';
import ContactView from '../ContactView/ContactView'





class Root extends React.Component {
  state = {
    items: [...rebuses],
  };



  render(){
  
    return (
      <>
      <BrowserRouter>
        <AppContext.Provider value={this.state.items}>

        
        <Route exact path='/gallery' component={GalleryView}/>
        <Menu />
            <Switch> 
              <Route exact path='/' component={Hero}/>
              <Route exact path='/contact' component={ContactView} /> 
            </Switch>
          
          
            </AppContext.Provider>
         
           
            
            
        
      </BrowserRouter>
      
       </>
    );
  } 
}

export default Root;
