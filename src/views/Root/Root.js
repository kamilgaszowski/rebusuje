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

closeRebus = () => {

  this.setState({
    isOpenRebus: false,
  })
  console.log('dupa');
}
 
  render(){
  const {rebus, isOpenRebus} = this.state;
  const context = {
    openRebus: this.openRebus,
    }
  
    return (
      <AppContex.Provider value={context}>
      <BrowserRouter>
        <Menu />
            <AnimatedSwitch
            atEnter={{ opacity: 0, scale: 1.2}}
            atLeave={{ opacity: 0, scale: 0.8 }}
            atActive={{ opacity: 1, scale: 1 }}> 
              <Route exact path='/gallery/:id' component={ImagesModal} {...rebus} onCloseRebus={this.closeRebus}/> 
              {isOpenRebus && <ImagesModal {...rebus} onCloseRebus={this.closeRebus}/>}
              <Route path='/gallery/' component={GalleryView} />
              <Route exact path='/' component={Hero}/>
              <Route exact path='/contact' component={ContactView} /> 
            </AnimatedSwitch>
      </BrowserRouter>

      
      
       </AppContex.Provider>
    );
  } 
}

export default Root;
