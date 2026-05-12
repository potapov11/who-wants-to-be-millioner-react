import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import ModalLose from "./ModalLose";

describe("ModalLose", () => {
	it("показывает текст поражения", () => {
		render(<ModalLose onPlayAgain={() => {}} />);
		expect(screen.getByText(/вы проиграли/i)).toBeInTheDocument();
		expect(screen.getByText(/достойная попытка/i)).toBeInTheDocument();
	});

	it("по клику вызывает onPlayAgain", async () => {
		const user = userEvent.setup();
		const onPlayAgain = vi.fn();
		render(<ModalLose onPlayAgain={onPlayAgain} />);
		await user.click(screen.getByRole("button", { name: /играть еще раз/i }));
		expect(onPlayAgain).toHaveBeenCalledTimes(1);
	});
});
