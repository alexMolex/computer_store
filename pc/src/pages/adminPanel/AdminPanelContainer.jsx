import { connect } from "react-redux";


import AdminPanel from "./AdminPanel";
import {
	setCreateDeviceType,
	setCreateDeviceBrand,
	setCreateDeviceProcessor,
	setCreateDeviceVideocard,
	setCreateComputerCase,
	setCreateDevice,
	setDeviceTypeData,
	setDeviceBrandData,
	setDeviceProcessorData,
	setDeviceVideocardData,
	setComputerCaseData,
	updateOrderStatusData,
	setUpdateProcessorPriceData,
	setUpdateVideocardPriceData,
	setUpdateComputerCasePriceData,
} from '../../redux/actions/actions';


const mapState = (state) => ({
	brandState: state.deviceBrands.data,
	typeState: state.deviceTypes.data,
	role: state.checkAuthReducer.role,
	processorState: state.deviceProcessor.data,
	isCreateDeviceFaler: state.deviceReducer.isCreateDeviceFaler,
	videocardState: state.deviceVideocard.data,
	isTypeLoading: state.deviceTypes.isTypeLoading,
	isBrandLoading: state.deviceBrands.isBrandLoading,
	isVideocardsLoading: state.deviceVideocard.isVideocardsLoading,
	isProcessorsLoading: state.deviceProcessor.isProcessorsLoading,
	isComputerCasesLoading: state.computerCase.isComputerCasesLoading,
	computerCaseData: state.computerCase.data,
	isOrdersListLoading: state.orderProcessing.isOrdersListLoading,
	allOrdersData: state.orderProcessing.data,
	orderCount: state.orderProcessing.count,
	count: state.computerCase.count,
})

const mapDispatch = {
	setCreateDeviceType,
	setCreateDeviceBrand,
	setCreateDeviceProcessor,
	setCreateDeviceVideocard,
	setCreateComputerCase,
	setCreateDevice,
	setDeviceTypeData,
	setDeviceBrandData,
	setDeviceProcessorData,
	setDeviceVideocardData,
	setComputerCaseData,
	updateOrderStatusData,
	setUpdateProcessorPriceData,
	setUpdateVideocardPriceData,
	setUpdateComputerCasePriceData,
}

const AdminPanelContainer = connect(mapState, mapDispatch)(AdminPanel);

export default AdminPanelContainer;