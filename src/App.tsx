import "./App.scss";
import { globalContext, type GlobalContextValue } from "@/context/GlobalContext";
import { Card } from "./components/Card/Card";
import { Logo } from "./components/Logo/Logo";
import { MusicArrowButton } from "./components/MusicArrowButton/MusicArrowButton";
import { Hints } from "./components/Hints/Hint";
import WinRating from "./components/WinRating/WinRating";
import { ModalHintHall } from "./components/Modal/ModalHintHall";
import ModalFriendCall from "./components/ModalFriendCall/ModalFriendCall";
import IntroModalInfo from "./components/IntroModalInfo/IntroModalInfo";
import ModalLose from "./components/ModalLose/ModalLose";
import ModalWin from "./components/ModalWin/ModalWin";
import { useMobileViewport } from "@/hooks/useMobileViewport";
import { useQuizGame } from "@/hooks/useQuizGame";

/** Совпадает с `$trully-mobile-width` в `styles/_variables.scss`. */
const MOBILE_VIEWPORT_MAX_PX = 520;

export default function App() {
	const isMobile = useMobileViewport(MOBILE_VIEWPORT_MAX_PX);
	const quiz = useQuizGame();

	const contextValue: GlobalContextValue = {
		numberQuestion: quiz.numberQuestion,
		arrQuestions: quiz.arrQuestions,
		openModal: quiz.openModal,
		isMobile,
	};

	const containerClassName = !quiz.disabledAll ? "container" : "container disabled-all";

	return (
		<globalContext.Provider value={contextValue}>
			<div className="App">
				<div className={containerClassName}>
					{quiz.isModalLose ? (
						<ModalLose onPlayAgain={quiz.restartGame} />
					) : (
						<div className="block">
							{quiz.isOpenIntro ? (
								<IntroModalInfo changeOpenIntro={quiz.changeOpenIntro} />
							) : (
								<div  key={quiz.playSessionId}>
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
									<WinRating />
									<Logo />
									<Card
										redItem={quiz.redItem}
										goldItem={quiz.goldItem}
										checkIsCorrect={quiz.checkIsCorrect}
										hideModal={quiz.hideModal}
									/>
								</div>
							)}
						</div>
					)}
					{quiz.isModalWin && <ModalWin onPlayAgain={quiz.restartGame} />}
				</div>
			</div>
		</globalContext.Provider>
	);
}
