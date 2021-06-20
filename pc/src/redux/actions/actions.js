import {
	SEARCH_COMPUTER,
	SET_USER_DATA,
	SET_USER_FAILER,
	SET_USER_SUCCESS,
	SET_USER_LOGIN_START,
	SET_USER_LOGIN_FAILER,
	SET_USER_LOGIN_SUCCESS,
	SET_USER_LOGOUT_SUCCESS,
	SET_USER_REGISTRATION_START,
	SET_USER_REGISTRATION_FAILER,
	SET_USER_REGISTRATION_SUCCESS,
	FETCH_TYPES_START,
	FETCH_TYPES_FAILER,
	FETCH_TYPES_SUCCESS,
	FETCH_BRAND_START,
	FETCH_BRAND_FAILER,
	FETCH_BRAND_SUCCESS,
	FETCH_DEVICE_START,
	FETCH_DEVICE_FAILER,
	FETCH_DEVICE_SUCCESS,
	FETCH_ONE_DEVICE_START,
	FETCH_ONE_DEVICE_FAILER,
	FETCH_ONE_DEVICE_SUCCESS,
	CREATE_DEVICE_TYPE_START,
	CREATE_DEVICE_TYPE_FAILER,
	CREATE_DEVICE_TYPE_SUCCESS,
	CREATE_DEVICE_BRAND_START,
	CREATE_DEVICE_BRAND_FAILER,
	CREATE_DEVICE_BRAND_SUCCESS,
	CREATE_DEVICE_START,
	CREATE_DEVICE_FAILER,
	CREATE_DEVICE_SUCCESS,
	FETCH_PROCESSORS_START,
	FETCH_PROCESSORS_FAILER,
	FETCH_PROCESSORS_SUCCESS,
	CREATE_DEVICE_PROCESSOR_START,
	CREATE_DEVICE_PROCESSOR_FAILER,
	CREATE_DEVICE_PROCESSOR_SUCCESS,
	FETCH_VIDEOCARDS_START,
	FETCH_VIDEOCARDS_FAILER,
	FETCH_VIDEOCARDS_SUCCESS,
	CREATE_DEVICE_VIDEOCARD_START,
	CREATE_DEVICE_VIDEOCARD_FAILER,
	CREATE_DEVICE_VIDEOCARD_SUCCESS,
	FETCH_BASKET_DEVICES_START,
	FETCH_BASKET_DEVICES_FAILER,
	FETCH_BASKET_DEVICES_SUCCESS,
	CREATE_BASKET_DEVICES_START,
	CREATE_BASKET_DEVICES_FAILER,
	CREATE_BASKET_DEVICES_SUCCESS,
	DELETE_BASKET_DEVICES_START,
	DELETE_BASKET_DEVICES_FAILER,
	DELETE_BASKET_DEVICES_SUCCESS,
} from "./actionTypes"
import {
	getAuthUserData,
	getDeviceTypeData,
	getDeviceBrandData,
	getDeviceData,
	getDeviceProcessorData,
	getDeviceVideocardData,
	setBasketData,
} from "../../api/index"



export const serchComputers = text => dispatch => {
	dispatch({
		type: SEARCH_COMPUTER,
		payload: text
	})

}

// Авторизация

export const setAuthUserData = () => async dispatch => {
	dispatch({
		type: SET_USER_DATA
	});

	try {
		dispatch({
			type: SET_USER_SUCCESS,
			payload: await getAuthUserData.checkApi()
		})
	} catch (error) {
		dispatch({
			type: SET_USER_FAILER,
			payload: error,
			error: true
		})
	}
}

export const setLoginAuthUserData = (email, password) => async dispatch => {
	dispatch({
		type: SET_USER_LOGIN_START
	});

	try {
		dispatch({
			type: SET_USER_LOGIN_SUCCESS,
			payload: await getAuthUserData.loginApi(email, password)
		})
	} catch (error) {
		dispatch({
			type: SET_USER_LOGIN_FAILER,
			payload: error,
			error: true
		})
	}
}


export const setLogoutUser = () => dispatch => {
	dispatch({
		type: SET_USER_LOGOUT_SUCCESS,
		payload: getAuthUserData.logOutApi()
	})
}

export const setRegistrationAuthUserData = (email, password) => async dispatch => {
	dispatch({
		type: SET_USER_REGISTRATION_START
	});

	try {
		dispatch({
			type: SET_USER_REGISTRATION_SUCCESS,
			payload: await getAuthUserData.registrationApi(email, password)
		})
	} catch (error) {
		dispatch({
			type: SET_USER_REGISTRATION_FAILER,
			payload: error,
			error: true
		})
	}
}


// Типы

export const setDeviceTypeData = () => async dispatch => {
	dispatch({
		type: FETCH_TYPES_START
	});

	try {
		dispatch({
			type: FETCH_TYPES_SUCCESS,
			payload: await getDeviceTypeData.fetchTypesApi()
		})
	} catch (error) {
		dispatch({
			type: FETCH_TYPES_FAILER,
			payload: error,
			error: true
		})
	}
}

export const setCreateDeviceType = (type) => async dispatch => {
	dispatch({
		type: CREATE_DEVICE_TYPE_START
	});

	try {
		dispatch({
			type: CREATE_DEVICE_TYPE_SUCCESS,
			payload: await getDeviceTypeData.createTypeApi(type)
		})
	} catch (error) {
		dispatch({
			type: CREATE_DEVICE_TYPE_FAILER,
			payload: error,
			error: true
		})
	}
}

// Бренды

