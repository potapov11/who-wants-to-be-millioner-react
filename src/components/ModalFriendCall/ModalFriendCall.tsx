import TypeIt from "typeit-react";
import styles from "./ModalFriendCall.module.scss";
import { useModalFriendCall } from "./useModalFriendCall";

type ModalFriendCallProps = {
	openModalFriend: boolean;
};

export default function ModalFriendCall({ openModalFriend }: ModalFriendCallProps) {
	const { showFriendHint, correctAnswer } = useModalFriendCall(openModalFriend);

	if (!openModalFriend) {
		return null;
	}

	return (
		<div className={styles.modal}>
			<div className={styles.modal_inner}>
				<TypeIt>Мой друг считает что правильный ответ это...</TypeIt>
				{showFriendHint && <div className={styles.friend_hint}>{correctAnswer}</div>}
			</div>
		</div>
	);
}
