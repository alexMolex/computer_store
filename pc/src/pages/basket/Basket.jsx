import React, { useEffect, useState } from 'react';
import Header from '../../components/header/HeaderContainer';



import UserOrdersPopup from "../../components/modals/UserOrdersPopup";
import ConfigDeviceCard from "../../components/configDeviceCard/ConfigDeviceCard";
import BasketCard from "./BasketCard";
import Pages from "../../components/pagination/OtherPagination";
import IsCreateOrderFailer from "../../components/isCreateFailer/IsCreateOrderFailerContainer";

import './basket.css'

const Basket = ({
	basketReducerData,
	basketDevicesIds,
	isBasketLoading,
	getUserConfigDevices,
	isUserConfigDeviceLoading,
	userConfigDeviceData,
	deleteBasketDevicesData,
	deleteUserConfigDevice,
	getBasketDevicesData,
	getOrderProcessingData,
	getUserOrdersProcessingData,
	createOrderProcessingData,
	basketId,
	configVisible,
	setBasketConfigDeviceToggle,
	isAuth,
	isUserOrdersListLoading,
	userOrderData,
	count
}) => {

	const [userOrdersPopupVisible, setUserOrdersPopupVisible] = useState(false)

	useEffect(() => {
		getUserConfigDevices(basketId)
		getBasketDevicesData(basketId)
		getUserOrdersProcessingData(basketId)
		getOrderProcessingData()

	}, [
		getBasketDevicesData,
		basketId,
		getUserOrdersProcessingData,
		getOrderProcessingData,
		getUserConfigDevices
	])



	const totalPrice = basketReducerData.reduce((total, price) => {
		return Number(total) + price.device.price
	}, [0])


	const isConfigEmpty = () => {
		if (userConfigDeviceData.length === 0) {
			return true
		}
	}

	const activeBascet = !configVisible && "active"
	const activeConfig = configVisible && "active"

	// if (!isAuth) return <Redirect to={'/login'} />


	return (
		<div >
			<Header />
			<div className="view-container">
				<div className="container">
					<IsCreateOrderFailer />
					<div className="row">
						<div className="col-md-9">
							<ul className="list-group list-group-horizontal mt-2 pb-0">
								<li
									className={`list-group-item ${activeBascet}`}
									type="button"
									onClick={() => setBasketConfigDeviceToggle(false)}
								>
									Корзина устройств
									<span className="badge badge-secondary badge-pill ml-2">
										{basketReducerData.length}
									</span>
								</li>
								<li
									className={`list-group-item ${activeConfig}`}
									type="button"
									onClick={() => setBasketConfigDeviceToggle(true)}
								>
									Корзина конфигов
									<span className="badge badge-secondary badge-pill ml-2">{count}</span>
								</li>
							</ul>
							{!configVisible ? <BasketCard
								isLoading={isBasketLoading}
								reducerData={basketReducerData}
								basketId={basketId}
								createOrderProcessingData={createOrderProcessingData}
								deleteBasketDevicesData={deleteBasketDevicesData}
								getBasketDevicesData={getBasketDevicesData}
								basketDevicesIds={basketDevicesIds}
								getOrderProcessingData={getOrderProcessingData}
							/>
								:
								(!isUserConfigDeviceLoading) ?
									<h1>Загрузка...</h1> :
									isConfigEmpty() ? <h1>Нет созданных конфигов</h1> :
										<>
											<ConfigDeviceCard
												userId={basketId}
												getUserConfigDevices={getUserConfigDevices}
												deleteUserConfigDeviceApi={deleteUserConfigDevice}
												userConfigDevices={userConfigDeviceData}
												createOrderProcessingData={createOrderProcessingData}
												page="basket"
											/>
											<Pages
												isRequestDataLoading={isUserConfigDeviceLoading}
												count={count}
												setRequestData={getUserConfigDevices}
												userId={basketId}
											/>
										</>
							}
						</div>
						<div className="col-md-3">
							<h1>{totalPrice} Руб.</h1>
							<hr />
							<button
								style={{ "width": "100%" }}
								className="btn btn-info"
								onClick={() => setUserOrdersPopupVisible(true)}
							>
								Мои заказы
								<span className="badge badge-secondary badge-pill ml-2">{userOrderData.length}</span>
							</button>
							<UserOrdersPopup
								show={userOrdersPopupVisible}
								setVisible={setUserOrdersPopupVisible}
								isOrdersListLoading={isUserOrdersListLoading}
								ordersData={userOrderData}
								isAdminPage={false}
							/>
						</div>

					</div>

				</div>
			</div>
		</div>
	);
};



export default Basket;
