import {
	FETCH_TYPES_SUCCESS,
	// CREATE_DEVICE_TYPE_SUCCESS
} from "../actions/actionTypes/index"


const initialState = {
	isTypeLoading: false
}

const deviceTypes = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_TYPES_SUCCESS:
			return {
				...state,
				data: [...action.payload],
				isTypeLoading: true
			}
		// case CREATE_DEVICE_TYPE_SUCCESS:
		// 	return {
		// 		...state,
		// 		data: [...action.payload.data],
		// 		isTypeLoading: true
		// 	}
		default:
			return state
	}
}



export default deviceTypes;