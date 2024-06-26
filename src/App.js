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
import { playSound, stopPlayPollHintSound, stopPlayFriendHintSound, playWrongSound } from './components/Audio/Audio.jsx';
import ModalFriendCall from './components/ModalFriendCall/ModalFriendCall.jsx';
import IntroModalInfo from './components/IntroModalInfo/IntroModalInfo.jsx';
import ModalLose from './components/ModalLose/ModalLose.jsx';
import ModalWin from './components/ModalWin/ModalWin.jsx';
export const globalContext = createContext();

function App() {
	const [isOpenIntro, setOpenIntro] = useState(true ? !sessionStorage.getItem('intro') : false);
	const [disabledAll, setDisabledAll] = useState(false);
	const [numberQuestion, setNumberQuestion] = useState(0);
	const [redItem, setRedItem] = useState('');
	const [goldItem, setGoldItem] = useState('');
	const [arrQuestions, setArrQuestion] = useState(numberQuestion < 4 ? easyQuestionsArr : hardQuestionsArr);
	const [fifty, setFifty] = useState(true);
	const [openModal, setOpenModal] = useState(false);
	const [openModalFriend, setOpenModalFriend] = useState(false);
	const [isModalLose, setModalLose] = useState(false);
	const [disabled, setIsDisabled] = useState('');
	const [intro, setIntro] = useState(sessionStorage.getItem('intro') || false);
	const [isMobile, setIsMobile] = useState(false);
	const [isModalWin, setModalWin] = useState(false);

	console.log(isOpenIntro);

	function changeModal() {
		setOpenModal(!openModal);
	}

	function changeOpenIntro() {
		setOpenIntro(false);
		sessionStorage.setItem('intro', false);
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
		return window.innerWidth <= 500 ? setIsMobile(true) : null;
	}, []);

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

		console.log(numberQuestion);

		if (numberQuestion === 14) {
			setTimeout(() => {
				alert('Вы выиграли');
				setModalWin(true);
				setIsDisabled(true);
				return;
			}, 1000);
		}

		if (answer === arrQuestions[numberQuestion].correctAnswer) {
			playSound();
			setTimeout(() => {
				setNumberQuestion((prevState) => prevState + 1);
				setDisabledAll(false);
			}, 1000);
			setGoldItem(item);
		} else {
			playWrongSound();
			setTimeout(() => {
				setDisabledAll(false);
				setModalLose(true);
			}, 3000);
			setRedItem(item);
		}
	}

	return (
		<globalContext.Provider value={{ numberQuestion, arrQuestions, openModal, isMobile }}>
			<div className="App">
				<div className={!disabledAll ? 'container' : 'container disabled-all'}>
					{isModalLose ? (
						<ModalLose />
					) : (
						<div className="block">
							{isOpenIntro ? (
								<IntroModalInfo changeOpenIntro={changeOpenIntro} />
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
					)}
					{isModalWin && <ModalWin />}
				</div>
			</div>
		</globalContext.Provider>
	);
}

export default App;
