import { connect } from "react-redux";


import DevicePagination from "./DevicePagination";
import {
	setDeviceData, setGlobalPagination,
	removeGlobalPagination,
	removeDeviceIsLoading,
} from "../../redux/actions/actions";



const mapState = (state) => ({
	is200Code: state.deviceReducer.is200Code,
	count: state.deviceReducer.count,
	globalProcessor: state.deviceProcessor.globalProcessor,
	globalVideocard: state.deviceVideocard.globalVideocard,
	globalSortingType: state.sortingReducer.sortingType,
	globalSortingTable: state.sortingReducer.sortingTable,
	globalPageNumber: state.sortingReducer.page,
	globalType: state.deviceTypes.globalType,
	globalBrand: state.deviceBrands.globalBrand,
})

const mapDispatch = {
	setDeviceData,
	setGlobalPagination,
	removeGlobalPagination,
	removeDeviceIsLoading,
}

const PageContainer = connect(mapState, mapDispatch)(DevicePagination);

export default PageContainer;