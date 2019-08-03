import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import styles from './App.scss';
import Hero from './components/Hero/Hero';
import Menu from './components/Menu/Menu';



import GalleryView from './views/GalleryView/GalleryView';
import ContactView from './views/ContactView/ContactView'

import ImagesModal from './components/Images/Images';
import { rebuses } from './data/rebuses';




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
      
      </Switch>
      </div>
      
     
      </BrowserRouter>
    
      
    );
  }
  
}

export default App;
