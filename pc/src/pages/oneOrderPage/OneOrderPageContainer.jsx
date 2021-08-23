import { connect } from "react-redux";

import OneOrderPage from "./OneOrderPage";
import { getOneOrderProcessingData } from "../../redux/actions/actions";



const mapState = state => ({
	order: state.orderProcessing,
	isOneOrderDeviceLoading: state.orderProcessing.isOneOrderDeviceLoading,
})


const mapDispatch = {
	getOneOrderProcessingData
}

const ComputersContainer = connect(mapState, mapDispatch)(OneOrderPage);

export default ComputersContainer;