import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router"

import Categories from "./Categories";
import {
	setDeviceData,
	setDeviceProcessorData,
	setDeviceVideocardData,
	setGlobalProcessor,
	setGlobalVideocard,
	removeGlobalVideocard,
	removeGlobalProcessor,
	setGlobalType,
	removeGlobalType,
	setGlobalBrand,
	removeGlobalBrand,
	setGlobalSortingTypes,
	removeGlobalSortingTypes,
	removeGlobalPagination,
	setGlobalSortingTable,
	removeGlobalSortingTable,

} from "../../redux/actions/actions";


const mapState = (state) => ({
	brand: state.deviceBrands.data,
	type: state.deviceTypes.data,
	processor: state.deviceProcessor.data,
	videocard: state.deviceVideocard.data,
	globalProcessor: state.deviceProcessor.globalProcessor,
	globalVideocard: state.deviceVideocard.globalVideocard,
	globalSortingType: state.sortingReducer.sortingType,
	globalSortingTable: state.sortingReducer.sortingTable,
	globalType: state.deviceTypes.globalType,
	globalBrand: state.deviceBrands.globalBrand,
	isBrandLoading: state.deviceBrands.isBrandLoading,
	isTypeLoading: state.deviceTypes.isTypeLoading,
	isProcessorsLoading: state.deviceProcessor.isProcessorsLoading,
	isVideocardsLoading: state.deviceVideocard.isVideocardsLoading,
})

const mapDispatch = {
	setDeviceData,
	setDeviceProcessorData,
	setDeviceVideocardData,
	setGlobalProcessor,
	setGlobalVideocard,
	removeGlobalVideocard,
	removeGlobalProcessor,
	setGlobalType,
	removeGlobalType,
	setGlobalBrand,
	removeGlobalBrand,
	setGlobalSortingTypes,
	removeGlobalSortingTypes,
	setGlobalSortingTable,
	removeGlobalSortingTable,
	removeGlobalPagination,

}

const CategoriesContainer = compose(
	withRouter,
	connect(mapState, mapDispatch)
)(Categories);

export default CategoriesContainer;