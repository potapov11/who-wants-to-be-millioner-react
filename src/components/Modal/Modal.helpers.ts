import type { Question } from "@/types/question";

export const random = (min: number, max: number): number => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const createAndReturnValues = (): number[] => {
	const values: number[] = [];
	for (let i = 0; i < 4; i++) {
		values.push(random(50, 150));
	}
	return values.sort((a, b) => b - a);
};

export type HallHintBar = {
	height: number;
	letter: string | null;
};

const OPTION_LETTERS = ["A", "B", "C", "D"] as const;

/** Столбики зала: максимум у буквы правильного ответа (по первому символу строки ответа). */
export function buildHallHintBars(correctAnswer: Question["correctAnswer"], sortedHeights: number[]): HallHintBar[] {
	const firstLetter = correctAnswer[0];
	const top = sortedHeights[0];

	return OPTION_LETTERS.map((letter) => {
		if (letter === firstLetter) {
			return { height: top, letter: firstLetter };
		}
		return { height: random(20, top), letter };
	});
}
