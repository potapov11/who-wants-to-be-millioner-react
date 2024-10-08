import React, { useState, useRef, useEffect, useContext } from 'react';
import { globalContext } from '../../App';

import './IntroModalInfo.css';
import hints from '../../img/hints.png';
import imgArrow from '../../img/icon-play.png';
import introVideo from '../../assets/video/millioner-intro.mp4';

function IntroModalInfo({ changeOpenIntro }) {
	const { isMobile } = useContext(globalContext);
	const [isVideo, setVideo] = useState(false);

	const TEXT_HELLO_REF = useRef(null);
	const TEXT_SOUND_REF = useRef(null);
	const HINTS_TEXT_REF = useRef(null);
	const ARROW_TEXT_REF = useRef(null);
	const BUTTON_CONTINUE_REF = useRef(null);

	let index = 0;
	const refs = [TEXT_HELLO_REF, TEXT_SOUND_REF, HINTS_TEXT_REF, ARROW_TEXT_REF, BUTTON_CONTINUE_REF];

	function showContent() {
		if (index < refs.length) {
			console.log(index);
			refs[index].current.classList.add('opacity-full');
			index++;
		} else {
			index = 0;
		}
	}

	function setSessionStorage() {
		sessionStorage.setItem('intro', false);
	}

	let showContentInterval;

	useEffect(() => {
		showContentInterval = setInterval(showContent, 1500);
		return () => clearInterval(showContentInterval);
	}, [showContent]);

	useEffect(() => {
		if (isVideo) {
			clearInterval(showContentInterval);
		}
	}, [isVideo, showContentInterval]);

	return (
		<div className="intro-wrapper">
			<div className="intro-modal">
				{isVideo ? (
					<div className={isMobile ? 'video-box--mobile' : 'video-box'}>
						<video className={isMobile ? 'video' : null} src={introVideo} type="video/mp4" autoPlay></video>
						<button className="button-continue" onClick={() => changeOpenIntro(true)}>
							Приступить к игре
						</button>
					</div>
				) : (
					<>
						<p className="intro-modal__text intro-modal__text--hello hide" ref={TEXT_HELLO_REF}>
							Здравствуйте
							<br />
							Вы попали на игру <br />
							Кто хочет стать миллионером
						</p>
						<p className="intro-modal__text intro-modal__text--sound hide" ref={TEXT_SOUND_REF}>
							Для комфортного процесса в игре <br />
							проверьте - включен ли звук в браузере
						</p>
						<div className="intro-modal__hints hide" ref={HINTS_TEXT_REF}>
							<img src={hints} alt="hints" />
							<p className="intro-modal__text">Вы можете воспользоваться подсказками</p>
						</div>
						<div className="intro-arrow hide" ref={ARROW_TEXT_REF}>
							<img className="img-arrow" src={imgArrow} alt="hints" />
							<p className="intro-modal__text">
								Нажатием на эту кнопку <br />
								включается фоновая музыка
							</p>
						</div>
						<button className="button-continue hide" onClick={() => setVideo(true)} ref={BUTTON_CONTINUE_REF}>
							Продолжить
						</button>
					</>
				)}
			</div>
		</div>
	);
}

export default IntroModalInfo;
