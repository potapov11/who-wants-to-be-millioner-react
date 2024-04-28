import './Hint.css';
import { playFiftySound } from '../Audio/Audio';
import React, { useState } from 'react';

function Hints({ hintFifty, fifty, changeModal, disabled, hideModalFriend, changeClass }) {
	return (
		<div className="hints">
			<button
				className={fifty ? 'hints__fifity' : 'hints__fifity disabled'}
				onClick={(e) => {
					hintFifty();
					playFiftySound();
					changeClass(e.target);
				}}></button>

			<button
				className={!disabled ? 'hall-help' : 'hall-help disabled'}
				onClick={(e) => {
					changeModal();
					changeClass(e.target);
				}}></button>

			<button
				className={!disabled ? 'friend-help' : 'friend-help disabled'}
				onClick={(e) => {
					hideModalFriend();
					changeClass(e.target);
				}}></button>
		</div>
	);
}

export default Hints;
