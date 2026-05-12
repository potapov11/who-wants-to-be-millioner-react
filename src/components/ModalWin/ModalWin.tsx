import styles from "./ModalWin.module.scss";

type ModalWinProps = {
	/** Сброс партии без перезагрузки страницы (передаётся из `useQuizGame`). */
	onPlayAgain: () => void;
};

export default function ModalWin({ onPlayAgain }: ModalWinProps) {
	return (
		<div className={styles.root}>
			<p className={styles.text}>
				Отличная игра
				<br />
				вы выиграли миллион!!!
			</p>
			<p className={styles.text}>Вы хотите попробовать еще раз?</p>
			<button type="button" className={styles.button} onClick={onPlayAgain}>
				Играть еще раз
			</button>
		</div>
	);
}
