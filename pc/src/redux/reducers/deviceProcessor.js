import {
	FETCH_PROCESSORS_SUCCESS,
	GET_GLOBAL_PROCESSOR,
	REMOVE_GLOBAL_PROCESSOR
} from "../actions/actionTypes/index"


const initialState = {
	isProcessorsLoading: false,
	globalProcessor: { price: 0 }
}

const deviceProcessors = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_PROCESSORS_SUCCESS:
			return {
				...state,
				data: [...action.payload],
				isProcessorsLoading: true
			}
		case GET_GLOBAL_PROCESSOR:
			return {
				...state,
				globalProcessor: action.payload,
			}
		case REMOVE_GLOBAL_PROCESSOR:
			return {
				...state,
				globalProcessor: { price: 0 }
			}
		default:
			return state
	}
}



export default deviceProcessors;