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
} from '../../redux/actions/actions';


const mapState = (state) => ({
	brandState: state.deviceBrands.data,
	typeState: state.deviceTypes.data,
	role: state.checkAuthReducer.role,
	processorState: state.deviceProcessor.data,
	videocardState: state.deviceVideocard.data,
	isTypeLoading: state.deviceTypes.isTypeLoading,
	isBrandLoading: state.deviceBrands.isBrandLoading,
	isVideocardsLoading: state.deviceVideocard.isVideocardsLoading,
	isProcessorsLoading: state.deviceProcessor.isProcessorsLoading,
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
}

const AdminPanelContainer = connect(mapState, mapDispatch)(AdminPanel);

export default AdminPanelContainer;