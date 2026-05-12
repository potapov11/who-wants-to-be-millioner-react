import { useContext, useEffect, useState } from "react";
import { globalContext, type GlobalContextValue } from "@/context/GlobalContext";
import { WIN_PRIZE_AMOUNTS, WIN_RATING_INITIAL_OFFSET_PX, WIN_RATING_STEP_PX } from "./winRatingConstants";

export function useWinRating() {
	const ctx = useContext(globalContext) as GlobalContextValue;
	const { numberQuestion, isMobile } = ctx;

	const [translateY, setTranslateY] = useState(WIN_RATING_INITIAL_OFFSET_PX);

	useEffect(() => {
		setTranslateY((prev) => prev - WIN_RATING_STEP_PX);
	}, [numberQuestion]);

	return {
		amounts: WIN_PRIZE_AMOUNTS,
		numberQuestion,
		isMobile,
		translateY,
	};
}
