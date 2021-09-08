import React, { useEffect, useState } from 'react';
import { Spinner, Image, Dropdown } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import Header from '../../components/header/HeaderContainer';




const OneOrderPage = ({ getOneOrderProcessingData, updateOrderStatusData, isOneOrderDeviceLoading, order, statusList }) => {

	const params = useParams()
	const [updateStatus, setUpdateStatus] = useState('')

	useEffect(() => {
		getOneOrderProcessingData(params.id)

	}, [getOneOrderProcessingData, params.id])



	return (
		<div className="view-container ">
			<Header />
			<div className="container mt-3">
				{!order ? <h1>Такого заказа нет</h1> :
					<div className="row">
						<div className="col-md-12">
							{(!isOneOrderDeviceLoading) ? <Spinner animation="border" /> :
								<div className="thumbnail">
									<div className="row">
										<div className="col-md-4">
											<Link to="/adminPanel">
												<button
													className="btn btn-info mt-2 mb-2"
												>
													<h4>Вернуться назад</h4>
												</button>
											</Link>
											<Image
												width={400}
												height={400}
												src={process.env.REACT_APP_API_URL + order.order[0].computer_case.img}
												alt={order.name}
												className="img-thumbnail mt-2"
											/>
											<h3>Статус:</h3>
											<Dropdown className="mt-2">
												<Dropdown.Toggle>{updateStatus || "Выберите статус"}</Dropdown.Toggle>
												<Dropdown.Menu>
													{statusList.map(status =>
														<Dropdown.Item
															key={status}
															onClick={() => {
																setUpdateStatus(status)
															}}
														>{status}</Dropdown.Item>
													)}
												</Dropdown.Menu>
											</Dropdown>
											<button
												onClick={() => updateOrderStatusData(params.id, updateStatus)
													.then(() => getOneOrderProcessingData(params.id)
													)}
												className="btn pt-1 pb-0 mt-2 btn-outline-info"
											>
												<h6> Изменить статус </h6>
											</button>
										</div>
										<div className="col-md-4">
											<h2 className="mt-2">Заказ №{order.id} от {new Date(order.createdAt).toLocaleString()}</h2>
											<ul className="list-group mt-3">
												<li className="list-group-item"><h6>Заказчик: {order.userName}</h6></li>
												<li className="list-group-item"><h6>Адрес: {order.adress}</h6></li>
												<li className="list-group-item"><h6>Статус: {order.status}</h6></li>
												<li className="list-group-item"><h6>Цена: {order.price} Руб.</h6></li>
												<li className="list-group-item"><h6>Примечание к заказу: {(order.remark === "") && "нет"}</h6>  </li>
												<li className="list-group-item pt-1 pb-1">Контактные данные:
													<h5 className="mb-1">Номер телефона: {order.phoneNumber}</h5>
													{order.contacts[0].title && <p className="mb-1">Мессенджер: {order.contacts[0].title}</p>}
													{order.contacts[0].description && <p className="mb-1">Номер мессенджера: {order.contacts[0].description}</p>}
												</li>
											</ul>
										</div>

										<div className="col-md-4">
											{order.order.map(i => {
												return (
													<div
														key={i.id}
													>
														<h2 className="mt-2">Характеристики устройства №{i.id}</h2>
														<ul className="list-group mt-3">
															<li className="list-group-item" style={{ background: 'lightgray' }}>
																<h6>Процессор: {i.processor.name}</h6>
															</li>
															<li className="list-group-item" >
																<h6> Видеокарта: {i.videocard.name}</h6>
															</li >
															<li className="list-group-item" style={{ background: 'lightgray' }}>
																<h6> Корпус: {i.computer_case.name}</h6>
															</li>
															<li className="list-group-item">
																<h6>{i.RAM} ГБ OЗУ</h6>
															</li>
															<li className="list-group-item" style={{ background: 'lightgray' }}>
																{(i.SSD) ? <h6>SSD</h6> : <h6>HDD</h6>}
															</li>
															<li className="list-group-item">
																<h6>Накопитель: {i.storageVolume} ГБ</h6>
															</li>
															<li className="list-group-item" style={{ background: 'lightgray' }}>
																{(i.overclocking) ?
																	<h6>с разгоном</h6> :
																	<h6>без разгона</h6>
																}
															</li>


														</ul>
													</div>)
											})
											}
										</div>
									</div>
									<div className="caption-full">


									</div>
								</div>
							}
						</div>
					</div>}
			</div>
		</div>
	);
};




export default OneOrderPage;