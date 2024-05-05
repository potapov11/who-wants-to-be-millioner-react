import React, { useState, useEffect, useRef } from 'react';
import './ModalLose.css';

function ModalLose({ isModalWin }) {
	let isModalWinValue;
	if (isModalWin) {
		const { isModalWinInner } = isModalWin;
		isModalWinValue = isModalWinInner;
	}

	return (
		<div className="modal-lose">
			{!isModalWinValue ? (
				<>
					<p className="intro-modal__text">
						Вы проиграли
						<br />
						но не расстраивайтесь
						<br />
						Это была достойная попытка
					</p>
					<p className="intro-modal__text">Вы хотите попробовать еще раз?</p>
					<button className="button-continue" onClick={() => window.location.reload()}>
						Играть еще раз
					</button>
				</>
			) : (
				<>
					<p className="intro-modal__text">
						Отличная игра
						<br />
						вы выиграли миллион!!!
					</p>
					<p className="intro-modal__text">Вы хотите попробовать еще раз?</p>
					<button className="button-continue" onClick={() => window.location.reload()}>
						Играть еще раз
					</button>
				</>
			)}
		</div>
	);
}

export default ModalLose;
