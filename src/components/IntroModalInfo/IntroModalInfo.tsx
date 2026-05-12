import { useContext, useMemo, useRef, useState } from "react";
import { globalContext, type GlobalContextValue } from "@/context/GlobalContext";
import hints from "@/img/hints.png";
import imgArrow from "@/img/icon-play.png";
import introVideo from "@assets/video/millioner-intro.mp4";
import type { IntroModalInfoProps } from "./types";
import { useIntroRevealSequence } from "./useIntroRevealSequence";
import styles from "./IntroModalInfo.module.scss";

export default function IntroModalInfo({ changeOpenIntro }: IntroModalInfoProps) {
	const ctx = useContext(globalContext) as GlobalContextValue;
	const { isMobile } = ctx;

	const [isVideoPhase, setVideoPhase] = useState(false);

	const textHelloRef = useRef<HTMLParagraphElement>(null);
	const textSoundRef = useRef<HTMLParagraphElement>(null);
	const hintsBlockRef = useRef<HTMLDivElement>(null);
	const arrowBlockRef = useRef<HTMLDivElement>(null);
	const continueButtonRef = useRef<HTMLButtonElement>(null);

	const revealRefs = useMemo(
		() => [textHelloRef, textSoundRef, hintsBlockRef, arrowBlockRef, continueButtonRef] as const,
		[],
	);

	useIntroRevealSequence(isVideoPhase, revealRefs, styles.opacity_full);

	const videoBoxClass = isMobile ? styles.video_box_mobile : styles.video_box;
	const videoClassName = isMobile ? styles.video : undefined;

	return (
		<div className={styles.intro_wrapper}>
			<div className={styles.intro_modal}>
				{isVideoPhase ? (
					<div className={videoBoxClass}>
						<video className={videoClassName} src={introVideo} playsInline autoPlay />
						<button type="button" className={styles.button_continue} onClick={() => changeOpenIntro()}>
							Приступить к игре
						</button>
					</div>
				) : (
					<>
						<p className={`${styles.text_hello} ${styles.hide}`} ref={textHelloRef}>
							Здравствуйте
							<br />
							Вы попали на игру <br />
							Кто хочет стать миллионером
						</p>
						<p className={`${styles.text_sound} ${styles.hide}`} ref={textSoundRef}>
							Для комфортного процесса в игре <br />
							проверьте — включен ли звук в браузере
						</p>
						<div className={`${styles.hints} ${styles.hide}`} ref={hintsBlockRef}>
							<img src={hints} alt="" />
							<p className={styles.text}>Вы можете воспользоваться подсказками</p>
						</div>
						<div className={`${styles.arrow} ${styles.hide}`} ref={arrowBlockRef}>
							<img className={styles.img_arrow} src={imgArrow} alt="" />
							<p className={styles.text}>
								Нажатием на эту кнопку <br />
								включается фоновая музыка
							</p>
						</div>
						<button type="button" className={`${styles.button_continue} ${styles.hide}`} ref={continueButtonRef} onClick={() => setVideoPhase(true)}>
							Продолжить
						</button>
					</>
				)}
			</div>
		</div>
	);
}
