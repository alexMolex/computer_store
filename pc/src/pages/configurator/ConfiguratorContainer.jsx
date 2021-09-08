import { connect } from "react-redux";

import Configurator from "./Configurator";
import {
	setDeviceProcessorData,
	setDeviceVideocardData,
	setComputerCaseData,
	removeGlobalVideocard,
	removeGlobalProcessor,
	getUserConfigDevices,
	createUserConfigDevice,
	createOrderProcessingData,
	deleteUserConfigDevice,
<<<<<<< HEAD
	removeIsOneUserConfigLoading,
=======
>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510
} from "../../redux/actions/actions";



const mapState = state => ({
	isAuth: state.checkAuthReducer.isAuth,
	userId: state.checkAuthReducer.id,
	isProcessorsLoading: state.deviceProcessor.isProcessorsLoading,
	isVideocardsLoading: state.deviceVideocard.isVideocardsLoading,
	processor: state.deviceProcessor.data,
	globalProcessor: state.deviceProcessor.globalProcessor,
	videocard: state.deviceVideocard.data,
	globalVideocard: state.deviceVideocard.globalVideocard,
	isUserConfigDeviceLoading: state.userConfigDevice.isUserConfigDeviceLoading,
	userConfigDevices: state.userConfigDevice.userConfigDevices,
	isCreatingConfigDeviceFailer: state.userConfigDevice.isCreatingConfigDeviceFailer,
	creatingConfigDeviceAlert: state.userConfigDevice.creatingConfigDeviceAlert,
	computerCase: state.computerCase.data,
	isComputerCasesLoading: state.computerCase.isComputerCasesLoading,
	count: state.computerCase.count,
	configCount: state.userConfigDevice.count,
<<<<<<< HEAD
=======

>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510
})


const mapDispatch = {
	setDeviceProcessorData,
	setDeviceVideocardData,
	setComputerCaseData,
	removeGlobalVideocard,
	removeGlobalProcessor,
	getUserConfigDevices,
	createUserConfigDevice,
	createOrderProcessingData,
<<<<<<< HEAD
	deleteUserConfigDevice,
	removeIsOneUserConfigLoading
=======
	deleteUserConfigDevice
>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510
}

const ConfiguratorContainer = connect(mapState, mapDispatch)(Configurator);

export default ConfiguratorContainer;