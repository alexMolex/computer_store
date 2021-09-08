import { connect } from "react-redux";


import OrderDeviceCard from "./OrderDeviceCard";
import {
	getUserOrdersProcessingData,
	getOrderProcessingData,
	updateOrderStatusData
} from '../../redux/actions/actions';


const mapState = (state) => ({
	userId: state.checkAuthReducer.id,
	count: state.orderProcessing.count,
<<<<<<< HEAD
	statusList: state.orderProcessing.orderStatusList,
=======
>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510
})

const mapDispatch = {
	getUserOrdersProcessingData,
	getOrderProcessingData,
	updateOrderStatusData,
}

const OrderDeviceCardContainer = connect(mapState, mapDispatch)(OrderDeviceCard);

export default OrderDeviceCardContainer;