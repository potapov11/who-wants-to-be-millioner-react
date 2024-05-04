import React, { useState, useRef } from 'react';
import './IntroModalInfo.css';
import hints from '../../img/hints.png';

function IntroModalInfo() {
	const textHelloRef = useRef(null);
	const textSoundRef = useRef(null);
	const hintsBlockRef = useRef(null);

	let index = 0;
	const refs = [textHelloRef, textSoundRef, hintsBlockRef];

	function showContent() {
		if (index < refs.length) {
			refs[index].current.classList.add('opacity-full');
			index++;
			setTimeout(showContent, 2000);
		} else {
			index = 0;
		}
	}

	setTimeout(showContent, 2000);

	return (
		<div className="intro-wrapper">
			<div className="intro-modal">
				<p className="intro-modal__text intro-modal__text--hello hide" ref={textHelloRef}>
					Здравствуйте
					<br />
					Вы попали на игру <br />
					Кто хочет стать миллионером
				</p>
				<p className="intro-modal__text intro-modal__text--sound hide" ref={textSoundRef}>
					Для комфортного процесса в игре <br />
					проверьте - включен ли звук в браузере
				</p>
				<div className="intro-modal__hints hide" ref={hintsBlockRef}>
					<img src={hints} alt="hints" />
					<p className="intro-modal__text">Вы можете воспользоваться подсказками</p>
				</div>
			</div>
		</div>
	);
}

export default IntroModalInfo;
