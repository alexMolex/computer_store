import { connect } from "react-redux";

import OneOrderPage from "./OneOrderPage";
<<<<<<< HEAD
import { getOneOrderProcessingData, updateOrderStatusData } from "../../redux/actions/actions";
=======
import { getOneOrderProcessingData } from "../../redux/actions/actions";
>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510



const mapState = state => ({
<<<<<<< HEAD
	order: state.orderProcessing.oneOrder,
	isOneOrderDeviceLoading: state.orderProcessing.isOneOrderDeviceLoading,
	statusList: state.orderProcessing.orderStatusList,
=======
	order: state.orderProcessing,
	isOneOrderDeviceLoading: state.orderProcessing.isOneOrderDeviceLoading,
>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510
})


const mapDispatch = {
<<<<<<< HEAD
	getOneOrderProcessingData,
	updateOrderStatusData,
=======
	getOneOrderProcessingData
>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510
}

const ComputersContainer = connect(mapState, mapDispatch)(OneOrderPage);

export default ComputersContainer;