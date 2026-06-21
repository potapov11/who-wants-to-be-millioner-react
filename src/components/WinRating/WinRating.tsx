import type { CSSProperties } from "react";
import styles from "./WinRating.module.scss";
import { useWinRating } from "./useWinRating";

function formatAmount(amount: number): string {
	return amount.toLocaleString("ru-RU");
}

const MOBILE_ROW_HEIGHT_PX = 28;
const MOBILE_ROW_GAP_PX = 4;
const MOBILE_VISIBLE_ROWS = 5;

function getItemClassName(
	index: number,
	numberQuestion: number,
	baseClass: string,
	stylesMap: typeof styles,
): string {
	const passed = index < numberQuestion;
	const active = index === numberQuestion;
	const upcoming = index > numberQuestion;

	return [
		baseClass,
		passed ? stylesMap.item_passed : "",
		active ? stylesMap.item_active : "",
		upcoming ? stylesMap.item_upcoming : "",
	]
		.filter(Boolean)
		.join(" ");
}

export default function WinRating() {
	const { amounts, numberQuestion, isMobile } = useWinRating();

	const rowStep = MOBILE_ROW_HEIGHT_PX + MOBILE_ROW_GAP_PX;
	const viewportHeight = MOBILE_VISIBLE_ROWS * MOBILE_ROW_HEIGHT_PX + (MOBILE_VISIBLE_ROWS - 1) * MOBILE_ROW_GAP_PX;
	const activeReversedIndex = amounts.length - 1 - numberQuestion;
	const scrollOffset = activeReversedIndex * rowStep;

	if (isMobile) {
		const reversedAmounts = [...amounts].reverse();

		return (
			<div className={styles.wrapper_mobile}>
				<div
					className={styles.mobile_viewport}
					style={
						{
							"--mobile-viewport-height": `${viewportHeight}px`,
							"--mobile-row-height": `${MOBILE_ROW_HEIGHT_PX}px`,
							"--mobile-row-gap": `${MOBILE_ROW_GAP_PX}px`,
						} as CSSProperties
					}
				>
					<ul
						className={styles.mobile_list}
						style={{ "--scroll-offset": `${scrollOffset}px` } as CSSProperties}
						aria-label="Шкала выигрыша"
					>
						{reversedAmounts.map((amount, reversedIndex) => {
							const index = amounts.length - 1 - reversedIndex;
							return (
								<li
									key={amount}
									className={getItemClassName(index, numberQuestion, styles.mobile_item, styles)}
									aria-current={index === numberQuestion ? "step" : undefined}
								>
									<span className={styles.item_amount}>{formatAmount(amount)}</span>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		);
	}

	return (
		<div className={styles.wrapper}>
			<ul className={styles.list}>
				{amounts.map((amount, index) => (
					<li
						key={amount}
						className={getItemClassName(index, numberQuestion, styles.item, styles)}
					>
						<span className={styles.item_amount}>{formatAmount(amount)}</span>
					</li>
				))}
			</ul>
		</div>
	);
}
