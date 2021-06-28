
import { connect } from "react-redux";

import Basket from "./Basket";
import { getBasketDevicesData, deleteBasketDevicesData } from "../../redux/actions/actions";


const mapState = state => ({
	basketDevicesIds: state.basketReducer.basketDevicesIds,
	basketReducerData: state.basketReducer.data,
	isBasketLoading: state.basketReducer.isBasketDevicesLoading,
	device: state.deviceReducer.rows,
	basketId: state.checkAuthReducer.id,
})


const mapDispatch = {
	deleteBasketDevicesData,
	getBasketDevicesData,
}

const BasketContainer = connect(mapState, mapDispatch)(Basket);

export default BasketContainer;
