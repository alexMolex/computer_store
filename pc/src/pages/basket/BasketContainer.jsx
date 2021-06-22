
import { connect } from "react-redux";

import Basket from "./Basket";
import { getBasketDevicesData, deleteBasketDevicesData, setDeviceData, getOneDeviceForBasket } from "../../redux/actions/actions";


const mapState = state => ({
	basketDevicesIds: state.basketReducer.basketDevicesIds,
	basketDevices: state.basketReducer.basketDevices,
	basketReducerData: state.basketReducer.data,
	isBasketLoading: state.basketReducer.isBasketDevicesLoading,
	basketDevicesIds: state.basketReducer.basketDevicesIds,
	device: state.deviceReducer.rows,
	is200Code: state.deviceReducer.is200Code,
})


const mapDispatch = {
	deleteBasketDevicesData,
	getBasketDevicesData,
	setDeviceData,

	getOneDeviceForBasket
}

const BasketContainer = connect(mapState, mapDispatch)(Basket);

export default BasketContainer;
