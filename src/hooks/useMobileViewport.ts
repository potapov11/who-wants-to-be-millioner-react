import { useEffect, useState } from "react";

/**
 * Однократная проверка ширины окна при монтировании (как в оригинальном App).
 */
export function useMobileViewport(maxWidthPx: number): boolean {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		if (typeof window !== "undefined" && window.innerWidth <= maxWidthPx) {
			setIsMobile(true);
		}
	}, [maxWidthPx]);

	return isMobile;
}
