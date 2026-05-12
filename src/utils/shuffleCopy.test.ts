import { describe, expect, it, vi } from "vitest";
import { shuffleCopy } from "./shuffleCopy";

describe("shuffleCopy", () => {
	it("не мутирует исходный массив", () => {
		const input = [1, 2, 3, 4];
		shuffleCopy(input);
		expect(input).toEqual([1, 2, 3, 4]);
	});

	it("сохраняет длину и мультимножество элементов", () => {
		vi.spyOn(Math, "random").mockReturnValue(0.42);
		const input = ["a", "b", "c"];
		const out = shuffleCopy(input);
		expect(out).toHaveLength(3);
		expect([...out].sort()).toEqual(["a", "b", "c"]);
		vi.restoreAllMocks();
	});
});
