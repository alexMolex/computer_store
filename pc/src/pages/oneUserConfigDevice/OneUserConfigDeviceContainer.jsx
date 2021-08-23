import { connect } from "react-redux";

import OneUserConfigDevice from "./OneUserConfigDevice";
import { getOneUserConfigDevice } from "../../redux/actions/actions";



const mapState = state => ({
	configDevice: state.userConfigDevice,
	isOneUserConfigDeviceLoading: state.userConfigDevice.isOneUserConfigDeviceLoading,
})


const mapDispatch = {
	getOneUserConfigDevice
}

const ComputersContainer = connect(mapState, mapDispatch)(OneUserConfigDevice);

export default ComputersContainer;