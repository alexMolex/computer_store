import {
	FETCH_BASKET_DEVICES_SUCCESS,
	SET_GLOBAL_BASKET_TOGGLE,
} from "../actions/actionTypes/index"


const initialState = {
	isBasketDevicesLoading: false,
	data: [],
	basketDevicesIds: [],
	configVisible: false,
}

const basketDevices = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_BASKET_DEVICES_SUCCESS:
			return {
				...state,
				data: [...action.payload],
				basketDevicesIds: [...action.payload.map(item =>
					item.deviceId
				)],
				isBasketDevicesLoading: true
			}
		case SET_GLOBAL_BASKET_TOGGLE:
			return {
				...state,
				configVisible: action.payload,
			}

		default:
			return state
	}
}


export default basketDevices;