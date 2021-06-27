import {
	FETCH_BASKET_DEVICES_SUCCESS,
	FETCH_ONE_DEVICE_FOR_BASKET_SUCCESS
} from "../actions/actionTypes/index"


const initialState = {
	isBasketDevicesLoading: false,
	data: [],
	basketDevicesIds: [],
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
		default:
			return state
	}
}


export default basketDevices;