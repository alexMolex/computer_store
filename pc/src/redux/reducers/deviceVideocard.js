import {
	FETCH_VIDEOCARDS_SUCCESS
} from "../actions/actionTypes/index"


const initialState = {
	isVideocardsLoading: false
}

const deviceVideocards = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_VIDEOCARDS_SUCCESS:
			return {
				...state,
				data: [...action.payload],
				isVideocardsLoading: true
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



export default deviceVideocards;