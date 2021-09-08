import {
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
	REMOVE_DEVICE_IS_LOADING,
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
	UPDATE_DEVICE_PRICE_START,
	UPDATE_DEVICE_PRICE_FAILER,
	UPDATE_DEVICE_PRICE_SUCCESS,
	FETCH_PROCESSORS_START,
	FETCH_PROCESSORS_FAILER,
	FETCH_PROCESSORS_SUCCESS,
	GET_GLOBAL_PROCESSOR,
	REMOVE_GLOBAL_PROCESSOR,
	REMOVE_GLOBAL_VIDEOCARD,
	CREATE_DEVICE_PROCESSOR_START,
	CREATE_DEVICE_PROCESSOR_FAILER,
	CREATE_DEVICE_PROCESSOR_SUCCESS,
	FETCH_VIDEOCARDS_START,
	FETCH_VIDEOCARDS_FAILER,
	FETCH_VIDEOCARDS_SUCCESS,
	GET_GLOBAL_VIDEOCARD,
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
	SET_GLOBAL_BASKET_TOGGLE,
	CREATE_ORDER_START,
	CREATE_ORDER_FAILER,
	CREATE_ORDER_SUCCESS,
	UPDATE_ORDER_STATUS_START,
	UPDATE_ORDER_STATUS_FAILER,
	UPDATE_ORDER_STATUS_SUCCESS,
	FETCH_ORDER_START,
	FETCH_ORDER_FAILER,
	FETCH_ORDER_SUCCESS,
	FETCH_ONE_ORDER_START,
	FETCH_ONE_ORDER_FAILER,
	FETCH_ONE_ORDER_SUCCESS,
	FETCH_USER_ORDERS_START,
	FETCH_USER_ORDERS_FAILER,
	FETCH_USER_ORDERS_SUCCESS,
	CREATE_USER_CONFIG_DEVICE_START,
	CREATE_USER_CONFIG_DEVICE_FAILER,
	CREATE_USER_CONFIG_DEVICE_SUCCESS,
	FETCH_USER_CONFIG_DEVICE_START,
	FETCH_USER_CONFIG_DEVICE_FAILER,
	FETCH_USER_CONFIG_DEVICE_SUCCESS,
	FETCH_ONE_USER_CONFIG_DEVICE_START,
	FETCH_ONE_USER_CONFIG_DEVICE_FAILER,
	FETCH_ONE_USER_CONFIG_DEVICE_SUCCESS,
	REMOVE_IS_ONE_USER_CONFIG_LOADING,
	DELETE_USER_CONFIG_DEVICE_START,
	DELETE_USER_CONFIG_DEVICE_FAILER,
	DELETE_USER_CONFIG_DEVICE_SUCCESS,
	CREATE_COMPUTER_CASE_START,
	CREATE_COMPUTER_CASE_FAILER,
	CREATE_COMPUTER_CASE_SUCCESS,
	FETCH_COMPUTER_CASE_START,
	FETCH_COMPUTER_CASE_FAILER,
	FETCH_COMPUTER_CASE_SUCCESS,
	UPDATE_PROCESSOR_PRICE_START,
	UPDATE_PROCESSOR_PRICE_FAILER,
	UPDATE_PROCESSOR_PRICE_SUCCESS,
	UPDATE_COMPUTER_CASE_PRICE_START,
	UPDATE_COMPUTER_CASE_PRICE_FAILER,
	UPDATE_COMPUTER_CASE_PRICE_SUCCESS,
	UPDATE_VIDEOCARD_PRICE_START,
	UPDATE_VIDEOCARD_PRICE_FAILER,
	UPDATE_VIDEOCARD_PRICE_SUCCESS,
	GET_GLOBAL_TYPES,
	REMOVE_GLOBAL_TYPES,
	GET_GLOBAL_SORTING_TYPES,
	REMOVE_GLOBAL_SORTING_TYPES,
	GET_GLOBAL_SORTING_TABLE,
	REMOVE_GLOBAL_SORTING_TABLE,
	GET_GLOBAL_PAGINATION,
	REMOVE_GLOBAL_PAGINATION,
	GET_GLOBAL_BRAND,
	REMOVE_GLOBAL_BRAND,
	ADD_DEVICE_TO_COMPARE_TURN,
	REMOVE_DEVICE_FROM_COMPARE_TURN,
	SET_COMPARE_DEVICE_INDEX1,
	SET_COMPARE_DEVICE_INDEX2,
} from "./actionTypes"
import {
	getAuthUserData,
	getDeviceTypeData,
	getDeviceBrandData,
	getDeviceData,
	getDeviceProcessorData,
	getDeviceVideocardData,
	getComputerCaseData,
	setBasketData,

	setOrderProcessingData,
	getUserConfigDeviceData,
} from "../../api/index"



