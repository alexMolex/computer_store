import {
	FETCH_VIDEOCARDS_SUCCESS,
	GET_GLOBAL_VIDEOCARD,
	REMOVE_GLOBAL_VIDEOCARD
} from "../actions/actionTypes/index"


const initialState = {
	isVideocardsLoading: false,
	globalVideocard: { price: 0 }
}

const deviceVideocards = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_VIDEOCARDS_SUCCESS:
			return {
				...state,
				data: [...action.payload],
				isVideocardsLoading: true
			}
		case GET_GLOBAL_VIDEOCARD:
			return {
				...state,
				globalVideocard: action.payload,
			}
		case REMOVE_GLOBAL_VIDEOCARD:
			return {
				...state,
				globalVideocard: { price: 0 }
			}
		default:
			return state
	}
}



export default deviceVideocards;