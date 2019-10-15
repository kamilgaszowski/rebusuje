import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import AppContex from '../../contex';
import './Root.scss';
import { rebuses } from '../../data/rebuses';
// import { rightMessage, wrongMessage, messageValue } from '../../data/messages';

import Menu from '../../components/Menu/Menu';

import GalleryView from '../GalleryView/GalleryView';
import ContactView from '../ContactView/ContactView';
import ImagesModal from '../ImagesModal/ImagesModal';
import Hero from '../../components/Hero/Hero';

class Root extends React.Component {
	state = {
		items: [ ...rebuses ],
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

		buttonClick: 0,
		checkAnswer: false,
		answer: [],
		addLetter: [],

		thumbnail: 0
	};

	inputs = React.createRef();
	miniatures = React.createRef();

	openRebus = (e) => {
		this.setState(
			{
				buttonClick: 0,
				checkAnswer: false,
				answer: [],
				letter: [],
				rebus: e,
				isOpenRebus: true
			},
			() => this.getDataFromRebus()
		);
	};

	firstRebus = (e) => {
		this.setState(
			{
				buttonClick: 0,
				checkAnswer: false,
				answer: [],
				letter: [],
				rebus: e,
				isOpenRebus: true
			},
			() => this.getDataFromRebus()
		);
	};

	closeRebus = () => {
		this.setState(
			{
				buttonClick: 0,
				checkAnswer: false,
				answer: [],
				letter: [],
				rebus: rebuses[0],
				isOpenRebus: false,
				isAnswer: false,
				isNotes: false,
				thumbnail: 0
			},
			() => this.getDataFromRebus()
		);
	};

	getDataFromRebus = () => {
		const nextRebus = this.state.items.filter((item) => item.id === this.state.rebus.id + 1);
		const prevRebus = this.state.items.filter((item) => item.id === this.state.rebus.id - 1);
		this.setState({
			buttonClick: 0,
			checkAnswer: false,
			answer: [],
			letter: [],
			value: [],
			addLetter: [],
			nextRebus: nextRebus[0],
			prevRebus: prevRebus[0]
		});
	};

	clearInputs = () => {
		const input = this.inputs.current.childNodes;
		const inputs = [];
		this.state.value.length >= 1 && input[0].focus();
		input.forEach((item) => {
			item.value = '';
			inputs.push(item.value);
		});
		this.setState({
			buttonClick: 0,
			value: [],
			addLetter: [],
			letter: []
		});
	};

	handleNextRebus = () => {
		this.getDataFromRebus();
		this.state.isOpenRebus && this.clearInputs();
		this.setState(
			{
				rebus: this.state.nextRebus,
				isWrongAnswer: false,
				isRightAnswer: false,
				isNotes: false,
				thumbnail: this.state.nextRebus.id
			},
			() => this.getDataFromRebus()
		);
		console.log(this.state.thumbnail);
	};

	handlePrevRebus = () => {
		this.state.isOpenRebus && this.clearInputs();
		this.setState(
			{
				rebus: this.state.prevRebus,
				isWrongAnswer: false,
				isRightAnswer: false,
				isNotes: false,
				thumbnail: this.state.prevRebus.id
			},
			() => this.getDataFromRebus()
		);
	};

	handleChange = (e, index) => {
		const backspace = 8;
		const left = 37;
		const right = 39;

		const input = this.inputs.current.childNodes;
		let inputs = [];

		input.forEach((item) => {
			inputs.push(item.value);
		});
		const item = input[index];
		if (item.value.length > 0 && item.nextSibling && item.nextSibling.value.length === 0) {
			item.nextSibling.focus();
		} else if (
			item.value.length === 0 &&
			e.keyCode === backspace &&
			item.previousSibling &&
			item.previousSibling.value.length >= 0
		) {
			item.previousSibling.focus();
		} else if (e.keyCode === right && item.nextSibling) {
			item.nextSibling.focus();
		} else if (e.keyCode === left && item.previousSibling) {
			item.previousSibling.focus();
		}

		this.setState((prevState) => ({
			letter: prevState.letter,
			inputs,
			value: inputs.join('').toLowerCase()
		}));
	};

