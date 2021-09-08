import React from 'react';
import { Image, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import OrderProcessing from "../orderProcessing/OrderProcessingContainer";
import ConfirmModal from "../../components/modals/ConfirmationDialog";
import DevicePrice from "../../components/devicePrice/DevicePrice";
import useSelectModalItem from "../../hooks/useSelectModalItem";
import './basket.css'

const BasketCard = ({
	isLoading,
	reducerData,
	basketDevicesIds,
	basketId,
	createOrderProcessingData,
	deleteBasketDevicesData,
	getBasketDevicesData,
	getOrderProcessingData,
}) => {


	const [[isModalVisible, setIsModalVisible], selectedItem, expandModal] = useSelectModalItem('')


	const isBasketEmpty = () => {
		if (basketDevicesIds.length === 0) {
			return true
		}
	}


	const deleteBasketDevice = () => {
		deleteBasketDevicesData(selectedItem.id)
			.then(() => getBasketDevicesData(basketId))
			.then(() => setIsModalVisible(false))
	}

	return (
		<>
			{(!isLoading) ?
				<Spinner animation="border" /> :
				isBasketEmpty() ?
					<h1>Корзина пуста</h1> :
					reducerData.map((data) => {
						return (
							<div className="thumbnail mt-2 shadow p-1 mb-1 bg-white rounded"
								key={data.device.id}
							>
								<div className="row">
									<div className="col-md-6">
										<Link to={`/computers/${data.device.id}`}>
											<Image
												width={300}
												height={300}
												src={process.env.REACT_APP_API_URL + data.device.computer_case.img}
												alt={data.device.name}
												className="img-thumbnail"
											/>
										</Link>
										<DevicePrice
											localProcessorPrice={data.device.processor.price}
											localVideocardPrice={data.device.videocard.price}
											localComputerCasePrice={data.device.computer_case.price}
											ssd={data.device.SSD}
											storageVolume={data.device.storageVolume}
											ram={data.device.RAM}
											overclocking={data.device.overclocking}
											className="float-left mt-2 mr-2"
											price={data.device.price}
										/>

										<button
											onClick={() => expandModal(data)}

											className="btn pt-0 pb-0 mr-2 mt-2 btn-outline-danger"
										>
											<h4> удалить </h4>
										</button>
									</div>
									<div className="col-md-6">
										<Row className="d-flex flex-column mb-3 mr-3">
											<h4>
												<Link style={{ color: '#128496' }} to={`/computers/${data.device.id}`}>
													{data.device.name}
												</Link></h4>
											<h5>{data.device.processor.name}</h5>
											<h5>{data.device.videocard.name}</h5>
											<h5>{data.device.computer_case.name}</h5>
											<h5>{data.device.RAM} ГБ OЗУ</h5>
											{(data.device.SSD) ? <h5>с SSD</h5> : <h5>без SSD</h5>}
											{(data.device.overclocking) ?
												<h5>с разгоном</h5> :
												<h5>без разгона</h5>
											}
											<p>Сборка займет 1-3 дня</p>
											<div className="caption-full mt-1">
												<OrderProcessing
													basketId={basketId}
													createOrderProcessingData={createOrderProcessingData}
													getOrderProcessingData={getOrderProcessingData}
													price={data.device.price}
													orderName={data.device.name}
													buttonName='сделать заказ'
													processorId={data.device.processorId}
													videocardId={data.device.videocardId}
													computerCaseId={data.device.computer_case.id}
													computerCase={data.device.computer_case}
													videocard={data.device.videocard}
													processor={data.device.processor}
													RAM={data.device.RAM}
													overclocking={data.device.overclocking}
													storageVolume={data.device.storageVolume}
													ssd={data.device.SSD}
												/>

												<ConfirmModal
													show={isModalVisible}
													setVisible={setIsModalVisible}
													confirm={deleteBasketDevice}
													headerText={`Вы действительно хотите удалить компьютер ${selectedItem.device.name} из корзины?`}
													confirmText={"Удалить"}
													unConfirmText={"Отмена"}
												/>

											</div>
										</Row>
									</div>
								</div>

							</div>
						)
					})

			}
		</>
	);
};



export default BasketCard;