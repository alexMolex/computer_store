const uuid = require('uuid')
const path = require('path')
const ApiError = require('../error/apiError')
const { OrderProcessing, Order, Contacts } = require('../models/models')

class OrderProcessingController {

	async create(req, res) {
		const { user_name, adress, price, user_id, contacts, order } = req.body

		const { img } = req.files
		let fileName = uuid.v4() + ".jpg"
		img.mv(path.resolve(__dirname, '..', 'static', fileName))

		const userOrder = await OrderProcessing.create({ user_name, adress, price, user_id, contacts, order, img: fileName })

		if (contacts) {
			contacts = JSON.parse(contacts)
			contacts.forEach(i =>
				Contacts.create({
					title: i.title,
					description: i.description,
					orderProcessingId: userOrder.id
				})
			)
		}

		if (order) {
			order = JSON.parse(order)
			order.forEach(i =>
				Order.create({
					processor: i.processor,
					videocard: i.videocard,
					RAM: i.RAM,
					orderProcessingId: userOrder.id
				})
			)
		}

		return res.json(userOrder)
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

module.exports = new OrderProcessingController()