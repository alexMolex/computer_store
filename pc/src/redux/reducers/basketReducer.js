import {
	FETCH_BASKET_DEVICES_SUCCESS,
	FETCH_ONE_DEVICE_FOR_BASKET_SUCCESS
} from "../actions/actionTypes/index"


const initialState = {
	isBasketDevicesLoading: false,
	data: [],
	basketDevicesIds: [],
	basketDevices: []
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
		case FETCH_ONE_DEVICE_FOR_BASKET_SUCCESS:
			const devices = new Set(state.basketDevices.map(device => device.id));
			if (devices.has(action.payload.data.id)) {
				return state;
			}
			return {
				...state,
				basketDevices: [...state.basketDevices, action.payload.data],
			}
		default:
			return state
	}
}


export default basketDevices;