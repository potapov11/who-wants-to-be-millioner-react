import './Hint.css';
import { playFiftySound } from '../Audio/Audio';

function Hints({ hintFifty, fifty }) {
	return (
		<div className="hints">
			<button
				className={fifty ? 'hints__fifity' : 'hints__fifity disabled'}
				onClick={() => {
					hintFifty();
					playFiftySound();
				}}>
				50 на 50
			</button>
		</div>
	);
}

export default Hints;
