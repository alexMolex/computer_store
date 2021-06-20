import { connect } from "react-redux";

import Layout from "./Layout";
import {
	setDeviceTypeData,
	setDeviceBrandData,
	setOneDeviceData,
	setDeviceProcessorData,
	setDeviceVideocardData
} from '../../redux/actions/actions';


const mapState = (state) => ({

})

const mapDispatch = {
	setDeviceTypeData,
	setDeviceBrandData,
	setOneDeviceData,
	setDeviceProcessorData,
	setDeviceVideocardData
}

const LayoutContainer = connect(mapState, mapDispatch)(Layout);

export default LayoutContainer;