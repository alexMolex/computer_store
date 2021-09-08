import React, { useEffect } from 'react';
import { Spinner, Image } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import Header from '../../components/header/HeaderContainer';




<<<<<<< HEAD
const OneUserConfigDevice = ({ getOneUserConfigDevice, userId, isOneUserConfigDeviceLoading, configDevice, location }) => {
=======
const OneUserConfigDevice = ({ getOneUserConfigDevice, isOneUserConfigDeviceLoading, configDevice }) => {
>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510

	const params = useParams()

	useEffect(() => {
<<<<<<< HEAD
		getOneUserConfigDevice(userId, params.id)
	}, [getOneUserConfigDevice, params.id, userId])
=======
		getOneUserConfigDevice(params.id)
	}, [getOneUserConfigDevice, params.id])
>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510


	return (
		<div className="view-container ">
			<Header />
			<div className="container mt-3">
<<<<<<< HEAD
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
=======
				<div className="row">
					<div className="col-md-9">
						{(!isOneUserConfigDeviceLoading) ? <Spinner animation="border" /> :
							<div className="thumbnail">
								<div className="row">
									<div className="col-md-6">
										<Link to="/">
											<button
												className="btn btn-info mt-2 mb-2"
											>
												<h4>Вернуться назад</h4>
											</button>
										</Link>

										<Image
											width={300}
											height={300}
											src={process.env.REACT_APP_API_URL + configDevice.computer_case.img}
											alt={configDevice.name}
											className="img-thumbnail"
										/>
									</div>
									<div className="col-md-6">
										Config
									</div>
								</div>
								<div className="caption-full">


								</div>
							</div>
						}
					</div>
				</div>
>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510
			</div>
		</div>
	);
};




export default OneUserConfigDevice;