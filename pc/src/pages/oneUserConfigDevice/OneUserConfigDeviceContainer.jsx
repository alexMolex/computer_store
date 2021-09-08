import { connect } from "react-redux";

import OneUserConfigDevice from "./OneUserConfigDevice";
import { getOneUserConfigDevice } from "../../redux/actions/actions";



const mapState = state => ({
<<<<<<< HEAD
	configDevice: state.userConfigDevice.oneUserConfigDeviceDafa,
	userId: state.checkAuthReducer.id,
=======
	configDevice: state.userConfigDevice,
>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510
	isOneUserConfigDeviceLoading: state.userConfigDevice.isOneUserConfigDeviceLoading,
})


const mapDispatch = {
<<<<<<< HEAD
	getOneUserConfigDevice,
=======
	getOneUserConfigDevice
>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510
}

const ComputersContainer = connect(mapState, mapDispatch)(OneUserConfigDevice);

export default ComputersContainer;