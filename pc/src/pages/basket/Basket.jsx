import React, { useEffect, useState } from 'react';
import Header from '../../components/header/HeaderContainer';
import { Image, Row } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './basket.css'

const Basket = ({
	basketReducerData,
	basketDevices,
	basketDevicesIds,
	isBasketLoading,
	deleteBasketDevicesData,
	getBasketDevicesData,
	setDeviceData,
	is200Code,
	basketId
}) => {

	useEffect(() => {
		getBasketDevicesData(basketId)
	}, [getBasketDevicesData])

	const [counter, setCounter] = useState(1)

	const isBasketEmpty = () => {
		if (basketDevicesIds.length === 0) {
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
							{(!isBasketLoading) ?
								<Spinner animation="border" /> :
								isBasketEmpty() ?
									<h1>Корзина пуста</h1> :
									basketReducerData.map((data) => {
										return (
											<div className="thumbnail mt-4 shadow p-1 mb-1 bg-white rounded"
												key={data.device.id}
											>
												<div className="row">
													<div className="col-md-6">
														<Link to={`/computers/${data.device.id}`}>
															<Image
																width={300}
																height={300}
																src={process.env.REACT_APP_API_URL + data.device.img}
																alt={data.device.name}
																className="img-thumbnail"
															/>
														</Link>

													</div>
													<div className="col-md-6">
														<Row className="d-flex flex-column m-3">
															<h4>
																<Link style={{ color: '#128496' }} to={`/computers/${data.device.id}`}>
																	{data.device.name}
																</Link></h4>
															<p>Сборка займет 1-3 дня</p>
															<button
																className="btn btn-info"
															>
																<h2>Заказать</h2>
															</button>
															<div className="caption-full mt-5">
																<h4 className="float-right">Руб. {data.device.price}</h4>

																{/* <div className="Counter">
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
																</div> */}
																<button
																	onClick={() =>
																		deleteBasketDevicesData(data.id)
																			.then(() =>
																				getBasketDevicesData(data.basketId))
																	}
																	style={{ color: '#128496' }}
																	className="btn pt-0 pb-0 mr-2 float-right"
																>
																	<h4> удалить </h4>
																</button>

															</div>
														</Row>
													</div>
												</div>

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


// <button
// onClick={() =>
// deleteBasketDevicesData(basketDevice.id)
// 	.then(() =>
// getBasketDevicesData(basketDevice.basketId))
// }
// className="btn btn-info"
// >
// <h1> {device.name} удалить </h1>
// </button>

// basketDevices.data.map(basketDevice => {
// 	return (
// 		<div
// 			key={basketDevice.id}
// 		>
// 			{device.map(device => (
// 				<div
// 					key={device.name}
// 				>
// 					{(basketDevice.deviceId === device.id) &&
// 						<div className="thumbnail mt-4">
// 							<div className="row">
// 								<div className="col-md-6">
// 									<Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img} alt={device.name} className="img-thumbnail" />
// 								</div>
// 								{/* <div className="col-md-6">
// 		<Row className="d-flex flex-column m-3">
// 			<h1>Характеристики</h1>
// 			{"описание" && device.info.map((info, index) =>
// 				<Row key={info.id} style={{ background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10 }}>
// 					{info.title}: {info.description}
// 				</Row>
// 			)}
// 		</Row>
// 	</div> */}
// 							</div>
// 							<div className="caption-full">
// 								<h4 className="float-right">Руб. {device.price}</h4>
// 								<h4>{device.name}</h4>
// 								<p>{device.description}</p>
// 							</div>
// 						</div>
// 					}
// 				</div>
// 			))}
// 		</div>
// 	)
// })