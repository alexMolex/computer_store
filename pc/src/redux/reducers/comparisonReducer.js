import {
	ADD_DEVICE_TO_COMPARE_TURN,
	REMOVE_DEVICE_FROM_COMPARE_TURN,
	SET_COMPARE_DEVICE_INDEX1,
	SET_COMPARE_DEVICE_INDEX2
} from "../actions/actionTypes/index"


const initialState = {
	compareDevicesQueue: [],
	compareDeviceIndex1: 0,
	compareDeviceIndex2: 1,
}

const comparisonReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_DEVICE_TO_COMPARE_TURN:
			if (state.compareDevicesQueue.length < 10) {
				return {
					...state,
					compareDevicesQueue: [...state.compareDevicesQueue, action.payload],
				}
			} else return state
		case REMOVE_DEVICE_FROM_COMPARE_TURN:
			return {
				...state,
				compareDevicesQueue: [...state.compareDevicesQueue.filter(a => a.id !== action.payload.id)],
			}
		case SET_COMPARE_DEVICE_INDEX1:
			return {
				...state,
				compareDeviceIndex1: action.payload
			}
		case SET_COMPARE_DEVICE_INDEX2:
			return {
				...state,
				compareDeviceIndex2: action.payload
			}
		default:
			return state
	}
}



export default comparisonReducer;