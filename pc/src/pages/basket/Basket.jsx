import React, { useEffect } from 'react';
import Header from '../../components/header/HeaderContainer'


const Basket = ({
	basketDevices,
	isBasketLoading,
	deleteBasketDevicesData,
	getBasketDevicesData,
	device,
	setDeviceData,
	is200Code
}) => {

	useEffect(() => {
		setDeviceData()
	}, [setDeviceData])

	const isBasketEmpty = () => {
		if (basketDevices.data.length === 0) {
			return true
		}
	}


	return (
		<div >
			<Header />
			<div className="view-container">
				<div className="container">
					<div className="row">
						<div className="col-md-9">
							{(!is200Code) || (!isBasketLoading) || isBasketEmpty() ?
								<h2>Корзина пуста</h2> :
								basketDevices.data.map(basketDevice => {
									return (
										<div
											key={basketDevice.id}
										>
											{device.map(device => (
												<div
													key={device.name}
												>
													{(basketDevice.deviceId === device.id) &&
														<div
															className="flex-column mb-2 mt-2"
														>
															<button
																onClick={() =>
																	deleteBasketDevicesData(basketDevice.id)
																		.then(() =>
																			getBasketDevicesData(basketDevice.basketId))
																}
																className="btn btn-info"
															>
																<h1> {device.name} удалить </h1>
															</button>
															<h1>{typeof (device.price)}</h1>
														</div>
													}
												</div>
											))}
										</div>
									)
								})
							}
						</div>
						<div className="col-md-3"> Cайдбар </div>

					</div>
				</div>
			</div>
		</div>
	);
};

export default Basket;