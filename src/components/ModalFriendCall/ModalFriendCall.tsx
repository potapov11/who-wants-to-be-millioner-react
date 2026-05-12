import type { MouseEvent } from "react";
import TypeIt from "typeit-react";
import styles from "./ModalFriendCall.module.scss";
import { useModalFriendCall } from "./useModalFriendCall";

type ModalFriendCallProps = {
	openModalFriend: boolean;
	onClose: () => void;
	onConfirmAnswer: (answer: string) => void;
};

export default function ModalFriendCall({ openModalFriend, onClose, onConfirmAnswer }: ModalFriendCallProps) {
	const { showFriendHint, correctAnswer } = useModalFriendCall(openModalFriend);

	if (!openModalFriend) {
		return null;
	}

	const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
		if (event.target === event.currentTarget) {
			onClose();
		}
	};

	const handleConfirm = () => {
		if (!correctAnswer) {
			return;
		}
		onConfirmAnswer(correctAnswer);
	};

	return (
		<div className={styles.modal} role="presentation" onClick={handleBackdropClick}>
			<div className={styles.modal_inner} role="dialog" aria-modal="true" aria-labelledby="friend-call-lead">
				<p id="friend-call-lead" className={styles.lead}>
					<TypeIt>Мой друг считает что правильный ответ это...</TypeIt>
				</p>
				{showFriendHint && (
					<div className={styles.hint_block}>
						<div className={styles.friend_hint}>{correctAnswer}</div>
						<div className={styles.actions}>
							<button type="button" className={styles.btn_primary} onClick={handleConfirm}>
								Ответить этим вариантом
							</button>
							<button type="button" className={styles.btn_secondary} onClick={onClose}>
								Закрыть
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
