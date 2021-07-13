import React from 'react';

import './counter.css'


const Counter = ({ counter, setCounter, step, min, max }) => {


	return (
		<div className="counter">
			<button className="counter-button-minus"
				onClick={() => {
					(counter <= min) ? setCounter(min) :
						setCounter(counter - step)
				}}>
				-
			</button>
			<span className="counter__value">
				{counter}
			</span>
			<button className="counter-button-plus"
				onClick={() => {
					(counter > max - 1) ? setCounter(max) :
						setCounter(counter + step)
				}}>
				+
			</button>
		</div >)

}

export default Counter

//  <input
// 	value={counter}
// 	type="number"
// 	min="4"
// 	max="128"
// 	className="count-buttons__input"
// 	onChange={e => {
// 		(e.target.value < min) ? setCounter(min) :
// 			(e.target.value > max) ? setCounter(max) :
// 				setCounter(+(e.target.value))
// 		}}
// 			/> 