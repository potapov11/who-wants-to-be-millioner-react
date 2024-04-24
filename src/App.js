import './App.css';
import { useState, useRef, useEffect } from 'react';
import hardQuestionsArr from './components/HardQuestionsArr';
import easyQuestionsArr from './components/EasyQuestionArr';
import Card from './components/Card/Card.jsx';
import Logo from './components/Logo/Logo.jsx';
import Hints from './components/Hints/Hint.jsx';
import WinRating from './components/WinRating/WinRating.jsx';
import { playSound } from './components/Audio/Audio.jsx';

function App() {
	const [disabledAll, setDisabledAll] = useState(false);
	const [numberQuestion, setNumberQuestion] = useState(0);
	const [redItem, setRedItem] = useState('');
	const [goldItem, setGoldItem] = useState('');
	const [arrQuestions, setArrQuestion] = useState(numberQuestion < 4 ? easyQuestionsArr : hardQuestionsArr);
	const [fifty, setFifty] = useState(true);

	useEffect(() => {
		setArrQuestion(numberQuestion < 4 ? easyQuestionsArr : hardQuestionsArr);
	}, [numberQuestion]);

	function hintFifty() {
		setFifty(false);
		let newArrQuestions = arrQuestions.map((item, index) => {
			if (item === arrQuestions[numberQuestion]) {
				return {
					...item,
					answers: [item.correctAnswer, item.incorrectAnswer[0]],
				};
			} else {
				return item;
			}
		});

		setArrQuestion(newArrQuestions);
	}

	function checkIsCorrect(answer, item) {
		setDisabledAll(true);

		if (answer === arrQuestions[numberQuestion].correctAnswer) {
			playSound();
			setTimeout(() => {
				setNumberQuestion((prevState) => prevState + 1);
				setDisabledAll(false);
			}, 20000);
			setGoldItem(item);
		} else {
			setRedItem(item);
			alert('вы проиграли');
			window.location.reload();
		}

		console.log(numberQuestion, '..numberQuestion');
	}

	return (
		<div className="App">
			<div className={!disabledAll ? 'container' : 'container disabled-all'}>
				<div className="block">
					<Hints hintFifty={hintFifty} fifty={fifty} />
					<WinRating numberQuestion={numberQuestion} />
					<Logo />
					<span>count {numberQuestion}</span>
					<Card arrQuestions={arrQuestions} redItem={redItem} goldItem={goldItem} checkIsCorrect={checkIsCorrect} numberQuestion={numberQuestion} />
				</div>
			</div>
		</div>
	);
}

export default App;
