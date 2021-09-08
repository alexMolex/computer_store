import {
	GET_GLOBAL_SORTING_TYPES,
	REMOVE_GLOBAL_SORTING_TYPES,
	GET_GLOBAL_SORTING_TABLE,
	REMOVE_GLOBAL_SORTING_TABLE,
	GET_GLOBAL_PAGINATION,
	REMOVE_GLOBAL_PAGINATION,
} from "../actions/actionTypes/index"


const initialState = {
	sortingType: { "type": "от меньшего к большему", "keyword": "ASC" },
	sortingTable: { "type": "по цене", "value": "totalPrice" },
	page: 1,
}

const sortingReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_GLOBAL_SORTING_TYPES:
			return {
				...state,
				sortingType: action.payload,
			}
		case REMOVE_GLOBAL_SORTING_TYPES:
			return {
				...state,
				sortingType: { "type": "от меньшего к большему", "keyword": "ASC" }
			}
		case GET_GLOBAL_SORTING_TABLE:
			return {
				...state,
				sortingTable: action.payload,
			}
		case REMOVE_GLOBAL_SORTING_TABLE:
			return {
				...state,
				sortingTable: { "type": "по цене", "value": "totalPrice" },
			}

		case GET_GLOBAL_PAGINATION:
			return {
				...state,
				page: action.payload,
			}
		case REMOVE_GLOBAL_PAGINATION:
			return {
				...state,
				page: 1
			}
		default:
			return state
	}
}



export default sortingReducer;