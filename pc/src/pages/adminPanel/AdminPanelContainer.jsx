import { connect } from "react-redux";


import AdminPanel from "./AdminPanel";
import {
	setCreateDeviceType,
	setCreateDeviceBrand,
	setCreateDeviceProcessor,
	setCreateDeviceVideocard,
	setCreateDevice,
	setDeviceTypeData,
	setDeviceBrandData,
	setDeviceProcessorData,
	setDeviceVideocardData,
} from '../../redux/actions/actions';


const mapState = (state) => ({
	brandState: state.deviceBrands.data,
	typeState: state.deviceTypes.data,
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
	setCreateDevice,
	setDeviceTypeData,
	setDeviceBrandData,
	setDeviceProcessorData,
	setDeviceVideocardData,
}

const AdminPanelContainer = connect(mapState, mapDispatch)(AdminPanel);

export default AdminPanelContainer;