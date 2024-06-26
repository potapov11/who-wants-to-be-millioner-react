import React, { useContext } from 'react';
import TypeIt from 'typeit-react';
import { globalContext } from '../../App';
import './ModalHintHall.css';

function ModalHintHall() {
	const { arrQuestions, numberQuestion, openModal } = useContext(globalContext);

	const rightAnswer = arrQuestions[numberQuestion].correctAnswer;
	const min = 50;
	const max = 150;

	const random = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	function createAndReturnValues() {
		let arrayHallHint = [];

		for (let i = 0; i < 4; i++) {
			arrayHallHint.push(random(50, 150));
		}

		arrayHallHint = arrayHallHint.sort((a, b) => b - a);

		return arrayHallHint;
	}

	let resultHeightArray = createAndReturnValues();
	const letterArray = ['A', 'B', 'C', 'D'];
	const firstLetter = rightAnswer[0];

	function createResultArr() {
		let resArr = [];

		letterArray.map((letItem, letIndex) => {
			if (letItem === firstLetter) {
				let resObj = {
					height: resultHeightArray[0],
					letter: firstLetter,
				};
				resArr.push(resObj);
			} else {
				let resObj = {
					height: random(20, resultHeightArray[0]),
					letter: letItem !== firstLetter ? letItem : null,
				};
				resArr.push(resObj);
			}
		});

		return resArr;
	}

	let resArr = createResultArr();
	const [showHallHint, setShowHallHint] = React.useState(false);

	React.useEffect(() => {
		if (openModal) {
			console.log(openModal, '...openModal if');
			setTimeout(() => {
				setShowHallHint(true);
			}, 3000);
		} else {
			console.log(openModal, '...openModal else');

			setShowHallHint(false);
		}
	}, [openModal]);

	return openModal ? (
		<div className="modal">
			<div className="modal__inner">
				<TypeIt>Зал считает, что правильный ответ...</TypeIt>
				{showHallHint && (
					<div className="hall-hint">
						{resArr.map((resItem) => {
							return (
								<div className="hall-hint__item" key={new Date().getDate}>
									{resItem.letter}
									<div
										className="hall-hint__inner"
										style={{
											transition: 'height 2s ease',
											height: `${resItem.height}px`,
										}}></div>
								</div>
							);
						})}
					</div>
				)}
			</div>
		</div>
	) : null;
}

export default ModalHintHall;
