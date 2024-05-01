import React, { useState, useEffect, useContext } from 'react';
import TypeIt from 'typeit-react';
import { globalContext } from '../../App';
import './ModalFriendCall.css';

function ModalFriendCall({ openModalFriend }) {
	const [showFriendHint, setShowFriendHint] = useState(false);
	const { arrQuestions, numberQuestion } = useContext(globalContext);

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