// ========================== Авторизация

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
		let response = await getAuthUserData.loginApi(email, password);
		dispatch({
			type: SET_USER_LOGIN_SUCCESS,
			payload: response,
		})
	} catch (error) {
		dispatch({
			type: SET_USER_LOGIN_FAILER,
			payload: error,

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


// ==================== Типы

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


export const setGlobalType = type => dispatch => {
	dispatch({
		type: GET_GLOBAL_TYPES,
		payload: type,
	})
}

export const removeGlobalType = () => dispatch => {
	dispatch({
		type: REMOVE_GLOBAL_TYPES,
	})
}

// ================== Бренды

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


export const setGlobalBrand = brand => dispatch => {
	dispatch({
		type: GET_GLOBAL_BRAND,
		payload: brand,
	})
}

export const removeGlobalBrand = () => dispatch => {
	dispatch({
		type: REMOVE_GLOBAL_BRAND,
	})
}


// ================= сортировка



export const setGlobalSortingTypes = sortingType => dispatch => {
	dispatch({
		type: GET_GLOBAL_SORTING_TYPES,
		payload: sortingType,
	})
}

export const removeGlobalSortingTypes = () => dispatch => {
	dispatch({
		type: REMOVE_GLOBAL_SORTING_TYPES,
	})
}


export const setGlobalSortingTable = sortingTable => dispatch => {
	dispatch({
		type: GET_GLOBAL_SORTING_TABLE,
		payload: sortingTable,
	})
}

export const removeGlobalSortingTable = () => dispatch => {
	dispatch({
		type: REMOVE_GLOBAL_SORTING_TABLE,
	})
}


export const setGlobalPagination = page => dispatch => {
	dispatch({
		type: GET_GLOBAL_PAGINATION,
		payload: page,
	})
}

export const removeGlobalPagination = () => dispatch => {
	dispatch({
		type: REMOVE_GLOBAL_PAGINATION,
	})
}

// ================ Устройства

export const setDeviceData = (limit, page, brandId, typeId, processorId, videocardId, sortingType, sortingTable) => async dispatch => {
	dispatch({
		type: FETCH_DEVICE_START
	});

	try {
		dispatch({
			type: FETCH_DEVICE_SUCCESS,
			payload: await getDeviceData.fetchDevicesApi(limit, page, brandId, typeId, processorId, videocardId, sortingType, sortingTable)
		})
	} catch (error) {
		dispatch({
			type: FETCH_DEVICE_FAILER,
			payload: error,
		})
	}
}

export const removeDeviceIsLoading = () => dispatch => {
	dispatch({
		type: REMOVE_DEVICE_IS_LOADING,
	})
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
			payload: await getDeviceData.createDeviceApi(device),
			alert: true,
		})
	} catch (error) {
		dispatch({
			type: CREATE_DEVICE_FAILER,
			payload: true,
		})
		setTimeout(() => {
			dispatch({
				type: CREATE_DEVICE_FAILER,
				payload: false,
			})
		}, 3000)
	}
}

export const setUpdateDevicePrice = (deviceId, updatePrice) => async dispatch => {
	dispatch({
		type: UPDATE_DEVICE_PRICE_START
	});

	try {
		dispatch({
			type: UPDATE_DEVICE_PRICE_SUCCESS,
			payload: await getDeviceData.updateDevicePriceApi(deviceId, updatePrice)
		})
	} catch (error) {
		dispatch({
			type: UPDATE_DEVICE_PRICE_FAILER,
			payload: error,
		})
	}
}

// ================= Процессоры


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


export const setUpdateProcessorPriceData = (processorId, updatePrice) => async dispatch => {
	dispatch({
		type: UPDATE_PROCESSOR_PRICE_START
	});

	try {
		dispatch({
			type: UPDATE_PROCESSOR_PRICE_SUCCESS,
			payload: await getDeviceProcessorData.updateProcessorPriceApi(processorId, updatePrice)
		})
	} catch (error) {
		dispatch({
			type: UPDATE_PROCESSOR_PRICE_FAILER,
			payload: error,
			error: true
		})
	}
}

