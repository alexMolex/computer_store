import { connect } from "react-redux";

import OneOrderPage from "./OneOrderPage";
import { getOneOrderProcessingData, updateOrderStatusData } from "../../redux/actions/actions";



const mapState = state => ({
	order: state.orderProcessing.oneOrder,
	isOneOrderDeviceLoading: state.orderProcessing.isOneOrderDeviceLoading,
	statusList: state.orderProcessing.orderStatusList,
})


const mapDispatch = {
	getOneOrderProcessingData,
	updateOrderStatusData,
}

const ComputersContainer = connect(mapState, mapDispatch)(OneOrderPage);

export default ComputersContainer;