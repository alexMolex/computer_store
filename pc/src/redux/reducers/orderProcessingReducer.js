import {
	FETCH_ORDER_SUCCESS,
	FETCH_USER_ORDERS_SUCCESS
} from "../actions/actionTypes/index"


const initialState = {
	isOrdersListLoading: false,
	isUserOrdersListLoading: false
}

const orderProcessing = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_ORDER_SUCCESS:
			return {
				...state,
				data: [...action.payload],
				isOrdersListLoading: true
			}
		case FETCH_USER_ORDERS_SUCCESS:
			return {
				...state,
				userOrderData: [...action.payload],
				isUserOrdersListLoading: true
			}
		default:
			return state
	}
}



export default orderProcessing;