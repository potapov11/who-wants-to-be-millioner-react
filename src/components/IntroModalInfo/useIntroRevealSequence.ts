import { useCallback, useEffect, useRef } from "react";
import type { RefObject } from "react";

const REVEAL_INTERVAL_MS = 1500;

/**
 * По очереди добавляет класс показа (`revealClassName`) элементам из `refs`, пока не включён видеорежим.
 */
export function useIntroRevealSequence(
	isVideoPhase: boolean,
	refs: ReadonlyArray<RefObject<HTMLElement | null>>,
	revealClassName: string,
) {
	const stepRef = useRef(0);
	const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

	const revealNext = useCallback(() => {
		if (stepRef.current >= refs.length) {
			stepRef.current = 0;
			return;
		}
		const node = refs[stepRef.current]?.current;
		node?.classList.add(revealClassName);
		stepRef.current += 1;
	}, [refs, revealClassName]);

	useEffect(() => {
		if (isVideoPhase) {
			if (intervalRef.current !== null) {
				clearInterval(intervalRef.current);
				intervalRef.current = null;
			}
			return;
		}

		intervalRef.current = setInterval(revealNext, REVEAL_INTERVAL_MS);
		return () => {
			if (intervalRef.current !== null) {
				clearInterval(intervalRef.current);
				intervalRef.current = null;
			}
		};
	}, [isVideoPhase, revealNext]);
}
