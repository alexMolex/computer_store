import { connect } from "react-redux";


import DevicePagination from "./DevicePagination";
import {
	setDeviceData, setGlobalPagination,
	removeGlobalPagination,
<<<<<<< HEAD
	removeDeviceIsLoading,
=======
>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510
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
<<<<<<< HEAD
	removeDeviceIsLoading,
=======
>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510
}

const PageContainer = connect(mapState, mapDispatch)(DevicePagination);

export default PageContainer;