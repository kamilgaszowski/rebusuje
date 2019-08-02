import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import styles from './App.scss';
import Hero from './components/Hero/Hero';
import Menu from './components/Menu/Menu';

import GalleryView from './views/GalleryView/GalleryView';
import ContactView from './views/ContactView/ContactView'
import GameView from './views/GameView/GameView';


function App() {
  return (
    <BrowserRouter>
    <div className={styles.wrapper}>
    <Menu />
    <Switch> 
    <Route exact path='/' component={Hero}/>
    <Route exact path='/gallery' component={GalleryView} />
    <Route exact path='/contact' component={ContactView} />
    <Route path='/gallery/:id' component={GameView} />
    </Switch>
    </div>
    </BrowserRouter>
  
    
  );
}

export default App;
