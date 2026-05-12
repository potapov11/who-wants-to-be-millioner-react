import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { globalContext } from "@/context/GlobalContext";
import type { GlobalContextValue } from "@/context/GlobalContext";
import type { Question } from "@/types/question";
import { Card } from "./Card";

const sampleQuestion: Question = {
	question: "Тестовый вопрос?",
	answers: ["A один", "B два", "C три", "D четыре"],
	correctAnswer: "C три",
	correctPollAnswer: "C",
	incorrectAnswer: ["A один", "B два"],
};

function renderCard(overrides: Partial<GlobalContextValue> = {}) {
	const value: GlobalContextValue = {
		numberQuestion: 0,
		arrQuestions: [sampleQuestion],
		openModal: false,
		isMobile: false,
		...overrides,
	};
	const checkIsCorrect = vi.fn();
	const hideModal = vi.fn();
	return {
		...render(
			<globalContext.Provider value={value}>
				<Card redItem="" goldItem="" checkIsCorrect={checkIsCorrect} hideModal={hideModal} />
			</globalContext.Provider>,
		),
		checkIsCorrect,
		hideModal,
	};
}

describe("Card", () => {
	it("рендерит текст вопроса и варианты ответов", () => {
		renderCard();
		expect(screen.getByRole("heading", { name: /тестовый вопрос/i })).toBeInTheDocument();
		expect(screen.getByText("C три")).toBeInTheDocument();
	});

	it("при выборе ответа вызывает checkIsCorrect и hideModal", async () => {
		const user = userEvent.setup();
		const { checkIsCorrect, hideModal } = renderCard();
		await user.click(screen.getByText("C три"));
		expect(checkIsCorrect).toHaveBeenCalledWith("C три");
		expect(hideModal).toHaveBeenCalledTimes(1);
	});
});
