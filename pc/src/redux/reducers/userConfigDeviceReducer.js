import {
	FETCH_USER_CONFIG_DEVICE_SUCCESS,
	CREATE_USER_CONFIG_DEVICE_SUCCESS,
	CREATE_USER_CONFIG_DEVICE_FAILER,
<<<<<<< HEAD
	FETCH_ONE_USER_CONFIG_DEVICE_SUCCESS,
	REMOVE_IS_ONE_USER_CONFIG_LOADING
=======
	FETCH_ONE_USER_CONFIG_DEVICE_SUCCESS
>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510
} from "../actions/actionTypes/index"


const initialState = {
	isUserConfigDeviceLoading: false,
	userConfigDevices: [],
	isCreatingConfigDeviceFailer: false,
	creatingConfigDeviceAlert: false,
	count: 0,
<<<<<<< HEAD
	isOneUserConfigDeviceLoading: false,
	oneUserConfigDeviceDafa: null
=======
	isOneUserConfigDeviceLoading: false
>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510
}

const userConfigDevice = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_USER_CONFIG_DEVICE_SUCCESS:
			return {
				...state,
				count: action.payload.count,
				userConfigDevices: [...action.payload.rows],
				isUserConfigDeviceLoading: true,
			}
		case CREATE_USER_CONFIG_DEVICE_SUCCESS:
			return {
				...state,
				creatingConfigDeviceAlert: action.alert
			}
		case CREATE_USER_CONFIG_DEVICE_FAILER:
			return {
				...state,
				isCreatingConfigDeviceFailer: action.payload
			}
		case FETCH_ONE_USER_CONFIG_DEVICE_SUCCESS:
			return {
				...state,
<<<<<<< HEAD
				oneUserConfigDeviceDafa: action.payload,
				isOneUserConfigDeviceLoading: true
			}
		case REMOVE_IS_ONE_USER_CONFIG_LOADING:
			return {
				...state,
				isOneUserConfigDeviceLoading: false
=======
				...action.payload,
				isOneUserConfigDeviceLoading: true
>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510
			}
		default:
			return state
	}
}



export default userConfigDevice;