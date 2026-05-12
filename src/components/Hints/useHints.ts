import { useCallback, useMemo, useState } from "react";
import type { MouseEvent } from "react";
import type { Question } from "@/types/question";
import { audioModel } from "@/model/audioModel";
import { HINT_BUTTONS, type HintButtonConfig, type HintButtonId } from "./hintsModel";
import styles from "./Hint.module.scss";

export type HintsProps = {
	setArrQuestion: React.Dispatch<React.SetStateAction<Question[]>>;
	arrQuestions: Question[];
	numberQuestion: number;
	changeModal: () => void;
	showModalFriend: () => void;
	disabled: string | boolean;
};

const STYLE_MAP: Record<HintButtonId, string> = {
	fifty: styles.hints__fifty,
	hallHelp: styles.hall_help,
	friendHelp: styles.friend_help,
};

function isButtonUsed(id: HintButtonId, fiftyAvailable: boolean, parentDisabled: string | boolean): boolean {
	if (id === "fifty") {
		return !fiftyAvailable;
	}
	return Boolean(parentDisabled);
}

export function useHints({
	setArrQuestion,
	arrQuestions,
	numberQuestion,
	changeModal,
	showModalFriend,
	disabled,
}: HintsProps) {
	const [fiftyAvailable, setFiftyAvailable] = useState(true);

	const hintFifty = useCallback(() => {
		setFiftyAvailable(false);
		setArrQuestion(
			arrQuestions.map((item) => {
				if (item === arrQuestions[numberQuestion]) {
					return {
						...item,
						answers: [item.correctAnswer, item.incorrectAnswer[0]],
					};
				}
				return item;
			}),
		);
	}, [arrQuestions, numberQuestion, setArrQuestion]);

	const markHintUsed = useCallback((el: HTMLButtonElement) => {
		el.classList.add("disabled");
	}, []);

	const buttons = useMemo(() => {
		return HINT_BUTTONS.map((config: HintButtonConfig) => {
			const baseClass = STYLE_MAP[config.id];
			const used = isButtonUsed(config.id, fiftyAvailable, disabled);

			const onClick = (e: MouseEvent<HTMLButtonElement>) => {
				if (config.id === "fifty") {
					hintFifty();
				} else if (config.id === "hallHelp") {
					changeModal();
				} else {
					showModalFriend();
				}
				audioModel[config.sound]();
				markHintUsed(e.currentTarget);
			};

			return {
				config,
				className: used ? `${baseClass} disabled` : baseClass,
				onClick,
			};
		});
	}, [fiftyAvailable, disabled, hintFifty, changeModal, showModalFriend, markHintUsed]);

	return { buttons };
}
