import {
	FETCH_ORDER_SUCCESS,
	FETCH_USER_ORDERS_SUCCESS,
	CREATE_ORDER_FAILER,
	FETCH_ONE_ORDER_SUCCESS
} from "../actions/actionTypes/index"


const initialState = {
	isOrdersListLoading: false,
	isUserOrdersListLoading: false,
	userOrderData: [],
	data: [],
	orderStatusList: [
		"Идет подбор комплектующих",
		"Заказ в процессе сборки",
		"Заказ готов",
		"Отказ от сборки"
	],
	isCreateOrderFailer: false,
	isOneOrderDeviceLoading: false,
	oneOrder: null
}

const orderProcessing = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_ORDER_SUCCESS:
			return {
				...state,
				data: [...action.payload.rows],
				count: action.payload.count,
				isOrdersListLoading: true
			}
		case FETCH_USER_ORDERS_SUCCESS:
			return {
				...state,
				userOrderData: [...action.payload],
				userContactData: action.payload[0],
				isUserOrdersListLoading: true
			}
		case CREATE_ORDER_FAILER:
			return {
				...state,
				isCreateOrderFailer: action.payload
			}
		case FETCH_ONE_ORDER_SUCCESS:
			return {
				...state,
				oneOrder: action.payload,
				isOneOrderDeviceLoading: true
			}
		default:
			return state
	}
}



export default orderProcessing;