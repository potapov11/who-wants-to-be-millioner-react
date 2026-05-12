import React from 'react';
import { audioModel } from "@/model/audioModel";
import './Hint.scss';

function Hints({ hintFifty, fifty, changeModal, disabled, hideModalFriend, changeClass }) {
	return (
		<div className="hints">
			<button
				className={fifty ? 'hints__fifity' : 'hints__fifity disabled'}
				onClick={(e) => {
					hintFifty();
					audioModel.playFiftySound();
					changeClass(e.target);
				}}></button>

			<button
				className={!disabled ? 'hall-help' : 'hall-help disabled'}
				onClick={(e) => {
					changeModal();
					audioModel.playPollHintSound();
					changeClass(e.target);
				}}></button>

			<button
				className={!disabled ? 'friend-help' : 'friend-help disabled'}
				onClick={(e) => {
					hideModalFriend();
					audioModel.playFriendHintSound();
					changeClass(e.target);
				}}></button>
		</div>
	);
}

export default Hints;
