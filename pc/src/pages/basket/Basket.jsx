import React, { useEffect, useState } from 'react';
import Header from '../../components/header/HeaderContainer';
import { Image, Row, Spinner } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';


import OrderProcessing from "../orderProcessing/OrderProcessing";
import './basket.css'

const Basket = ({
	basketReducerData,
	basketDevicesIds,
	isBasketLoading,
	deleteBasketDevicesData,
	getBasketDevicesData,
	getOrderProcessingData,
	getUserOrdersProcessingData,
	createOrderProcessingData,
	basketId,
	isAuth
}) => {



	useEffect(() => {
		getBasketDevicesData(basketId)
		getUserOrdersProcessingData(basketId)
		getOrderProcessingData()
	}, [
		getBasketDevicesData,
		basketId,
		getUserOrdersProcessingData,
		getOrderProcessingData
	])


	const totalPrice = basketReducerData.reduce((total, price) => {
		return Number(total) + price.device.price
	}, [0])



	const isBasketEmpty = () => {
		if (basketDevicesIds.length === 0) {
			return true
		}
	}


	// if (!isAuth) return <Redirect to={'/login'} />

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

															<div className="caption-full mt-5">
																<OrderProcessing
																	basketId={basketId}
																	createOrderProcessingData={createOrderProcessingData}
																	price={data.device.price}
																	orderName={data.device.name}
																	buttonName='сделать заказ'
																	processorId={data.device.processorId}
																	videocardId={data.device.videocardId}
																/>
																<h4 className="float-right">Руб. {data.device.price}</h4>

																{/* <div className="">
																	<button className=""
																		onClick={() => setCounter(counter - 1)}>
																		-
																	</button>
																	<input
																		value={counter}
																		type="number"
																		className="count-buttons__input"
																		onChange={e => setCounter(+(e.target.value))}
																	/>

																	<button className=""
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
						<div className="col-md-3">
							<h1>{totalPrice} Руб.</h1>
							<hr />
							<OrderProcessing
								buttonName='Заказать все'

							/>
						</div>

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