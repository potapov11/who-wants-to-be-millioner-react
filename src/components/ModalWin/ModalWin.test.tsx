import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import ModalWin from "./ModalWin";

describe("ModalWin", () => {
	it("показывает текст победы и кнопку перезапуска", () => {
		render(<ModalWin onPlayAgain={() => {}} />);
		expect(screen.getByText(/вы выиграли миллион/i)).toBeInTheDocument();
		expect(screen.getByRole("button", { name: /играть еще раз/i })).toBeInTheDocument();
	});

	it("по клику вызывает onPlayAgain", async () => {
		const user = userEvent.setup();
		const onPlayAgain = vi.fn();
		render(<ModalWin onPlayAgain={onPlayAgain} />);
		await user.click(screen.getByRole("button", { name: /играть еще раз/i }));
		expect(onPlayAgain).toHaveBeenCalledTimes(1);
	});
});
