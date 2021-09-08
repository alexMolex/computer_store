import {
	FETCH_BRAND_SUCCESS,
	GET_GLOBAL_BRAND,
	REMOVE_GLOBAL_BRAND,
} from "../actions/actionTypes/index"


const initialState = {
	isBrandLoading: false,
	globalBrand: {},
}

const deviceBrands = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_BRAND_SUCCESS:
			return {
				...state,
				data: [...action.payload],
				isBrandLoading: true
			}
		case GET_GLOBAL_BRAND:
			return {
				...state,
				globalBrand: action.payload,
			}
		case REMOVE_GLOBAL_BRAND:
			return {
				...state,
				globalBrand: {}
			}
		default:
			return state
	}
}



export default deviceBrands;