import styles from "./WinRating.module.scss";
import { useWinRating } from "./useWinRating";

function formatAmount(amount: number): string {
	return amount.toLocaleString("ru-RU");
}

export default function WinRating() {
	const { amounts, numberQuestion, isMobile } = useWinRating();

	const currentAmount = amounts[numberQuestion] ?? amounts[0];
	const stepLabel = `Вопрос ${numberQuestion + 1} из ${amounts.length}`;

	if (isMobile) {
		return (
			<div className={styles.wrapper_mobile}>
				<p className={styles.mobile_step}>{stepLabel}</p>
				<p className={styles.mobile_label}>На кону</p>
				<p className={styles.mobile_value} aria-live="polite">
					{formatAmount(currentAmount)}
				</p>
			</div>
		);
	}

	return (
		<div className={styles.wrapper}>
			<ul className={styles.list}>
				{amounts.map((amount, index) => {
					const passed = index < numberQuestion;
					const active = index === numberQuestion;
					const upcoming = index > numberQuestion;
					return (
						<li
							key={amount}
							className={`${styles.item} ${passed ? styles.item_passed : ""} ${active ? styles.item_active : ""} ${upcoming ? styles.item_upcoming : ""}`}
						>
							<span className={styles.item_amount}>{formatAmount(amount)}</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
