import * as axios from "axios";
import jwt_decode from "jwt-decode";

const instance = axios.create({
	baseURL: process.env.REACT_APP_API_URL,

	// withCredentials: true,
})


const authInterceptor = config => {
	config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
	return config
}

instance.interceptors.request.use(authInterceptor)


export const getAuthUserData = {
	checkApi() {
		return instance.get('api/user/auth')
			.then(response => {
				return (jwt_decode(response.data.token));
			})
	},
	loginApi(email, password) {
		return instance.post('api/user/login', { email, password })
			.then(response => {
				localStorage.setItem('token', response.data.token)
				return jwt_decode(response.data.token)
			})
	},
	logOutApi() {
		localStorage.removeItem('token');
		window.location.reload()
	},
	registrationApi(email, password) {
		return instance.post('api/user/registration', { email, password, role: 'ADMIN' })
			.then(response => {
				localStorage.setItem('token', response.data.token)
				return jwt_decode(response.data.token)
			})
	},
}

// типы
export const getDeviceTypeData = {

	fetchTypesApi() {
		return instance.get('api/type')
			.then(response => {
				return response.data
			})
	},
	createTypeApi(type) {
		return instance.post('api/type', type)
	},
}

// бренды
export const getDeviceBrandData = {

	fetchBrandsApi() {
		return instance.get('api/brand')
			.then(response => {
				return response.data
			})
	},
	createBrandsApi(brand) {
		return instance.post('api/brand', brand)
	},
}

// процессоры
export const getDeviceProcessorData = {

	fetchProcessorsApi() {
		return instance.get('api/processor')
			.then(response => {
				return response.data
			})
	},

	updateProcessorPriceApi(processorId, updatePrice) {
		return instance.put('api/processor', { processorId, updatePrice })
			.then(response => {
				return response.data
			})
	},

	createProcessorApi(processor) {
		return instance.post('api/processor', processor)
	},
}

// видеокарты
export const getDeviceVideocardData = {

	fetchVideocarsdApi() {
		return instance.get('api/videocard')
			.then(response => {
				return response.data
			})
	},

	updateVideocardPriceApi(videocardId, updatePrice) {
		return instance.put('api/videocard', { videocardId, updatePrice })
			.then(response => {
				return response.data
			})
	},

	createVideocardApi(videocard) {
		return instance.post('api/videocard', videocard)
	},
}

//  ========= Корпус

export const getComputerCaseData = {

	fetchCasesApi(page) {
		return instance.get('api/case', {
			params: { page }
		})
			.then(response => response.data)
	},

	updateComputerCasePriceApi(computerCaseId, updatePrice) {
		return instance.put('api/case', { computerCaseId, updatePrice })
			.then(response => response.data)
	},

	createCaseApi(computerCase) {
		return instance.post('api/case', computerCase)
	},
}


// устройства
export const getDeviceData = {

	fetchDevicesApi(limit, page, brandId, typeId, processorId, videocardId, sortingType, sortingTable) {
		return instance.get('api/device', {
			params: {
				limit, page, brandId, typeId, processorId, videocardId, sortingType, sortingTable
			}
		})
			.then(response => {
				return response.data
			})
	},
	fetchOneDeviceApi(id) {
		return instance.get('api/device/' + id)
			.then(response => {
				return response.data
			})
	},

	createDeviceApi(device) {
		return instance.post('api/device', device)
	},

	updateDevicePriceApi(deviceId, updatePrice) {
		return instance.put('api/device', { deviceId, updatePrice })
			.then(response => {
				return response.data
			})
	},
}


//  =========== Устройства из конфигуратора

export const getUserConfigDeviceData = {

	fetchUserConfigDevicesApi(userId) {
		return instance.get('api/config', { params: { userId } })
			.then(response => {
				return response.data
			})
	},

	createUserConfigDeviceApi(configDevice) {
		return instance.post('api/config', configDevice)
			.then(response => {
				return response.data
			})
	},

	fetchOneConfigDeviceApi(id) {
		return instance.get('api/config/' + id)
			.then(response => {
				return response.data
			})
	},
	deleteUserConfigDeviceApi(id) {
		return instance.delete('api/config/' + id)
			.then(response => {
				return response.data
			})
	}
}



//  ======== Корзина

export const setBasketData = {
	fetchBasketDevicesApi(basketId, deviceId) {
		return instance.get('api/basket', {
			params: {
				basketId, deviceId
			}
		})
			.then(response => {
				return response.data.rows
			})
	},
	createBasketDevicesApi(basketId, deviceId) {
		return instance.post('api/basket', { basketId, deviceId })
			.then(response => {
				return response.data
			})
	},
	deleteBasketDeviceApi(id, basketId, deviceId) {
		return instance.delete('api/basket/' + id, {
			params: { basketId, deviceId }
		})
			.then(response => {
				return response.data
			})
	}
}



//  ========= обработка заказов

export const setOrderProcessingData = {

	createOrderApi(order) {
		return instance.post('api/order', order)
	},

	getOrderApi(page) {
		return instance.get('api/order', { params: { page } })
			.then(response => {
				return response.data
			})
	},

	updateOrderStatusApi(orderId, updateStatus) {
		return instance.put('api/order', { orderId, updateStatus })
			.then(response => {
				return response.data
			})
	},

	fetchOneOrderApi(id) {
		return instance.get('api/order/one/' + id)
			.then(response => {
				return response.data
			})
	},

	getUserOrdersApi(basketId) {
		return instance.get('api/order/' + basketId)
			.then(response => {
				return response.data
			})
	}
};


