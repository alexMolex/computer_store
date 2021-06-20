import {
	FETCH_PROCESSORS_SUCCESS
} from "../actions/actionTypes/index"


const initialState = {
	isProcessorsLoading: false
}

const deviceProcessors = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_PROCESSORS_SUCCESS:
			return {
				...state,
				data: [...action.payload],
				isProcessorsLoading: true
			}
		// case CREATE_DEVICE_BRAND_SUCCESS:
		// 	return {
		// 		...state,
		// 		...action.payload,
		// 	}
		default:
			return state
	}
}



export default deviceProcessors;