import { afterEach, describe, expect, it, vi } from "vitest";
import { buildHallHintBars } from "./Modal.helpers";

describe("buildHallHintBars", () => {
	afterEach(() => {
		vi.restoreAllMocks();
	});

	it("ставит максимальную высоту столбику с буквой правильного ответа", () => {
		vi.spyOn(Math, "random").mockReturnValue(0);
		const bars = buildHallHintBars("C правильный вариант", [100, 80, 60, 40]);
		const topBar = bars.find((b) => b.letter === "C");
		expect(topBar?.height).toBe(100);
	});
});
