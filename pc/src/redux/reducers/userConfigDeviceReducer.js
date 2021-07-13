import {
	FETCH_USER_CONFIG_DEVICE_SUCCESS,
} from "../actions/actionTypes/index"


const initialState = {
	isUserConfigDeviceLoading: false,
	userConfigDevices: []
}

const userConfigDevice = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_USER_CONFIG_DEVICE_SUCCESS:
			return {
				...state,
				count: action.payload.count,
				userConfigDevices: [...action.payload.rows],
				isUserConfigDeviceLoading: true
			}
		default:
			return state
	}
}



export default userConfigDevice;