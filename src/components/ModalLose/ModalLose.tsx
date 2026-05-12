import styles from "./ModalLose.module.scss";

type ModalLoseProps = {
	/** Сброс партии без перезагрузки страницы (передаётся из `useQuizGame`). */
	onPlayAgain: () => void;
};

export default function ModalLose({ onPlayAgain }: ModalLoseProps) {
	return (
		<div className={styles.root}>
			<p className={styles.text}>
				Вы проиграли
				<br />
				но не расстраивайтесь
				<br />
				Это была достойная попытка
			</p>
			<p className={styles.text}>Вы хотите попробовать еще раз?</p>
			<button type="button" className={styles.button} onClick={onPlayAgain}>
				Играть еще раз
			</button>
		</div>
	);
}
