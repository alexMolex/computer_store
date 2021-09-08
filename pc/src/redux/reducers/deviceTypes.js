import {
	FETCH_TYPES_SUCCESS,
	GET_GLOBAL_TYPES,
	REMOVE_GLOBAL_TYPES,
} from "../actions/actionTypes/index"


const initialState = {
	isTypeLoading: false,
	globalType: {}
}

const deviceTypes = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_TYPES_SUCCESS:
			return {
				...state,
				data: [...action.payload],
				isTypeLoading: true
			}
		case GET_GLOBAL_TYPES:
			return {
				...state,
				globalType: action.payload,
			}
		case REMOVE_GLOBAL_TYPES:
			return {
				...state,
				globalType: {}
			}
		default:
			return state
	}
}



export default deviceTypes;