import {
	FETCH_BRAND_SUCCESS,
	// CREATE_DEVICE_BRAND_SUCCESS
} from "../actions/actionTypes/index"


const initialState = {
	isBrandLoading: false,
}

const deviceBrands = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_BRAND_SUCCESS:
			return {
				...state,
				data: [...action.payload],
				isBrandLoading: true
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



export default deviceBrands;