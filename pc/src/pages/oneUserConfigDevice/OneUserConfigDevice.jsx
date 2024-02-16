import React, { useEffect } from 'react';
import { Spinner, Image } from 'react-bootstrap';
import { Link, useParams, useLocation } from 'react-router-dom';
import Header from '../../components/header/HeaderContainer';


const OneUserConfigDevice = ({ getOneUserConfigDevice, userId, isOneUserConfigDeviceLoading, configDevice }) => {

	const params = useParams()
	const location = useLocation()
	useEffect(() => {
		getOneUserConfigDevice(userId, params.id)
	}, [getOneUserConfigDevice, params.id, userId])


	return (
		<div className="view-container ">
			<Header />
			<div className="container mt-3">
				{(isOneUserConfigDeviceLoading && !configDevice) ? <h2>Такого конфига нет</h2> :
					<div className="row">
						<div className="col-md-12">
							{(!isOneUserConfigDeviceLoading) ? <Spinner animation="border" /> :
								<div className="thumbnail">
									<div className="row">
										<div className="col-md-6">
											<Link to={`/${location.state.page}`}>
												<button
													className="btn btn-info mt-2 mb-2"
												>
													<h4>Вернуться назад</h4>
												</button>
											</Link>

											<Image
												width={400}
												height={400}
												src={process.env.REACT_APP_API_URL + configDevice.computer_case.img}
												alt={configDevice.name}
												className="img-thumbnail"
											/>
										</div>
										<div className="col-md-6">
											<h3 className="mt-2">Конфиг №{configDevice.id} от {new Date(configDevice.createdAt).toLocaleString()}</h3>
											<ul className="list-group mt-3">
												<li className="list-group-item" style={{ background: 'lightgray' }}>
													<h6>Процессор: {configDevice.processor.name}</h6>
												</li>
												<li className="list-group-item" >
													<h6> Видеокарта: {configDevice.videocard.name}</h6>
												</li >
												<li className="list-group-item" style={{ background: 'lightgray' }}>
													<h6> Корпус: {configDevice.computer_case.name}</h6>
												</li>
												<li className="list-group-item">
													<h6>{configDevice.RAM} ГБ OЗУ</h6>
												</li>
												<li className="list-group-item" style={{ background: 'lightgray' }}>
													{(configDevice.SSD) ? <h6>SSD</h6> : <h6>HDD</h6>}
												</li>
												<li className="list-group-item">
													<h6>Накопитель: {configDevice.storageVolume} ГБ</h6>
												</li>
												<li className="list-group-item" style={{ background: 'lightgray' }}>
													{(configDevice.overclocking) ?
														<h6>с разгоном</h6> :
														<h6>без разгона</h6>
													}
												</li>


											</ul>
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




export default OneUserConfigDevice;