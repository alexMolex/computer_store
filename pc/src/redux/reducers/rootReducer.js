import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';


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


const createRootReducer = history => combineReducers({
	basketReducer,
	checkAuthReducer,
<<<<<<< HEAD
	comparisonReducer,
=======
>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510
	computerCase,
	deviceBrands,
	deviceProcessor,
	deviceReducer,
	deviceTypes,
	deviceVideocard,
	orderProcessing,
	sortingReducer,
	userConfigDevice,
	router: connectRouter(history)
});

export default createRootReducer;