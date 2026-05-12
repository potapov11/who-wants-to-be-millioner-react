import { useCallback, useEffect, useRef, useState } from "react";
import type { Question } from "@/types/question";
import { audioModel } from "@/model/audioModel";
import easyQuestions from "@/components/EasyQuestionArr";
import hardQuestions from "@/components/HardQuestionsArr";

const LAST_QUESTION_INDEX = 14;
const HARD_BANK_FROM_QUESTION = 4;

export function useQuizGame() {
	const timeoutRef = useRef<ReturnType<typeof window.setTimeout> | null>(null);

	const clearGameTimeout = useCallback(() => {
		if (timeoutRef.current !== null) {
			window.clearTimeout(timeoutRef.current);
			timeoutRef.current = null;
		}
	}, []);

	useEffect(() => () => clearGameTimeout(), [clearGameTimeout]);

	const [isOpenIntro, setOpenIntro] = useState(() => !sessionStorage.getItem("intro"));
	const [disabledAll, setDisabledAll] = useState(false);
	const [numberQuestion, setNumberQuestion] = useState(0);
	const [redItem, setRedItem] = useState("");
	const [goldItem, setGoldItem] = useState("");
	const [arrQuestions, setArrQuestion] = useState<Question[]>(easyQuestions);
	const [openModal, setOpenModal] = useState(false);
	const [openModalFriend, setOpenModalFriend] = useState(false);
	const [isModalLose, setModalLose] = useState(false);
	const [disabled, setIsDisabled] = useState<string | boolean>("");
	const [isModalWin, setModalWin] = useState(false);
	const [playSessionId, setPlaySessionId] = useState(0);

	const restartGame = useCallback(() => {
		clearGameTimeout();
		setModalWin(false);
		setModalLose(false);
		setNumberQuestion(0);
		setRedItem("");
		setGoldItem("");
		setArrQuestion(easyQuestions);
		setOpenModal(false);
		setOpenModalFriend(false);
		audioModel.stopPlayPollHintSound();
		audioModel.stopPlayFriendHintSound();
		setDisabledAll(false);
		setIsDisabled("");
		setPlaySessionId((id) => id + 1);
	}, [clearGameTimeout]);

	const changeModal = useCallback(() => {
		setOpenModal((prev) => !prev);
	}, []);

	const changeOpenIntro = useCallback(() => {
		setOpenIntro(false);
		sessionStorage.setItem("intro", "false");
	}, []);

	const hideModal = useCallback(() => {
		setOpenModal((wasOpen) => {
			if (wasOpen) {
				audioModel.stopPlayPollHintSound();
			}
			return false;
		});
		setOpenModalFriend((wasOpen) => {
			if (wasOpen) {
				audioModel.stopPlayFriendHintSound();
			}
			return false;
		});
	}, []);

	const hideModalFriend = useCallback(() => {
		setOpenModalFriend((prev) => !prev);
	}, []);

	useEffect(() => {
		setArrQuestion(numberQuestion < HARD_BANK_FROM_QUESTION ? easyQuestions : hardQuestions);
	}, [numberQuestion]);

	const checkIsCorrect = useCallback(
		(answer: string) => {
			setDisabledAll(true);
			clearGameTimeout();

			const current = arrQuestions[numberQuestion];
			if (!current) {
				setDisabledAll(false);
				return;
			}

			const isLastQuestion = numberQuestion === LAST_QUESTION_INDEX;

			if (answer === current.correctAnswer) {
				setGoldItem(answer);
				setRedItem("");
				void audioModel.playSound();
				timeoutRef.current = window.setTimeout(() => {
					timeoutRef.current = null;
					setGoldItem("");
					setRedItem("");
					if (isLastQuestion) {
						setModalWin(true);
						setIsDisabled(true);
					} else {
						setNumberQuestion((prev) => prev + 1);
					}
					setDisabledAll(false);
				}, 1000);
			} else {
				setRedItem(answer);
				setGoldItem(current.correctAnswer);
				void audioModel.playWrongSound();
				timeoutRef.current = window.setTimeout(() => {
					timeoutRef.current = null;
					setDisabledAll(false);
					setModalLose(true);
				}, 3000);
			}
		},
		[arrQuestions, numberQuestion, clearGameTimeout],
	);

	return {
		isOpenIntro,
		disabledAll,
		numberQuestion,
		redItem,
		goldItem,
		arrQuestions,
		setArrQuestion,
		openModal,
		openModalFriend,
		isModalLose,
		isModalWin,
		disabled,
		changeModal,
		changeOpenIntro,
		hideModal,
		hideModalFriend,
		checkIsCorrect,
		restartGame,
		playSessionId,
	};
}
