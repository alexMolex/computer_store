import React from 'react';
import "./skeleton.css"


const ComputerCardSkeleton = ({ }) => {

	const skeletonCard = (key) => {
		return (
			<div key={key} className="card">
				<div className="img"></div>
				<div className="details">
					<span className="price"></span>
					<span className="name"></span>
					<span className="text"></span>
					<span className="text"></span>
					<span className="text "></span>
				</div>
				<div className="btns">
					<div className="btn btn-1"></div>
					<div className="btn btn-2"></div>
				</div>
			</div>
		)
	}

	return (
		<>
			{[1, 2, 3, 4, 5, 6].map((key) => (
				skeletonCard(key)
			))}
		</>
	);
}

export default ComputerCardSkeleton;