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
	createVideocardApi(videocard) {
		return instance.post('api/videocard', videocard)
	},
}

// устройства
export const getDeviceData = {

	fetchDevicesApi(brandId, typeId, processorId, videocardId, limit, page) {
		return instance.get('api/device', {
			params: {
				brandId, typeId, processorId, videocardId, limit, page
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
	getOneDeviceForBasket(id) {
		return instance.get('http://localhost:5000/api/device/' + id)

	},
	createDeviceApi(device) {
		return instance.post('api/device', device)
	},
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
			params: {
				basketId, deviceId
			}
		})
			.then(response => {
				return response.data
			})
	}
}
