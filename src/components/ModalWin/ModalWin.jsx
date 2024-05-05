import React, { useState, useEffect, useRef } from 'react';
import './ModalWin.css';

function ModalWin() {
	return (
		<div className="modal-lose">
			<p className="intro-modal__text">
				Отличная игра
				<br />
				вы выиграли миллион!!!
			</p>
			<p className="intro-modal__text">Вы хотите попробовать еще раз?</p>
			<button className="button-continue" onClick={() => window.location.reload()}>
				Играть еще раз
			</button>
		</div>
	);
}

export default ModalWin;
