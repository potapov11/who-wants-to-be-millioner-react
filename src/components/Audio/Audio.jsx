import correctAnswerAudio from '../../assets/audio/correctAudio.mp3';
import fiftyAudio from '../../assets/audio/auido-50-50.mp3';
import pollHintAudio from '../../assets/audio/audio-pollhelp.mp3';
import friendHintAudio from '../../assets/audio/audio-callFriend.mp3';
import backMusic from '../../assets/audio/backgmusic.mp3';
const audio = new Audio(correctAnswerAudio);
const fiftySound = new Audio(fiftyAudio);
const pollHintSound = new Audio(pollHintAudio);
const friendHintSound = new Audio(friendHintAudio);
const backGroundMusic = new Audio(backMusic);

const playSound = () => {
	audio.play();
};

const playFiftySound = () => {
	fiftySound.play();
};

const playPollHintSound = () => {
	pollHintSound.play();
};
const stopPlayPollHintSound = () => {
	pollHintSound.currentTime = 0;
	pollHintSound.pause();
};

const playFriendHintSound = () => {
	friendHintSound.play();
};
const stopPlayFriendHintSound = () => {
	friendHintSound.currentTime = 0;
	friendHintSound.pause();
};

const playBackGroundMusic = () => {
	backGroundMusic.play();
};
const stopPlayBackGroundMusic = () => {
	backGroundMusic.currentTime = 0;
	backGroundMusic.pause();
};

export { playFiftySound, playSound, playPollHintSound, playFriendHintSound, stopPlayPollHintSound, stopPlayFriendHintSound, playBackGroundMusic, stopPlayBackGroundMusic };
