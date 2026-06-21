import { useEffect, useState } from "react";

function matchesMobileViewport(maxWidthPx: number): boolean {
	if (typeof window === "undefined") {
		return false;
	}
	return window.matchMedia(`(max-width: ${maxWidthPx}px)`).matches;
}

export function useMobileViewport(maxWidthPx: number): boolean {
	const [isMobile, setIsMobile] = useState(() => matchesMobileViewport(maxWidthPx));

	useEffect(() => {
		const mediaQuery = window.matchMedia(`(max-width: ${maxWidthPx}px)`);
		const sync = () => setIsMobile(mediaQuery.matches);

		sync();
		mediaQuery.addEventListener("change", sync);
		return () => mediaQuery.removeEventListener("change", sync);
	}, [maxWidthPx]);

	return isMobile;
}
