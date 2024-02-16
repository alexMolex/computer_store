import deviceTypes from "./deviceTypes";
import deviceReducer from "./deviceReducer";
import deviceBrands from "./deviceBrand";
import sortingReducer from "./sortingReducer";
import deviceProcessor from "./deviceProcessor";
import deviceVideocard from "./deviceVideocard";
import computerCase from "./computerCaseReducer";
import comparisonReducer from "./comparisonReducer";
import checkAuthReducer from "./checkAuthReducer";
import basketReducer from "./basketReducer";
import orderProcessing from "./orderProcessingReducer";
import userConfigDevice from "./userConfigDeviceReducer";

const createRootReducer = {
	basketReducer,
	checkAuthReducer,
	comparisonReducer,
	computerCase,
	deviceBrands,
	deviceProcessor,
	deviceReducer,
	deviceTypes,
	deviceVideocard,
	orderProcessing,
	sortingReducer,
	userConfigDevice,
}

export default createRootReducer;