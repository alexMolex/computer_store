import { connect } from "react-redux";

import Computers from "./Computers";
import { setOneDeviceData } from "../../redux/actions/actions";



const mapState = state => ({
	computer: state.deviceReducer,
	isOneDeviceLoading: state.deviceReducer.isOneDeviceLoading,
})


const mapDispatch = {
	setOneDeviceData
}

const ComputersContainer = connect(mapState, mapDispatch)(Computers);

export default ComputersContainer;