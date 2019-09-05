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
import ImagesModal from '../ImagesModal/ImagesModal';
import Hero from '../../components/Hero/Hero';


class Root extends React.Component {
    state = {
        items: [...rebuses],
        rebus: rebuses[0],
        isOpenRebus: false,
        isRightAnswer: false,
        isWrongAnswer: false,
        isNotes: false,
        value: [],
        letter: [],
        emptyValue: '',
        nextRebus: rebuses[1],
        prevRebus: null,
    };

    inputs = React.createRef();

    openRebus = (e) => {
        this.setState({
            letter: [],
            value: [],
            rebus: e,
            isOpenRebus: true,
        }, () => this.getDataFromRebus());
    }

    firstRebus = (e) => {
        this.setState({
            letter: [],
            rebus: e,
            isOpenRebus: true,
        }, () => this.getDataFromRebus());
    }

    closeRebus = () => {
        this.setState({
            letter: [],
            rebus: rebuses[0],
            isOpenRebus: false,
            isAnswer: false,
            isNotes: false,
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

    clearInputs = () => {
        const input = this.inputs.current.childNodes;
        const inputs = [];
        input.forEach(item => {
            item.value = ''
            inputs.push(item.value)
        })

        this.setState({
            letter: inputs,
        });
    }

    handleNextRebus = () => {
        this.state.isOpenRebus && this.clearInputs();
        this.setState({
            rebus: this.state.nextRebus,
            isWrongAnswer: false,
            isRightAnswer: false,
            isNotes: false,
        }, () => this.getDataFromRebus());
    }

    handlePrevRebus = () => {
        this.state.isOpenRebus && this.clearInputs();
        this.setState({
            rebus: this.state.prevRebus,
            isWrongAnswer: false,
            isRightAnswer: false,
            isNotes: false,
        }, () => this.getDataFromRebus());
    }


    onKeyPress = (e) => {
        const input = this.inputs.current.childNodes;
        // let inputs = [];
        input.forEach(item => {
            // inputs.push(item.value)

            if (e.keyCode === 8) {
                item.previousSibling.focus();
               }
        }, () => console.log('dupa'))
    }

    handleChange = (e) => {

        const input = this.inputs.current.childNodes;
        let inputs = [];
        input.forEach(item => {
            inputs.push(item.value)
            if (item.value.length > 0 && item.nextSibling ) {
                item.nextSibling.focus();
            }
            if (e.keyCode === 8) {
                item.previousSibling.focus();
               }
        })

        this.setState({
            letter: inputs,
            value: inputs.join('').toLowerCase(),
        });
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


    mini = (e) => {
        this.setState({
            rebus: e,
        }, () => this.getDataFromRebus())
    }


    render() {
        const {
            rebus,
            isOpenRebus,
        } = this.state;
        const context = {
            openRebus: this.openRebus,
            firstRebus: this.firstRebus,
            items: this.state.items,
            value: this.state.value,
            rebus: this.state.rebus,
            handleNextRebus: this.handleNextRebus,
            handlePrevRebus: this.handlePrevRebus,
            nextRebus: this.state.nextRebus,
            prevRebus: this.state.prevRebus,
            mini: this.mini,
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
                            handleNextRebus={this.handleNextRebus}
                            handlePrevRebus={this.handlePrevRebus}
                            onOpenNotes={this.onOpenNotes}
                            onMouseDown={this.onMouseDown}
                            closeRebus={this.closeRebus}
                            inputs={this.inputs}
                            onKeyPress={this.onKeyPress}
                        />
                    }
                    <Route exact path='/'
                        component={Hero}
                        {...this.state}
                    />
                    <Route exact path='/gallery' component={GalleryView} />
                    <Route exact path='/contact' component={ContactView} />
                </AnimatedSwitch>
            </BrowserRouter>

        </AppContex.Provider>
        );
    }
}

export default Root;


