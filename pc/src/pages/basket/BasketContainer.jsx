
import { connect } from "react-redux";

import Basket from "./Basket";
import { getBasketDevicesData, deleteBasketDevicesData, setDeviceData } from "../../redux/actions/actions";


const mapState = state => ({
	basketDevicesIds: state.basketReducer.basketDevicesIds,
	basketDevices: state.basketReducer.basketDevices,
	basketReducerData: state.basketReducer.data,
	isBasketLoading: state.basketReducer.isBasketDevicesLoading,
	device: state.deviceReducer.rows,
	is200Code: state.deviceReducer.is200Code,
	basketId: state.checkAuthReducer.id,
})


const mapDispatch = {
	deleteBasketDevicesData,
	getBasketDevicesData,
	setDeviceData,

}

const BasketContainer = connect(mapState, mapDispatch)(Basket);

export default BasketContainer;
