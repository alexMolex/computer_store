import { connect } from "react-redux";
import { withRouter } from "react-router-dom"
import { compose } from "redux";


import ComputerCard from "../components/computerCard/ComputerCard";
import { setDeviceData, createBasketDevicesData, getBasketDevicesData } from '../redux/actions/actions';



const mapState = (state) => ({
	isAuth: state.checkAuthReducer.isAuth,
	device: state.deviceReducer.rows,
	count: state.deviceReducer.count,
	is200Code: state.deviceReducer.is200Code,
	basketId: state.checkAuthReducer.id,
	basketDevicesIds: state.basketReducer.basketDevicesIds,
	isBasketDevicesLoading: state.basketReducer.isBasketDevicesLoading
})

const mapDispatch = {
	setDeviceData,
	createBasketDevicesData,
	getBasketDevicesData
}

const ComputerCardContainer = compose(
	withRouter,
	connect(mapState, mapDispatch)
)(ComputerCard);

export default ComputerCardContainer;