import {
	SET_USER_SUCCESS,
	SET_USER_LOGIN_SUCCESS,
	SET_USER_REGISTRATION_SUCCESS,
	SET_USER_LOGOUT_SUCCESS,
	SET_USER_LOGIN_FAILER,
	SET_USER_REGISTRATION_FAILER
} from "../actions/actionTypes/index"


const initialState = {
	id: null,
	email: null,
	role: null,
	isAuth: false,
	isLoginErrorMessageReceived: false,
	isRegistrationErrorMessageReceived: false
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
		case SET_USER_LOGIN_FAILER:
			if (action.payload.message === 'Request failed with status code 404') {
				return {
					...state,
					loginErrorMessage: "Пользователя с таким e-mail не существует",
					isLoginErrorMessageReceived: true
				}
			} else {
				return {
					...state,
					loginErrorMessage: "Введен неверный пароль",
					isLoginErrorMessageReceived: true
				}
			}
		case SET_USER_REGISTRATION_FAILER:
			return {
				...state,
				registrationErrorMessage: "Пользователь с таким email уже существует",
				isRegistrationErrorMessageReceived: true
			}
		default:
			return state
	}
}



export default checkAuthReducer;