import { connect } from "react-redux";

import Layout from "./Layout";
import {
	setDeviceTypeData,
	setDeviceBrandData,
	setOneDeviceData,
	setDeviceProcessorData,
	setDeviceVideocardData,
	getUserOrdersProcessingData
} from '../../redux/actions/actions';


const mapState = (state) => ({
	basketId: state.checkAuthReducer.id,
})

const mapDispatch = {
	setDeviceTypeData,
	setDeviceBrandData,
	setOneDeviceData,
	setDeviceProcessorData,
	setDeviceVideocardData,
	getUserOrdersProcessingData
}

const LayoutContainer = connect(mapState, mapDispatch)(Layout);

export default LayoutContainer;