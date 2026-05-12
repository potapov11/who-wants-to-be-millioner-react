import { useContext, useEffect, useState } from "react";
import { globalContext, type GlobalContextValue } from "@/context/GlobalContext";

const FRIEND_HINT_DELAY_MS = 5000;

export function useModalFriendCall(openModalFriend: boolean) {
	const { arrQuestions, numberQuestion } = useContext(globalContext) as GlobalContextValue;
	const [showFriendHint, setShowFriendHint] = useState(false);

	useEffect(() => {
		if (!openModalFriend) {
			setShowFriendHint(false);
			return;
		}

		const timerId = window.setTimeout(() => {
			setShowFriendHint(true);
		}, FRIEND_HINT_DELAY_MS);

		return () => {
			window.clearTimeout(timerId);
		};
	}, [openModalFriend]);

	const correctAnswer = arrQuestions[numberQuestion]?.correctAnswer ?? "";

	return { showFriendHint, correctAnswer };
}
