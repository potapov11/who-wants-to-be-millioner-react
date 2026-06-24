import { useContext, useEffect, useState } from 'react';
import { globalContext, type GlobalContextValue } from '@/context/GlobalContext';
import hints from '@/img/hints.png';
import introVideo from '@assets/video/millioner-intro.mp4';
import type { IntroModalInfoProps } from './types';
import styles from './IntroModalInfo.module.scss';

/** Автопереход для шагов 0–3; шаг 4 — только «Продолжить». */
const LAST_AUTO_STEP_INDEX = 3;
const STEP_ADVANCE_MS = 2400;

export default function IntroModalInfo({ changeOpenIntro }: IntroModalInfoProps) {
	const ctx = useContext(globalContext) as GlobalContextValue;
	console.log(ctx, 'ctx');

	const { isMobile } = ctx;

	const [isVideoPhase, setVideoPhase] = useState(false);
	const [step, setStep] = useState(0);

	useEffect(() => {
		if (isVideoPhase || step > LAST_AUTO_STEP_INDEX) {
			return;
		}
		const id = window.setTimeout(() => {
			setStep((s) => s + 1);
		}, STEP_ADVANCE_MS);
		return () => window.clearTimeout(id);
	}, [isVideoPhase, step]);

	const videoBoxClass = isMobile ? styles.video_box_mobile : styles.video_box;
	const videoClassName = isMobile ? styles.video : undefined;

	return (
		<div className={styles.intro_wrapper}>
			<div className={styles.intro_modal}>
				{isVideoPhase ? (
					<div className={videoBoxClass}>
						<video className={videoClassName} src={introVideo} playsInline autoPlay />
						<button type="button" className={styles.button_continue_video} onClick={() => changeOpenIntro()}>
							Приступить к игре
						</button>
					</div>
				) : (
					<div className={styles.intro_stage} key={step}>
						{step === 0 && (
							<p className={styles.text_hello}>
								Здравствуйте
								<br />
								Вы попали на игру <br />
								Кто хочет стать миллионером
							</p>
						)}
						{step === 1 && (
							<p className={styles.text_sound}>
								Для комфортного процесса в игре <br />
								проверьте — включен ли звук в браузере
							</p>
						)}
						{step === 2 && (
							<div className={styles.hints}>
								<img src={hints} alt="" className={styles.hints_img} />
								<p className={styles.text}>Вы можете воспользоваться подсказками</p>
							</div>
						)}
						{step === 3 && (
							<div className={styles.arrow}>
								<div className={styles.music_button_preview} aria-hidden="true" />
								<p className={styles.text}>
									Нажатием на эту кнопку <br />
									включается фоновая музыка
								</p>
							</div>
						)}
						{step === 4 && (
							<button type="button" className={styles.button_continue} onClick={() => setVideoPhase(true)}>
								Продолжить
							</button>
						)}
					</div>
				)}
			</div>
		</div>
	);
}
