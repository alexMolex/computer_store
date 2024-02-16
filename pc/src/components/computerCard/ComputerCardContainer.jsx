import { connect } from "react-redux";
import withRouter from '../withRouter'
import { compose } from "redux";


import ComputerCard from "./ComputerCard";
import {
	setDeviceData,
	createBasketDevicesData,
	getBasketDevicesData,
	createOrderProcessingData,
	setUpdateDevicePrice,
	addDeviceToCompareTurn,
	removeDeviceFromCompareTurn,

} from '../../redux/actions/actions';



const mapState = (state) => ({
	isAuth: state.checkAuthReducer.isAuth,
	device: state.deviceReducer.rows,
	count: state.deviceReducer.count,
	is200Code: state.deviceReducer.is200Code,
	basketId: state.checkAuthReducer.id,
	role: state.checkAuthReducer.role,
	basketDevicesIds: state.basketReducer.basketDevicesIds,
	isBasketDevicesLoading: state.basketReducer.isBasketDevicesLoading,
	compareDevicesQueue: state.comparisonReducer.compareDevicesQueue
})

const mapDispatch = {

	createBasketDevicesData,
	getBasketDevicesData,
	createOrderProcessingData,
	setUpdateDevicePrice,
	setDeviceData,
	addDeviceToCompareTurn,
	removeDeviceFromCompareTurn,

}

const ComputerCardContainer = compose(
	withRouter,
	connect(mapState, mapDispatch)
)(ComputerCard);

export default ComputerCardContainer;