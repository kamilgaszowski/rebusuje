import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import AppContex from '../../contex';
import './Root.scss';
import { rebuses } from '../../data/rebuses';
// import { rightMessage, wrongMessage, messageValue } from '../../data/messages';

import Menu from '../../components/Menu/Menu';

import GalleryView from '../GalleryView/GalleryView';
import ContactView from '../ContactView/ContactView'
import ImagesModal from '../../components/ImagesModal/ImagesModal';
import Hero from '../../components/Hero/Hero';


class Root extends React.Component {
    state = {
        items: [...rebuses],
        rebus: {id: 1, name: 'amsterdam', src: 'https://i.postimg.cc/76tjfCGP/1.jpg'},
        isOpenRebus: false,
        isRightAnswer: false,
        isWrongAnswer: false,
        isNotes: false,
        value: '',
        nextRebus: [],
        prevRebus: [],
    };

    openRebus = (e) => {
        this.setState({
            rebus: e,
            isOpenRebus: true,

        }, () => this.getDataFromRebus());
    }

    getDataFromRebus = () => {
        const nextRebus = this.state.items.filter(item => item.id === this.state.rebus.id + 1);
        const prevRebus = this.state.items.filter(item => item.id === this.state.rebus.id - 1);
        this.setState({
            nextRebus: nextRebus[0],
            prevRebus: prevRebus[0],
        });
    }

    handleNextRebus = () => {
        this.setState({
            value: '',
            rebus: this.state.nextRebus,
            isWrongAnswer: false,
            isRightAnswer: false,
            isNotes: false,
        }, () => this.getDataFromRebus());
    }

    handlePrevRebus = () => {
        this.setState({
            value: '',
            rebus: this.state.prevRebus,
            isWrongAnswer: false,
            isRightAnswer: false,
            isNotes: false,
        }, () => this.getDataFromRebus());
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
        this.setState({
            value: e.target.value.toLowerCase()
        },()=> console.log(this.state.value));

    }

    checkAnswer = (e) => {
        e.preventDefault();

        this.state.value === this.state.rebus.name
        ?
        this.setState({
                isRightAnswer: true,
                isWrongAnswer: false,
            })
        :
        this.setState({
            isRightAnswer: false,
            isWrongAnswer: true,
        })
    }

    onMouseDown = (e) => { e.stopPropagation() }

    onOpenNotes = () => {
        this.setState(prevState => ({
            isNotes: !prevState.isNotes,
        }));
    }


    render() {
        const {
            rebus,
            isOpenRebus,
            items,
        } = this.state;
        const context = {
            openRebus: this.openRebus,
            items: this.state.items,
            value: this.state.value,
            rebus: this.state.rebus,
        }

        return (<AppContex.Provider value={context} >
            <BrowserRouter >
                <Menu onCloseRebus={this.closeRebus} />

                <AnimatedSwitch
                    atEnter={{ opacity: 0 }}
                    atLeave={{ opacity: 0 }}
                    atActive={{ opacity: 1 }} >
                    {isOpenRebus &&
                        <ImagesModal {...rebus} {...this.state}
                            onHandleChange={this.handleChange}
                            checkAnswer={this.checkAnswer}
                            onCloseModal={this.closeModal}
                            handleNextRebus={this.handleNextRebus}
                            handlePrevRebus={this.handlePrevRebus}
                            onOpenNotes={this.onOpenNotes}
                            onMouseDown={this.onMouseDown}
                        />
                    }
                    <Route exact path='/' component={Hero}/>
                    <Route exact path='/gallery' component={GalleryView} {...items} />
                    <Route exact path='/contact' component={ContactView} />
                </AnimatedSwitch>
            </BrowserRouter>

        </AppContex.Provider>
        );
    }
}

export default Root;


