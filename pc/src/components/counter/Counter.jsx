import React, { useState } from 'react';

import './counter.css'


const Counter = () => {

	const [counter, setCounter] = useState(1)


	return (
		<div className="Counter">
			<button className="Counter__button_minus"
				onClick={() => setCounter(counter - 1)}>
				-
			</button>
			<input
				value={counter}
				type="number"
				className="count-buttons__input"
				onChange={e => setCounter(+(e.target.value))}
			/>

			<button className="Counter__button_plus"
				onClick={() => setCounter(counter + 1)}>
				+
			</button>
		</div>)

}

export default Counter