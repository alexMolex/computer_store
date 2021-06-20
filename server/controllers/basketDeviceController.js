const ApiError = require('../error/apiError')
const { BasketDevice, Basket } = require('../models/models')

class BasketDeviceController {

	async create(req, res) {
		const { basketId, deviceId } = req.body
		const basket_device = await BasketDevice.create({ basketId, deviceId })
		return res.json(basket_device)
	}

	async get(req, res) {
		const { basketId, deviceId } = req.query
		let basket
		if (basketId && !deviceId) {
			basket = await BasketDevice.findAndCountAll({
				where: { basketId }
			})
		}

		return res.json(basket)
	}

	async delete(req, res, next) {
		try {
			const { id } = req.params
			const deleted = await BasketDevice.findOne({ where: { id } })
			if (!deleted) {
				console.log("err");
			}
			deleted.destroy(id);
			return res.json(deleted)
		} catch (error) {
			next(ApiError.badRequest(error.message))
		}

	}


}

module.exports = new BasketDeviceController()