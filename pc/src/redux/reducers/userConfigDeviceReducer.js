import {
	FETCH_USER_CONFIG_DEVICE_SUCCESS,
	CREATE_USER_CONFIG_DEVICE_SUCCESS,
	CREATE_USER_CONFIG_DEVICE_FAILER,
	FETCH_ONE_USER_CONFIG_DEVICE_SUCCESS,
	REMOVE_IS_ONE_USER_CONFIG_LOADING
} from "../actions/actionTypes/index"


const initialState = {
	isUserConfigDeviceLoading: false,
	userConfigDevices: [],
	isCreatingConfigDeviceFailer: false,
	creatingConfigDeviceAlert: false,
	count: 0,
	isOneUserConfigDeviceLoading: false,
	oneUserConfigDeviceDafa: null
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
				oneUserConfigDeviceDafa: action.payload,
				isOneUserConfigDeviceLoading: true
			}
		case REMOVE_IS_ONE_USER_CONFIG_LOADING:
			return {
				...state,
				isOneUserConfigDeviceLoading: false
			}
		default:
			return state
	}
}



export default userConfigDevice;