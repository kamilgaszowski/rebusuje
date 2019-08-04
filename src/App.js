import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import styles from './App.scss';
import Hero from './components/Hero/Hero';
import Menu from './components/Menu/Menu';



import GalleryView from './views/GalleryView/GalleryView';
import ContactView from './views/ContactView/ContactView'

import ImagesModal from './components/ImagesModal/ImagesModal';
import { rebuses } from './data/rebuses';
import Modal from '../src/components/Modal/Modal';




class App extends React.Component {
  state = {
    items: [...rebuses],
  };

  render(){
  const {items} = this.state;
    return (
      <BrowserRouter>
      <div className={styles.wrapper}>
      <Menu />
      <Switch> 
      <Route exact path='/' component={Hero}/>
      <Route exact path='/gallery' component={GalleryView} />
      <Route exact path='/contact' component={ContactView} />
      <Route exact path='/gallery/:id' component={ImagesModal} {...items} />
      <Route path='/modal' component={Modal} />
      </Switch>
      
      </div>
      
     
      </BrowserRouter>
    
      
    );
  }
  
}

export default App;
