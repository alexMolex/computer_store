
import { connect } from "react-redux";

import Basket from "./Basket";
import { getBasketDevicesData, deleteBasketDevicesData, setDeviceData } from "../../redux/actions/actions";



const mapState = state => ({
	basketDevices: state.basketReducer,
	isBasketLoading: state.basketReducer.isBasketDevicesLoading,
	basketDevicesIds: state.basketReducer.basketDevicesIds,
	device: state.deviceReducer.rows,
	is200Code: state.deviceReducer.is200Code,
})


const mapDispatch = {
	deleteBasketDevicesData,
	getBasketDevicesData,
	setDeviceData
}

const BasketContainer = connect(mapState, mapDispatch)(Basket);

export default BasketContainer;
