import React, { useEffect, useState } from 'react';
import { Image, Row, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Pages from "../pagination/OtherPagination";

const OrderDeviceCard = ({
	isOrdersListLoading,
	ordersData,
	isAdminPage,
	updateOrderStatusData,
	userId,
	getUserOrdersProcessingData,
	getOrderProcessingData,
	count,
}) => {

	const [updateStatus, setUpdateStatus] = useState('')

	useEffect(() => {
		getUserOrdersProcessingData(userId)
		getOrderProcessingData()
	}, [userId])

	const statusList = [
		"Идет подбор комплектующих",
		"Заказ в процессе сборки",
		"Заказ готов",
		"Отказ от сборки"
	]

	return (
		<>
			{(isOrdersListLoading) && ordersData.map(i => (
				<div className="thumbnail mt-2 shadow p-1 mb-1 bg-white rounded"
					key={i.id}
				>
					<div className="row">
						<div className="col-md-6">
							<Link style={{ color: '#128496' }} to={`/oneOrder/${i.id}`}>
								<h5 className="mt-2">Заказ №{i.id} от {new Date(i.createdAt).toLocaleString()}</h5>
							</Link>
							<Link style={{ color: '#128496' }} to={`/oneOrder/${i.id}`}>
								<Image
									width={300}
									height={300}
									src={process.env.REACT_APP_API_URL + i.order[0].computer_case.img}
									alt={i.order[0].computer_case.name}
									className="img-thumbnail"
								/>
							</Link>
						</div>
						<div className="col-md-6">
							<Row className="d-flex flex-column mb-2 mr-2 ml-2 mt-0">
								<h3 className="mb-2 pt-0" >Конфигурация</h3>
								<h5>{i.order[0].processor.name}</h5>
								<h5>{i.order[0].videocard.name}</h5>
								<h5>{i.order[0].computer_case.name}</h5>
								<h5>{i.order[0].RAM} ГБ OЗУ</h5>
								<h5>{i.order[0].storageVolume} ГБ Объем накопителя</h5>
								{(i.order[0].SSD) ? <h5>с SSD</h5> : <h5>без SSD</h5>}
								{(i.order[0].overclocking) ?
									<h5>с разгоном</h5> :
									<h5>без разгона</h5>
								}
								<div className="caption-full mt-4">

									<h4 className="float-left ">{i.price} Руб.</h4>
									<p></p>
									{isAdminPage &&
										<div className="float-right p-0">

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
												onClick={() => updateOrderStatusData(i.id, updateStatus)
													.then(() => getOrderProcessingData()
													)}
												className="btn pt-1 pb-0 mr-2 float-right btn-outline-info"
											>
												<h6> Изменить статус </h6>
											</button>
										</div>
									}

								</div>
								<h5>Статус заказа: {i.status}</h5>
							</Row>
						</div>
					</div>

				</div>
			))
			}

			{isAdminPage && <Pages
				isRequestDataLoading={isOrdersListLoading}
				count={count}
				setRequestData={getOrderProcessingData}
			/>}
		</>
	);
};

export default OrderDeviceCard;