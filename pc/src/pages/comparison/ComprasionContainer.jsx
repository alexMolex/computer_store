import { connect } from "react-redux";


import Comparison from "./Comparison";
import {
	setCompareDeviceIndext1,
	setCompareDeviceIndext2,
	removeDeviceFromCompareTurn,

} from '../../redux/actions/actions';



const mapState = (state) => ({
	compareDevices: state.comparisonReducer.compareDevicesQueue,
	compareDeviceIndex1: state.comparisonReducer.compareDeviceIndex1,
	compareDeviceIndex2: state.comparisonReducer.compareDeviceIndex2
})

const mapDispatch = {
	removeDeviceFromCompareTurn,
	setCompareDeviceIndext1,
	setCompareDeviceIndext2,
}

const ComputerCardContainer = connect(mapState, mapDispatch)(Comparison);

export default ComputerCardContainer;