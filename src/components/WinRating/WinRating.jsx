import React, { useState, useContext, useEffect } from 'react';
import { globalContext } from '../../App';
import './WinRating.css';

function WinRating() {
	// const [isMobile, setIsMobile] = useState(false);
	const { numberQuestion, isMobile } = useContext(globalContext);
	const [styleTransform, setStyletransform] = useState(20);

	const numbers = [100, 200, 300, 400, 500, 1000, 2000, 5000, 10000, 25000, 50000, 100000, 250000, 500000, 1000000];
	const winArray = [];

	for (let i = 0; i < 15; i++) {
		winArray.push(<li key={i}>{numbers[i]}</li>);
	}

	useEffect(() => {
		setStyletransform((prevState) => prevState - 20);
	}, [numberQuestion]);

	console.log(isMobile);

	return (
		<div className="win-wrapper">
			<ul
				className="win-rating-list"
				style={{
					transform: isMobile ? `translateY(${styleTransform}px)` : 'none',
				}}>
				{winArray.map((winItem, index) => (
					<li key={index} className={index === numberQuestion ? 'bck-gold' : ''}>
						{winItem}
					</li>
				))}
			</ul>
		</div>
	);
}

export default WinRating;
