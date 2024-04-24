import correctAnswerAudio from '../../assets/audio/correctAudio.mp3';
import fiftyAudio from '../../assets/audio/auido-50-50.mp3';
const audio = new Audio(correctAnswerAudio);
const fiftySound = new Audio(fiftyAudio);

const playSound = () => {
	audio.play();
};

const playFiftySound = () => {
	fiftySound.play();
};

export { playFiftySound, playSound };
