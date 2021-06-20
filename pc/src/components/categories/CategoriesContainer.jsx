import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router"

import Categories from "./Categories";
import { setDeviceData, setDeviceProcessorData, setDeviceVideocardData } from "../../redux/actions/actions";


const mapState = (state) => ({
	brand: state.deviceBrands.data,
	type: state.deviceTypes.data,
	processor: state.deviceProcessor.data,
	videocard: state.deviceVideocard.data,

	isBrandLoading: state.deviceBrands.isBrandLoading,
	isTypeLoading: state.deviceTypes.isTypeLoading,
	isProcessorsLoading: state.deviceProcessor.isProcessorsLoading,
	isVideocardsLoading: state.deviceVideocard.isVideocardsLoading,
})

const mapDispatch = {
	setDeviceData,
	setDeviceProcessorData,
	setDeviceVideocardData
}

const CategoriesContainer = compose(
	withRouter,
	connect(mapState, mapDispatch)
)(Categories);

export default CategoriesContainer;