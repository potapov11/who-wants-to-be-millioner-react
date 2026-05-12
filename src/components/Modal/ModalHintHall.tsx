import TypeIt from "typeit-react";
import styles from "./ModalHintHall.module.scss";
import { useModalHintHall } from "./useModalHintHall";

export const ModalHintHall = () => {
	const { resArr, showHallHint, openModal } = useModalHintHall();

	if (!openModal) {
		return null;
	}

	return (
		<div className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="hall-hint-title">
			<div className={styles.modal_inner}>
				<div className={styles.typewriter} id="hall-hint-title">
					<TypeIt options={{ waitUntilVisible: true }}>Зал считает, что правильный ответ...</TypeIt>
				</div>
				{showHallHint && (
					<div className={styles.hall_hint}>
						{resArr.map((resItem, index) => (
							<div className={styles.hall_hint_item} key={`${resItem.letter ?? "x"}-${index}-${resItem.height}`}>
								{resItem.letter}
								<div className={styles.hall_hint_inner} style={{ height: `${resItem.height}px` }} />
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};
