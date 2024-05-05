import React, { useState } from 'react';
import { playBackGroundMusic, stopPlayBackGroundMusic } from '../Audio/Audio';
import './ArrowMusic.css';

function ArrowMusic() {
	const [bckgMusic, setBckgMusik] = useState(false);

	function changeBckgMusic() {
		setBckgMusik(!bckgMusic);
	}

	!bckgMusic ? stopPlayBackGroundMusic() : playBackGroundMusic();

	return (
		<div>
			{bckgMusic ? <span className="arrow-music arrow-music-stop" onClick={() => changeBckgMusic()}></span> : <span className="arrow-music arrow-music-play" onClick={() => changeBckgMusic()}></span>}
		</div>
	);
}

export default ArrowMusic;
