import styles from "./WinRating.module.scss";
import { useWinRating } from "./useWinRating";

export default function WinRating() {
	const { amounts, numberQuestion, isMobile, translateY } = useWinRating();

	return (
		<div className={styles.wrapper}>
			<ul
				className={styles.list}
				style={{
					transform: isMobile ? `translateY(${translateY}px)` : "none",
				}}
			>
				{amounts.map((amount, index) => (
					<li key={amount} className={index === numberQuestion ? styles.item_active : undefined}>
						{amount}
					</li>
				))}
			</ul>
		</div>
	);
}