export const setDeviceBrandData = () => async dispatch => {
	dispatch({
		type: FETCH_BRAND_START
	});

	try {
		dispatch({
			type: FETCH_BRAND_SUCCESS,
			payload: await getDeviceBrandData.fetchBrandsApi()
		})
	} catch (error) {
		dispatch({
			type: FETCH_BRAND_FAILER,
			payload: error,
			error: true
		})
	}
}

export const setCreateDeviceBrand = (brand) => async dispatch => {
	dispatch({
		type: CREATE_DEVICE_BRAND_START
	});

	try {
		dispatch({
			type: CREATE_DEVICE_BRAND_SUCCESS,
			payload: await getDeviceBrandData.createBrandsApi(brand)
		})
	} catch (error) {
		dispatch({
			type: CREATE_DEVICE_BRAND_FAILER,
			payload: error,
			error: true
		})
	}
}


// Устройства

export const setDeviceData = (brandId, typeId, processorId, videocardId, limit, page) => async dispatch => {
	dispatch({
		type: FETCH_DEVICE_START
	});

	try {
		dispatch({
			type: FETCH_DEVICE_SUCCESS,
			payload: await getDeviceData.fetchDevicesApi(brandId, typeId, processorId, videocardId, limit, page)
		})
	} catch (error) {
		dispatch({
			type: FETCH_DEVICE_FAILER,
			payload: error,
			error: true
		})
	}
}


export const setOneDeviceData = (id) => async dispatch => {
	dispatch({
		type: FETCH_ONE_DEVICE_START
	});

	try {
		dispatch({
			type: FETCH_ONE_DEVICE_SUCCESS,
			payload: await getDeviceData.fetchOneDeviceApi(id)
		})
	} catch (error) {
		dispatch({
			type: FETCH_ONE_DEVICE_FAILER,
			payload: error,
			error: true
		})
	}
}



export const setCreateDevice = (device) => async dispatch => {
	dispatch({
		type: CREATE_DEVICE_START
	});

	try {
		dispatch({
			type: CREATE_DEVICE_SUCCESS,
			payload: await getDeviceData.createDeviceApi(device)
		})
	} catch (error) {
		dispatch({
			type: CREATE_DEVICE_FAILER,
			payload: error,
			error: true
		})
	}
}


// Процессоры


export const setDeviceProcessorData = () => async dispatch => {
	dispatch({
		type: FETCH_PROCESSORS_START
	});

	try {
		dispatch({
			type: FETCH_PROCESSORS_SUCCESS,
			payload: await getDeviceProcessorData.fetchProcessorsApi()
		})
	} catch (error) {
		dispatch({
			type: FETCH_PROCESSORS_FAILER,
			payload: error,
			error: true
		})
	}
}

export const setCreateDeviceProcessor = (processor) => async dispatch => {
	dispatch({
		type: CREATE_DEVICE_PROCESSOR_START
	});

	try {
		dispatch({
			type: CREATE_DEVICE_PROCESSOR_SUCCESS,
			payload: await getDeviceProcessorData.createProcessorApi(processor)
		})
	} catch (error) {
		dispatch({
			type: CREATE_DEVICE_PROCESSOR_FAILER,
			payload: error,
			error: true
		})
	}
}



// Видеокарты

export const setDeviceVideocardData = () => async dispatch => {
	dispatch({
		type: FETCH_VIDEOCARDS_START
	});

	try {
		dispatch({
			type: FETCH_VIDEOCARDS_SUCCESS,
			payload: await getDeviceVideocardData.fetchVideocarsdApi()
		})
	} catch (error) {
		dispatch({
			type: FETCH_VIDEOCARDS_FAILER,
			payload: error,
			error: true
		})
	}
}


export const setCreateDeviceVideocard = (videocard) => async dispatch => {
	dispatch({
		type: CREATE_DEVICE_VIDEOCARD_START
	});

	try {
		dispatch({
			type: CREATE_DEVICE_VIDEOCARD_SUCCESS,
			payload: await getDeviceVideocardData.createVideocardApi(videocard)
		})
	} catch (error) {
		dispatch({
			type: CREATE_DEVICE_VIDEOCARD_FAILER,
			payload: error,
			error: true
		})
	}
}

// ============ корзина



export const getBasketDevicesData = (basketId, deviceId) => async dispatch => {
	dispatch({
		type: FETCH_BASKET_DEVICES_START
	});

	try {
		dispatch({
			type: FETCH_BASKET_DEVICES_SUCCESS,
			payload: await setBasketData.fetchBasketDevicesApi(basketId, deviceId)
		})
	} catch (error) {
		dispatch({
			type: FETCH_BASKET_DEVICES_FAILER,
			payload: error,
			error: true
		})
	}
}

export const createBasketDevicesData = (basketId, deviceId) => async dispatch => {
	dispatch({
		type: CREATE_BASKET_DEVICES_START
	});

	try {
		dispatch({
			type: CREATE_BASKET_DEVICES_SUCCESS,
			payload: await setBasketData.createBasketDevicesApi(basketId, deviceId)
		})
	} catch (error) {
		dispatch({
			type: CREATE_BASKET_DEVICES_FAILER,
			payload: error,
			error: true
		})
	}
}


export const deleteBasketDevicesData = (id) => async dispatch => {
	dispatch({
		type: DELETE_BASKET_DEVICES_START
	});

	try {
		dispatch({
			type: DELETE_BASKET_DEVICES_SUCCESS,
			payload: await setBasketData.deleteBasketDeviceApi(id)
		})
	} catch (error) {
		dispatch({
			type: DELETE_BASKET_DEVICES_FAILER,
			payload: error,
			error: true
		})
	}
}

