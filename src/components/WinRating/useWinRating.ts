import { useContext } from "react";
import { globalContext, type GlobalContextValue } from "@/context/GlobalContext";
import { WIN_PRIZE_AMOUNTS } from "./winRatingConstants";

export function useWinRating() {
	const ctx = useContext(globalContext) as GlobalContextValue;
	const { numberQuestion, isMobile } = ctx;

	return {
		amounts: WIN_PRIZE_AMOUNTS,
		numberQuestion,
		isMobile,
	};
}
