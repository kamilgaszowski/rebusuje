import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './Root.scss';

import Hero from '../../components/Hero/Hero';
import Menu from '../../components/Menu/Menu';


import GalleryView from '../GalleryView/GalleryView';
import ContactView from '../ContactView/ContactView'
import Image from '../../components/Image/Image';





class Root extends React.Component {
  
  render(){
  
    return (
      <>
      <BrowserRouter>
        <Route exact path='/gallery' component={GalleryView}/>
        <Route path='/gallery/:id' component={Image}/>
        <Menu />
            <Switch> 
              <Route exact path='/' component={Hero}/>
              <Route exact path='/contact' component={ContactView} /> 
            </Switch>
      </BrowserRouter>
      
       </>
    );
  } 
}

export default Root;
