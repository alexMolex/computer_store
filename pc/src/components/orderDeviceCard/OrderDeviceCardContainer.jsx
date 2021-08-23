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
})

const mapDispatch = {
	getUserOrdersProcessingData,
	getOrderProcessingData,
	updateOrderStatusData,
}

const OrderDeviceCardContainer = connect(mapState, mapDispatch)(OrderDeviceCard);

export default OrderDeviceCardContainer;