export const setGlobalProcessor = processor => dispatch => {
	dispatch({
		type: GET_GLOBAL_PROCESSOR,
		payload: processor,
	})
}

export const removeGlobalProcessor = () => dispatch => {
	dispatch({
		type: REMOVE_GLOBAL_PROCESSOR,
	})
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



//======================= Видеокарты

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

export const setUpdateVideocardPriceData = (videocardId, updatePrice) => async dispatch => {
	dispatch({
		type: UPDATE_VIDEOCARD_PRICE_START
	});

	try {
		dispatch({
			type: UPDATE_VIDEOCARD_PRICE_SUCCESS,
			payload: await getDeviceVideocardData.updateVideocardPriceApi(videocardId, updatePrice)
		})
	} catch (error) {
		dispatch({
			type: UPDATE_VIDEOCARD_PRICE_FAILER,
			payload: error,
			error: true
		})
	}
}

export const setGlobalVideocard = videocard => dispatch => {
	dispatch({
		type: GET_GLOBAL_VIDEOCARD,
		payload: videocard,
	})
}

export const removeGlobalVideocard = () => dispatch => {
	dispatch({
		type: REMOVE_GLOBAL_VIDEOCARD,
	})
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



//  ============ Корпус

export const setComputerCaseData = (page) => async dispatch => {
	dispatch({
		type: FETCH_COMPUTER_CASE_START
	});

	try {
		dispatch({
			type: FETCH_COMPUTER_CASE_SUCCESS,
			payload: await getComputerCaseData.fetchCasesApi(page)
		})
	} catch (error) {
		dispatch({
			type: FETCH_COMPUTER_CASE_FAILER,
			payload: error,
			error: true
		})
	}
}


export const setUpdateComputerCasePriceData = (computerCaseId, updatePrice) => async dispatch => {
	dispatch({
		type: UPDATE_COMPUTER_CASE_PRICE_START
	});

	try {
		dispatch({
			type: UPDATE_COMPUTER_CASE_PRICE_SUCCESS,
			payload: await getComputerCaseData.updateComputerCasePriceApi(computerCaseId, updatePrice)
		})
	} catch (error) {
		dispatch({
			type: UPDATE_COMPUTER_CASE_PRICE_FAILER,
			payload: error,
			error: true
		})
	}
}

export const setCreateComputerCase = (computerCase) => async dispatch => {
	dispatch({
		type: CREATE_COMPUTER_CASE_START
	});

	try {
		dispatch({
			type: CREATE_COMPUTER_CASE_SUCCESS,
			payload: await getComputerCaseData.createCaseApi(computerCase)
		})
	} catch (error) {
		dispatch({
			type: CREATE_COMPUTER_CASE_FAILER,
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

export const setBasketConfigDeviceToggle = (boolean) => dispatch => {
	dispatch({
		type: SET_GLOBAL_BASKET_TOGGLE,
		payload: boolean,
	})
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



// ========== Обработка заказов


export const createOrderProcessingData = (order) => async dispatch => {
	dispatch({
		type: CREATE_ORDER_START
	});

	try {
		dispatch({
			type: CREATE_ORDER_SUCCESS,
			payload: await setOrderProcessingData.createOrderApi(order)
		})
	} catch (error) {
		dispatch({
			type: CREATE_ORDER_FAILER,
			payload: true,
			error: true
		})
		setTimeout(() => {
			dispatch({
				type: CREATE_ORDER_FAILER,
				payload: false,
				error: false
			})
		}, 3000)
	}
}


export const getOneOrderProcessingData = (id) => async dispatch => {
	dispatch({
		type: FETCH_ONE_ORDER_START
	});

	try {
		dispatch({
			type: FETCH_ONE_ORDER_SUCCESS,
			payload: await setOrderProcessingData.fetchOneOrderApi(id)
		})
	} catch (error) {
		dispatch({
			type: FETCH_ONE_ORDER_FAILER,
			payload: error,
		})
	}
}


export const updateOrderStatusData = (orderId, updateStatus) => async dispatch => {
	dispatch({
		type: UPDATE_ORDER_STATUS_START
	});

	try {
		dispatch({
			type: UPDATE_ORDER_STATUS_SUCCESS,
			payload: await setOrderProcessingData.updateOrderStatusApi(orderId, updateStatus)
		})
	} catch (error) {
		dispatch({
			type: UPDATE_ORDER_STATUS_FAILER,
			payload: error,
			error: true
		})
	}
}

export const getOrderProcessingData = (page) => async dispatch => {
	dispatch({
		type: FETCH_ORDER_START
	});

	try {
		dispatch({
			type: FETCH_ORDER_SUCCESS,
			payload: await setOrderProcessingData.getOrderApi(page)
		})
	} catch (error) {
		dispatch({
			type: FETCH_ORDER_FAILER,
			payload: error,
			error: true
		})
	}
}



export const getUserOrdersProcessingData = (basketId) => async dispatch => {
	dispatch({
		type: FETCH_USER_ORDERS_START
	});

	try {
		dispatch({
			type: FETCH_USER_ORDERS_SUCCESS,
			payload: await setOrderProcessingData.getUserOrdersApi(basketId)
		})
	} catch (error) {
		dispatch({
			type: FETCH_USER_ORDERS_FAILER,
			payload: error,
			error: true
		})
	}
}




// ========= Сконфигурированные устройства


export const createUserConfigDevice = (configDevice) => async dispatch => {
	dispatch({
		type: CREATE_USER_CONFIG_DEVICE_START
	});

	try {
		dispatch({
			type: CREATE_USER_CONFIG_DEVICE_SUCCESS,
			payload: await getUserConfigDeviceData.createUserConfigDeviceApi(configDevice),
			alert: true,
		})
		setTimeout(() => {
			dispatch({
				type: CREATE_USER_CONFIG_DEVICE_SUCCESS,
				alert: false,
			})
		}, 3000)
	} catch (error) {
		dispatch({
			type: CREATE_USER_CONFIG_DEVICE_FAILER,
			payload: true,
			error: true
		})
		setTimeout(() => {
			dispatch({
				type: CREATE_USER_CONFIG_DEVICE_FAILER,
				payload: false,
				error: false
			})
		}, 3000)
	}
}


export const getUserConfigDevices = (userId, page) => async dispatch => {
	dispatch({
		type: FETCH_USER_CONFIG_DEVICE_START
	});

	try {
		dispatch({
			type: FETCH_USER_CONFIG_DEVICE_SUCCESS,
			payload: await getUserConfigDeviceData.fetchUserConfigDevicesApi(userId, page)
		})
	} catch (error) {
		dispatch({
			type: FETCH_USER_CONFIG_DEVICE_FAILER,
			payload: error,
			error: true
		})
	}
}


export const getOneUserConfigDevice = (userId, id) => async dispatch => {
	dispatch({
		type: FETCH_ONE_USER_CONFIG_DEVICE_START
	});

	try {
		dispatch({
			type: FETCH_ONE_USER_CONFIG_DEVICE_SUCCESS,
			payload: await getUserConfigDeviceData.fetchOneConfigDeviceApi(userId, id)
		})
	} catch (error) {
		dispatch({
			type: FETCH_ONE_USER_CONFIG_DEVICE_FAILER,
			payload: error,
			error: true
		})
	}
}

export const removeIsOneUserConfigLoading = () => dispatch => {
	dispatch({
		type: REMOVE_IS_ONE_USER_CONFIG_LOADING,
	})
}


export const deleteUserConfigDevice = (id) => async dispatch => {
	dispatch({
		type: DELETE_USER_CONFIG_DEVICE_START
	});

	try {
		dispatch({
			type: DELETE_USER_CONFIG_DEVICE_SUCCESS,
			payload: await getUserConfigDeviceData.deleteUserConfigDeviceApi(id)
		})
	} catch (error) {
		dispatch({
			type: DELETE_USER_CONFIG_DEVICE_FAILER,
			payload: error,
			error: true
		})
	}
}



// ============= cравнение 

export const setCompareDeviceIndext1 = (index) => dispatch => {
	dispatch({
		type: SET_COMPARE_DEVICE_INDEX1,
		payload: index
	})
}

export const setCompareDeviceIndext2 = (index) => dispatch => {
	dispatch({
		type: SET_COMPARE_DEVICE_INDEX2,
		payload: index
	})
}

export const addDeviceToCompareTurn = (device) => dispatch => {
	dispatch({
		type: ADD_DEVICE_TO_COMPARE_TURN,
		payload: device
	})
}

export const removeDeviceFromCompareTurn = (device) => dispatch => {
	dispatch({
		type: REMOVE_DEVICE_FROM_COMPARE_TURN,
		payload: device
	})
}
