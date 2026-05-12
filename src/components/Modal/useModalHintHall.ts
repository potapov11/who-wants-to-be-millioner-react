import { useContext, useEffect, useMemo, useState } from "react";
import { globalContext, type GlobalContextValue } from "@/context/GlobalContext";
import { buildHallHintBars, createAndReturnValues } from "./Modal.helpers";

export function useModalHintHall() {
	const ctx = useContext(globalContext) as GlobalContextValue;
	const { arrQuestions, numberQuestion, openModal } = ctx;

	const currentQuestion = arrQuestions[numberQuestion];
	const correctAnswer = currentQuestion.correctAnswer;

	const heightPool = useMemo(() => createAndReturnValues(), [numberQuestion, openModal]);

	const resArr = useMemo(() => buildHallHintBars(correctAnswer, heightPool), [correctAnswer, heightPool]);

	const [showHallHint, setShowHallHint] = useState(false);

	useEffect(() => {
		if (!openModal) {
			setShowHallHint(false);
			return;
		}
		const timeoutId = window.setTimeout(() => setShowHallHint(true), 3000);
		return () => window.clearTimeout(timeoutId);
	}, [openModal]);

	return { resArr, showHallHint, openModal };
}
