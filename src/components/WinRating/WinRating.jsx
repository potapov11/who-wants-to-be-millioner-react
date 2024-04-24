import './WinRating.css';
import React from 'react';

function WinRating({ numberQuestion }) {
	const numbers = [100, 200, 300, 400, 500, 1000, 2000, 5000, 10000, 25000, 50000, 100000, 250000, 500000, 1000000];
	const winArray = [];

	console.log(numberQuestion);

	for (let i = 0; i < 15; i++) {
		winArray.push(<li key={i}>{numbers[i]}</li>);
	}

	return (
		<ul className="win-rating-list">
			{winArray.map((winItem, index) => {
				if (index === numberQuestion) {
					return (
						<li className="bck-gold" key={index}>
							{winItem}
						</li>
					);
				} else {
					return <li key={index}>{winItem}</li>;
				}
			})}
		</ul>
	);
}

export default WinRating;
