import './App.css';
import { useState, useEffect, createContext } from 'react';
import hardQuestionsArr from './components/HardQuestionsArr';
import easyQuestionsArr from './components/EasyQuestionArr';
import Card from './components/Card/Card.jsx';
import Logo from './components/Logo/Logo.jsx';
import ArrowMusic from './components/ArrowMuisc/ArowMusic.jsx';
import Hints from './components/Hints/Hint.jsx';
import WinRating from './components/WinRating/WinRating.jsx';
import ModalHintHall from './components/Modal/ModalHintHall.jsx';
import { playSound, stopPlayPollHintSound, stopPlayFriendHintSound } from './components/Audio/Audio.jsx';
import ModalFriendCall from './components/ModalFriendCall/ModalFriendCall.jsx';
import IntroModalInfo from './components/IntroModalInfo/IntroModalInfo.jsx';
export const globalContext = createContext();

function App() {
	const [isOpenIntro, setOpenIntro] = useState(true);
	const [disabledAll, setDisabledAll] = useState(false);
	const [numberQuestion, setNumberQuestion] = useState(0);
	const [redItem, setRedItem] = useState('');
	const [goldItem, setGoldItem] = useState('');
	const [arrQuestions, setArrQuestion] = useState(numberQuestion < 4 ? easyQuestionsArr : hardQuestionsArr);
	const [fifty, setFifty] = useState(true);
	const [openModal, setOpenModal] = useState(false);
	const [openModalFriend, setOpenModalFriend] = useState(false);
	const [disabled, setIsDisabled] = useState('');

	function changeModal() {
		setOpenModal(!openModal);
	}

	function changeClass(e) {
		e.classList.add('disabled');
	}

	function hideModal() {
		if (openModal) {
			setOpenModal(false);
			stopPlayPollHintSound();
		}
		if (openModalFriend) {
			setOpenModalFriend(false);
			stopPlayFriendHintSound();
		}
	}

	function hideModalFriend() {
		setOpenModalFriend(!openModalFriend);
	}

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
			}, 1000);
			setGoldItem(item);
		} else {
			setRedItem(item);
			setTimeout(() => {
				window.location.reload();
			}, 3000);
		}
	}

	return (
		<globalContext.Provider value={{ numberQuestion, arrQuestions, openModal }}>
			<div className="App">
				<div className={!disabledAll ? 'container' : 'container disabled-all'}>
					<div className="block">
						{isOpenIntro ? (
							<IntroModalInfo />
						) : (
							<div>
								<ArrowMusic />
								<ModalHintHall />
								<ModalFriendCall openModalFriend={openModalFriend} />
								<Hints hintFifty={hintFifty} fifty={fifty} changeModal={changeModal} changeClass={changeClass} hideModalFriend={hideModalFriend} openModal={openModal} disabled={disabled} />
								<WinRating />
								<Logo />
								{/* <span>count {numberQuestion}</span> */}
								<Card redItem={redItem} goldItem={goldItem} checkIsCorrect={checkIsCorrect} hideModal={hideModal} />
							</div>
						)}
					</div>
				</div>
			</div>
		</globalContext.Provider>
	);
}

export default App;
