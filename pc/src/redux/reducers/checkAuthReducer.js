import {
	SET_USER_SUCCESS,
	SET_USER_LOGIN_SUCCESS,
	SET_USER_REGISTRATION_SUCCESS,
	SET_USER_LOGOUT_SUCCESS
} from "../actions/actionTypes/index"


const initialState = {
	id: null,
	email: null,
	role: null,
	isAuth: false
}

const checkAuthReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_SUCCESS:
			return {
				...state,
				...action.payload,
				isAuth: true
			}
		case SET_USER_LOGIN_SUCCESS:
			return {
				...state,
				...action.payload,
				isAuth: true
			}
		case SET_USER_REGISTRATION_SUCCESS:
			return {
				...state,
				...action.payload,
				isAuth: true
			}
		case SET_USER_LOGOUT_SUCCESS:
			return {
				...state,
				isAuth: false
			}
		default:
			return state
	}
}



export default checkAuthReducer;