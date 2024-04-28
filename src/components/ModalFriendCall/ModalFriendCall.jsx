import React, { useState, useEffect } from 'react';
import TypeIt from 'typeit-react';
import './ModalFriendCall.css';

function ModalFriendCall({ arrQuestions, numberQuestion, openModalFriend }) {
	const [showFriendHint, setShowFriendHint] = useState(false);

	useEffect(() => {
		if (openModalFriend) {
			setTimeout(() => {
				setShowFriendHint(true);
			}, 5000);
		} else {
			setShowFriendHint(false);
		}
	}, [openModalFriend]);

	return (
		openModalFriend && (
			<div className="modal">
				<div className="modal__inner">
					<TypeIt>Мой друг считает что правильный ответ это...</TypeIt>
					{showFriendHint && <div className="friend-hint">{arrQuestions[numberQuestion].correctAnswer}</div>}
				</div>
			</div>
		)
	);
}

export default ModalFriendCall;
