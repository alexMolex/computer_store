import React from 'react';
import { Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import OrderProcessing from "../../pages/orderProcessing/OrderProcessingContainer";
import ConfirmModal from "../modals/ConfirmationDialog";
import DevicePrice from "../devicePrice/DevicePrice";
import useSelectModalItem from "../../hooks/useSelectModalItem";

const ConfigDeviceCard = React.memo(({
	userId,
	getUserConfigDevices,
	deleteUserConfigDeviceApi,
	userConfigDevices,
	createOrderProcessingData,
	page
}) => {



	const [[isModalVisible, setIsModalVisible], selectedItem, expandModal] = useSelectModalItem('')


	// изменить reducer чтоб не вызывать getUserConfigDevices()

	const deleteConfigDevice = () => {
		let isMounted = true;
		deleteUserConfigDeviceApi(selectedItem.id)
			.then(() => {
				if (isMounted) getUserConfigDevices(userId)
			})
			.then(() => setIsModalVisible(false))
		return () => {
			isMounted = false
		}

	}


	return (
		<>
			{
				userConfigDevices.map((data) => {
					return (
						<div className="thumbnail mt-2 shadow p-1 mb-1 bg-white rounded"
							key={data.id}
						>
							<div className="row">
								<div className="col-md-6">
									<Link style={{ color: '#128496' }} to={{ pathname: `/oneConfig/${data.id}`, state: { page } }}>
										<Image
											width={300}
											height={300}
											src={process.env.REACT_APP_API_URL + data.computer_case.img}
											alt={data.computer_case.name}
											className="img-thumbnail"
										/>
									</Link>
								</div>
								<div className="col-md-6">
									<Row className="d-flex flex-column mb-2 mr-2 mt-0 ml-2">
										<Link style={{ color: '#128496' }} to={{ pathname: `/oneConfig/${data.id}`, state: { page } }}>
											<h5 >Конфиг от {new Date(data.createdAt).toLocaleString()}</h5>
										</Link>
										<h5>{data.processor.name}</h5>
										<h5>{data.videocard.name}</h5>
										<h5>{data.RAM} ГБ OЗУ</h5>
										{(data.SSD) ? <h5>SSD: {data.storageVolume} ГБ</h5> : <h5>HDD: {data.storageVolume} ГБ</h5>}
										{(data.overclocking) ?
											<h5>с разгоном</h5> :
											<h5>без разгона</h5>
										}
										<div className="caption-full mt-2">
											<OrderProcessing
												basketId={userId}
												createOrderProcessingData={createOrderProcessingData}
												price={data.price}
												orderName={data.computer_case.name}
												buttonName='сделать заказ'
												processorId={data.processor.id}
												videocardId={data.videocard.id}
												overclocking={data.overclocking}
												storageVolume={data.storageVolume}
												ssd={data.SSD}
												computerCaseId={data.computer_case.id}
												RAM={data.RAM}
												computerCase={data.computer_case}
												videocard={data.videocard}
												processor={data.processor}
											/>

											<DevicePrice
												localProcessorPrice={data.processor.price}
												localVideocardPrice={data.videocard.price}
												localComputerCasePrice={data.computer_case.price}
												ssd={data.SSD}
												storageVolume={data.storageVolume}
												ram={data.RAM}
												overclocking={data.overclocking}
												className="float-right"
												price={data.price}
											/>

											<ConfirmModal
												show={isModalVisible}
												setVisible={setIsModalVisible}
												confirm={deleteConfigDevice}
												headerText={`Вы действительно хотите удалить компьютер из корзины?`}
												confirmText={"Удалить"}
												unConfirmText={"Отмена"}
											/>
											<button
												onClick={() => expandModal(data)}
												className="btn pt-0 pb-0 mr-2 float-right btn-outline-danger"
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


		</>
	);
});

export default ConfigDeviceCard;