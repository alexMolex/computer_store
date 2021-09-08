import {
	FETCH_DEVICE_SUCCESS,
	FETCH_ONE_DEVICE_SUCCESS,
	CREATE_DEVICE_FAILER,
<<<<<<< HEAD
	REMOVE_DEVICE_IS_LOADING,
=======
>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510
} from "../actions/actionTypes/index"


const initialState = {

	is200Code: false,
	isOneDeviceLoading: false,
	isCreateDeviceFaler: false,
<<<<<<< HEAD
	oneDeviceData: null,
=======
>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510
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
<<<<<<< HEAD
		case REMOVE_DEVICE_IS_LOADING:
			return {
				...state,
				is200Code: false,
			}
=======
>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510
		case CREATE_DEVICE_FAILER:
			return {
				...state,
				isCreateDeviceFaler: action.payload
			}
		case FETCH_ONE_DEVICE_SUCCESS:
			return {
				...state,
				oneDeviceData: action.payload,
				isOneDeviceLoading: true
			}
		default:
			return state
	}
}



export default deviceReducer;
