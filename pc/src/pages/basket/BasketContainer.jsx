
import { connect } from "react-redux";

import Basket from "./Basket";
import {
	getBasketDevicesData,
	deleteBasketDevicesData,
	getOrderProcessingData,
	getUserOrdersProcessingData,
	createOrderProcessingData,
	getUserConfigDevices,
	deleteUserConfigDevice,
<<<<<<< HEAD
	setBasketConfigDeviceToggle,
=======
>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510
} from "../../redux/actions/actions";


const mapState = state => ({
	isAuth: state.checkAuthReducer.isAuth,
	basketDevicesIds: state.basketReducer.basketDevicesIds,
	basketReducerData: state.basketReducer.data,
	configVisible: state.basketReducer.configVisible,
	isBasketLoading: state.basketReducer.isBasketDevicesLoading,
	device: state.deviceReducer.rows,
	basketId: state.checkAuthReducer.id,
	isUserConfigDeviceLoading: state.userConfigDevice.isUserConfigDeviceLoading,
	userConfigDeviceData: state.userConfigDevice.userConfigDevices,
	count: state.userConfigDevice.count,
	isUserOrdersListLoading: state.orderProcessing.isUserOrdersListLoading,
	userOrderData: state.orderProcessing.userOrderData,
})


const mapDispatch = {
	getUserConfigDevices,
	deleteBasketDevicesData,
	getBasketDevicesData,
	getOrderProcessingData,
	getUserOrdersProcessingData,
	createOrderProcessingData,
	deleteUserConfigDevice,
<<<<<<< HEAD
	setBasketConfigDeviceToggle,
=======
>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510
}

const BasketContainer = connect(mapState, mapDispatch)(Basket);

export default BasketContainer;
