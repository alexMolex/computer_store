import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import ExtendedDevicePrice from "../devicePrice/ExtendedDevicePrice";
import OrderProcessing from "../../pages/orderProcessing/OrderProcessingContainer";

const ComputerCard = ({
	isAuth,
	device,
	role,
	is200Code,
	count,
	basketId,
	createBasketDevicesData,
	basketDevicesIds,
	isBasketDevicesLoading,
	getBasketDevicesData,
	createOrderProcessingData,
	setUpdateDevicePrice,
	setDeviceData,
}) => {


	const isBasketDeviceIdSame = (pc) => {
		return basketDevicesIds.some(id => id === pc)
	}


	const renderDescription = (text, limit) => {
		if (text.length <= limit) return text;
		text = text.slice(0, limit);
		return text + "...";
	}


	return (
		<div>
			<div className="books row mb-2 pt-4" >
				{count === 0 &&
					<h2>нет ничего
						<Link to={"/konfigurator"}> cобрать свою конфигурацию</Link>
					</h2>
				}
				{!is200Code ?
					<Spinner animation="border" /> :
					device.map(pc =>
						<div className="col-sm-4 col-lg-4 col-md-4 book-list border m-0 p-1 bg-white" key={pc.id}>
							<div className="thumbnail">
								<Link to={`/computers/${pc.id}`}>
									<img
										src={process.env.REACT_APP_API_URL + pc.computer_case.img}
										alt="pc"
										className="img-thumbnail pc-image"
									/>
								</ Link>
								<div className="caption">

									<ExtendedDevicePrice
										localProcessorPrice={pc.processor.price}
										localVideocardPrice={pc.videocard.price}
										localComputerCasePrice={pc.computer_case.price}
										ssd={pc.SSD}
										storageVolume={pc.storageVolume}
										ram={pc.RAM}
										overclocking={pc.overclocking}
										price={pc.price}
										totalPrice={pc.totalPrice}
										setUpdateDevicePrice={setUpdateDevicePrice}
										deviceId={pc.id}
										setDeviceData={setDeviceData}
										role={role}
									/>
									<h4>
										<Link style={{ color: '#128496' }} to={`/computers/${pc.id}`}>
											{pc.name}
										</Link>
									</h4>
									<p> {renderDescription("lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem loremlorem lorem lorem lorem", 80)}</p>
									<p className="item-button float-right">
										{!isAuth && !isBasketDevicesLoading ?
											<Link to="/login" className="btn btn-info">
												Заказать
											</Link> :
											<button
												disabled={isBasketDeviceIdSame(pc.id)}
												onClick={
													() => createBasketDevicesData(basketId, pc.id)
														.then(() => getBasketDevicesData(basketId))
												}
												className="btn btn-info"
											>
												{(isBasketDeviceIdSame(pc.id)) ? "В корзине" : "Заказать"}
											</button>}
										<Link
											className="btn btn-default"
											to={`/computers/${pc.id}`}
										>
											More info
										</Link>
									</p>
									{!isAuth && <OrderProcessing
										basketId={basketId}
										createOrderProcessingData={createOrderProcessingData}
										price={pc.price}
										orderName={pc.computer_case.name}
										buttonName='Заказ без регистрации'
										processorId={pc.processor.id}
										videocardId={pc.videocard.id}
										overclocking={pc.overclocking}
										storageVolume={pc.storageVolume}
										ssd={pc.SSD}
										computerCaseId={pc.computer_case.id}
										RAM={pc.RAM}
										computerCase={pc.computer_case}
										videocard={pc.videocard}
										processor={pc.processor}
									/>}
								</div>
							</div>
						</div >
					)}
			</div>
		</div>
	);
}



export default ComputerCard;