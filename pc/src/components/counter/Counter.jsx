import React from 'react';

import './counter.css'


const Counter = ({ counter, setCounter, step, min, max }) => {

	return (
		<div className="counter">
			<button className="counter-button-minus"
				onClick={(event) => {
					event.preventDefault();
					(counter <= min) ? setCounter(min) :
						setCounter(counter - step)
				}}>
				-
			</button>
			<span className="counter__value">
				{counter}
			</span>
			<button className="counter-button-plus"
				onClick={(event) => {
					event.preventDefault();
					(counter > max - 1) ? setCounter(max) :
						setCounter(counter + step)
				}}>
				+
			</button>
		</div >)

}

export default Counter
