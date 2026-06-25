import './App.scss';
import { globalContext, type GlobalContextValue } from '@/context/GlobalContext';
import { Card } from './components/Card/Card';
import { Logo } from './components/Logo/Logo';
import { MusicArrowButton } from './components/MusicArrowButton/MusicArrowButton';
import { Hints } from './components/Hints/Hint';
import WinRating from './components/WinRating/WinRating';
import { ModalHintHall } from './components/Modal/ModalHintHall';
import ModalFriendCall from './components/ModalFriendCall/ModalFriendCall';
import IntroModalInfo from './components/IntroModalInfo/IntroModalInfo';
import ModalLose from './components/ModalLose/ModalLose';
import ModalWin from './components/ModalWin/ModalWin';
import { useQuizGame } from '@/hooks/useQuizGame';
import { useMobileViewport } from '@/hooks/useMobileViewport';
import { LayoutWrapper } from '@/layouts/LayoutWrapper/LayoutWrapper';

export default function App() {
	const quiz = useQuizGame();
	const containerClassName = !quiz.disabledAll ? 'container' : 'container disabled-all';
	const MOBILE_VIEWPORT_MAX_PX = 800;
	const isMobile = useMobileViewport(MOBILE_VIEWPORT_MAX_PX);

	const contextValue: GlobalContextValue = {
		numberQuestion: quiz.numberQuestion,
		arrQuestions: quiz.arrQuestions,
		openModal: quiz.openModal,
		isMobile,
	};

	if (quiz.isModalLose) {
		return (
			<LayoutWrapper>
				<ModalLose onPlayAgain={quiz.restartGame} />
			</LayoutWrapper>
		);
	}

	if (quiz.isModalWin) {
		return (
			<LayoutWrapper>
				<ModalWin onPlayAgain={quiz.restartGame} />
			</LayoutWrapper>
		);
	}

	if (quiz.isOpenIntro) {
		return (
			<globalContext.Provider value={contextValue}>
				<div className="App">
					<div className={containerClassName}>
						<div className="block">
							<IntroModalInfo changeOpenIntro={quiz.changeOpenIntro} />
						</div>
					</div>
				</div>
			</globalContext.Provider>
		);
	}

	return (
		<globalContext.Provider value={contextValue}>
			<div className="App">
				<div className={containerClassName}>
					<div className="block">
						<div key={quiz.playSessionId}>
							<MusicArrowButton />
							<ModalHintHall />
							<ModalFriendCall
								openModalFriend={quiz.openModalFriend}
								onClose={quiz.hideModalFriend}
								onConfirmAnswer={(answer) => {
									quiz.checkIsCorrect(answer);
									quiz.hideModal();
								}}
							/>
							<Hints
								setArrQuestion={quiz.setArrQuestion}
								arrQuestions={quiz.arrQuestions}
								numberQuestion={quiz.numberQuestion}
								changeModal={quiz.changeModal}
								showModalFriend={quiz.showModalFriend}
								disabled={quiz.disabled}
							/>
							<Logo />
							<WinRating />
							<Card redItem={quiz.redItem} goldItem={quiz.goldItem} checkIsCorrect={quiz.checkIsCorrect} hideModal={quiz.hideModal} />
						</div>
					</div>
				</div>
			</div>
		</globalContext.Provider>
	);
}
