import { connect } from "react-redux";
// import { compose } from "redux";
// import { withRouter } from "react-router"

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
<<<<<<< HEAD
	removeDeviceIsLoading,
=======

>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510
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
<<<<<<< HEAD
	globalPageNumber: state.sortingReducer.page,

=======
>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510
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
<<<<<<< HEAD
	removeDeviceIsLoading,
=======

>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510
}

const CategoriesContainer = connect(mapState, mapDispatch)(Categories);

export default CategoriesContainer;