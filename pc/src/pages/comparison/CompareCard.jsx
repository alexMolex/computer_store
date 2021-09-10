import React from 'react';
import { Button } from 'react-bootstrap';



const CompareCard = ({
	compareDevicesQueue,
	removeDeviceFromCompareTurn,
	compareDeviceIndex1,
	compareDeviceIndex2,
	setCompareDeviceIndext1,
	setCompareDeviceIndext2,
}) => {

	// сделать функцию для 


	const handleIncrement = (index) => {
		if (index === compareDeviceIndex2 && compareDeviceIndex2 < (compareDevicesQueue.length - 1)) {
			setCompareDeviceIndext2(compareDeviceIndex2 + 1);
		}
		if (index === compareDeviceIndex1 && compareDeviceIndex1 < (compareDeviceIndex2 - 1)) {
			setCompareDeviceIndext1(compareDeviceIndex1 + 1);

		}
	}

	const handlDecrement = (index) => {
		if (index === compareDeviceIndex1 && (compareDeviceIndex1 > 0)) {
			setCompareDeviceIndext1(compareDeviceIndex1 - 1);
			console.log(compareDeviceIndex1);
		}
		if (index === compareDeviceIndex2 && compareDeviceIndex2 > (compareDeviceIndex1 + 1)) {
			setCompareDeviceIndext2(compareDeviceIndex2 - 1);
		}

	}


	return (
		<div className="products-slider">
			<span className="products-slider__list" >
				<div className="products-slider__item" style={{ width: "20%" }}>
					<h4 className="products-slider__product-name">Добавить</h4>
				</div>
				{compareDevicesQueue.length !== 0 &&
					compareDevicesQueue.map((pc, index) =>
					((compareDeviceIndex1 === index || compareDeviceIndex2 === index) &&
						<div className="products-slider__item " style={{ width: "20%" }} key={pc.id}>
							<div >
								<img
									src={process.env.REACT_APP_API_URL + pc.computer_case.img}
									alt="pc"
									className="img-thumbnail pc-image animation"
									max-width="100px"
									max-height="100px"
								/>

								<div className="caption">
									<div className="products-slider__product-name animation">{pc.name}</div>
									<h5 className="animation">{pc.totalPrice} РУБ</h5>
									<Button
										className="btn-info"
										onClick={() => handlDecrement(index)}
									>
										-
									</Button>
									{(index + 1)} из {compareDevicesQueue.length}
									<Button
										className="btn-info"
										onClick={() => handleIncrement(index)}
									>
										+
									</Button>
									<Button
										className="btn-danger"
										onClick={() => removeDeviceFromCompareTurn(pc)}
									>
										не сравнивать
									</Button>
								</div>
							</div>
						</div >
					)

					)}
			</span>
		</div>
	);
};

export default CompareCard;


