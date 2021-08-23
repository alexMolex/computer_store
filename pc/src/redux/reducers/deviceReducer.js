import {
	FETCH_DEVICE_SUCCESS,
	FETCH_ONE_DEVICE_SUCCESS,
	CREATE_DEVICE_FAILER,
} from "../actions/actionTypes/index"


const initialState = {
	is200Code: false,
	isOneDeviceLoading: false,
	isCreateDeviceFaler: false,
}

const deviceReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_DEVICE_SUCCESS:
			return {
				...state,
				...action.payload,
				is200Code: true,
				isOneDeviceLoading: false
			}
		case CREATE_DEVICE_FAILER:
			return {
				...state,
				isCreateDeviceFaler: action.payload
			}
		case FETCH_ONE_DEVICE_SUCCESS:
			return {
				...state,
				...action.payload,
				isOneDeviceLoading: true
			}
		default:
			return state
	}
}



export default deviceReducer;
