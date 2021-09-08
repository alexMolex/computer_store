import React, { useEffect } from 'react';
import { Spinner, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import ExtendedDevicePrice from "../devicePrice/ExtendedDevicePrice";
import OrderProcessing from "../../pages/orderProcessing/OrderProcessingContainer";
<<<<<<< HEAD
import ComputerCardSkeleton from "../skeletons/ComputerCardSkeleton";
=======


>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510

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
<<<<<<< HEAD
	addDeviceToCompareTurn,
	removeDeviceFromCompareTurn,
	compareDevicesQueue,

}) => {

=======
}) => {


>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510
	const isBasketDeviceIdSame = (pc) => {
		return basketDevicesIds.some(id => id === pc)
	}

	const isCompareDevicesIdsSame = (pc) => {
		return compareDevicesQueue.some(i => i.id === pc)
	}

	const renderDescription = (text, limit) => {
		if (text.length <= limit) return text;
		text = text.slice(0, limit);
		return text + "...";
	}


	return (
		<div>
			<div className="books row mb-2 pt-4" >
				{count === 0 && is200Code &&
					<h2>нет ничего
						<Link to={"/konfigurator"}> cобрать свою конфигурацию</Link>
					</h2>
				}
				{!is200Code ?
					<ComputerCardSkeleton /> :
					device.map(pc =>
<<<<<<< HEAD
						<div className="col-sm-4 col-lg-4 col-md-4 book-list border m-0 p-1 bg-white animation" key={pc.id}>
=======
						<div className="col-sm-4 col-lg-4 col-md-4 book-list border m-0 p-1 bg-white" key={pc.id}>
>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510
							<div className="thumbnail">
								<Link to={`/computers/${pc.id}`}>
									<img
										src={process.env.REACT_APP_API_URL + pc.computer_case.img}
										alt="pc"
										className="img-thumbnail pc-image"
										max-width="100%"
										max-height="300px"
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
									{isCompareDevicesIdsSame(pc.id) ?
										<Button
											className="btn-danger"
											onClick={() => removeDeviceFromCompareTurn(pc)}
										>
											не сравнивать
										</Button> :
										<Button
											onClick={() => addDeviceToCompareTurn(pc)}
										>
											сравнить
										</Button>
									}

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