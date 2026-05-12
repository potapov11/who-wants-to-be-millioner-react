/** Fisher–Yates: возвращает новый массив в случайном порядке (исходный не мутируется). */
export function shuffleCopy<T>(items: readonly T[]): T[] {
	const array = [...items];
	let m = array.length;
	while (m > 0) {
		const i = Math.floor(Math.random() * m);
		m -= 1;
		const t = array[m];
		array[m] = array[i]!;
		array[i] = t!;
	}
	return array;
}