	checkAnswer = (e) => {
		e.preventDefault();
		this.state.value === this.state.rebus.name
			? this.setState({
					isRightAnswer: true,
					isWrongAnswer: false
				})
			: this.setState({
					isRightAnswer: false,
					isWrongAnswer: true
				});
	};

	onMouseDown = (e) => {
		e.stopPropagation();
	};

	onOpenNotes = () => {
		this.setState((prevState) => ({
			isNotes: !prevState.isNotes
		}));
	};

	miniSlider = (e) => {
		this.setState(
			{
				rebus: e
			},
			() => this.getDataFromRebus()
		);
	};

	setHint = () => {
		const input = this.inputs.current.childNodes;
		input.forEach((item) => {
			if (item.value.length > 0 && item.nextSibling && item.nextSibling.value.length === 0) {
				item.nextSibling.focus();
			}
		});

		this.setState(
			(prevState) => ({
				letter: prevState.letter + this.state.addLetter,
				value: prevState.value + this.state.addLetter
			}),
			() => console.log(this.state.value)
		);
	};

	hint = () => {
		const visibleName = this.state.rebus.name.split('');
		const hint = [];

		this.setState({
			checkAnswer: true
		});
		visibleName.forEach((item, index) => {
			if (this.state.buttonClick === index) {
				hint.push(item);
				index++;
				this.setState(
					(prevState) => ({
						addLetter: item,
						buttonClick: prevState.buttonClick + 1
					}),
					() => this.setHint()
				);
			}
		});
	};

	nextThumbnails = (e) => {

		const slider = this.miniatures.current.childNodes;
		slider.forEach((item, index) => {
			if (this.state.thumbnail === 0) {
				this.setState({
					thumbnail: 4
				});
				++index;
			} else if (this.state.thumbnail === index) {
				console.log(slider[index]);
				this.setState({
					thumbnail: ++index
				});
				console.log(index);
				this.state.thumbnail >= slider.length && this.setState({ thumbnail: slider.length });

				++index;
			}
		});
	};

	prevThumbnails = (e) => {
		const slider = this.miniatures.current.childNodes;

		slider.forEach((item, index) => {
			if (this.state.thumbnail === slider.length) {
				console.log(slider[index]);
				this.setState({
					thumbnail: slider.length - 5
				});
			} else if (this.state.thumbnail === 0) {
				console.log(slider[index]);
				this.setState({
					thumbnail: 4
				});
			} else if (this.state.thumbnail === index) {
				console.log(slider[index]);
				this.setState({
					thumbnail: --index
				});
				--index;
				index <= 0 && this.setState({ thumbnail: 0 });
			}
		});
	};

	repeat = (string, times) => (times > 0 ? string.repeat(times) : '');

	render() {
		const { rebus, isOpenRebus } = this.state;
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
			miniSlider: this.miniSlider,
			miniatures: this.miniatures,
			nextThumbnails: this.nextThumbnails,
			prevThumbnails: this.prevThumbnails,
			thumbnail: this.state.thumbnail
		};

		return (
			<AppContex.Provider value={context}>
				<BrowserRouter>
					<Menu onCloseRebus={this.closeRebus} />

					<AnimatedSwitch atEnter={{ opacity: 0 }} atLeave={{ opacity: 0 }} atActive={{ opacity: 1 }}>
						{isOpenRebus && (
							<ImagesModal
								{...rebus}
								{...this.state}
								onHandleChange={this.handleChange}
								checkAnswer={this.checkAnswer}
								handleNextRebus={this.handleNextRebus}
								handlePrevRebus={this.handlePrevRebus}
								onOpenNotes={this.onOpenNotes}
								onMouseDown={this.onMouseDown}
								closeRebus={this.closeRebus}
								inputs={this.inputs}
								clearInputs={this.clearInputs}
								hint={this.hint}
								firstRebus={this.firstRebus}
							/>
						)}

						<Route exact path="/" component={Hero} />
						<Route exact path="/gallery" component={GalleryView} />
						<Route exact path="/contact" component={ContactView} />
					</AnimatedSwitch>
				</BrowserRouter>
			</AppContex.Provider>
		);
	}
}

export default Root;
