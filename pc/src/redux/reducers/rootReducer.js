import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';


import deviceTypes from "./deviceTypes";
import deviceReducer from "./deviceReducer";
import deviceBrands from "./deviceBrand";
import deviceProcessor from "./deviceProcessor";
import deviceVideocard from "./deviceVideocard";
import checkAuthReducer from "./checkAuthReducer";
import basketReducer from "./basketReducer";
import orderProcessing from "./orderProcessingReducer";


const createRootReducer = history => combineReducers({

	deviceBrands,
	deviceTypes,
	deviceProcessor,
	deviceVideocard,
	deviceReducer,
	checkAuthReducer,
	basketReducer,
	orderProcessing,
	router: connectRouter(history)
});

export default createRootReducer;