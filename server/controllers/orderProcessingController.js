const uuid = require('uuid')
const path = require('path')
const ApiError = require('../error/apiError')
const { OrderProcessing, Order, Contacts, Processor, Videocard } = require('../models/models')


class OrderProcessingController {

	async create(req, res, next) {
		try {
			let { userName, adress, price, phoneNumber, userId, contacts, order } = req.body

			// const { img } = req.files
			// let fileName = uuid.v4() + ".jpg"
			// img.mv(path.resolve(__dirname, '..', 'static', fileName))

			const userOrder = await OrderProcessing.create({ userName, adress, price, phoneNumber, userId })

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
						RAM: i.RAM,
						SSD: i.SSD,
						storageVolume: i.storageVolume,
						overclocking: i.overclocking,
						orderProcessingId: userOrder.id,
						processorId: i.processorId,
						videocardId: i.videocardId,
					})
				)
			}

			return res.json(userOrder)
		} catch (error) {
			next(ApiError.badRequest(error.message))
		}

	}


	async get(req, res) {
		const orders = await OrderProcessing.findAll({
			include: [
				{ model: Contacts, as: 'contacts', required: true, },
				{
					model: Order, as: 'order', required: true,
					include: [
						{ model: Processor, as: 'processor' },
						{ model: Videocard, as: 'videocard' }]
				}
			],
		})
		return res.json(orders)
	}



	async getUserOrders(req, res) {
		const { userId } = req.params
		const order = await OrderProcessing.findAll({
			where: { userId },
			include: [
				{ model: Contacts, as: 'contacts' },
				{ model: Order, as: 'order' }
			]

		})

		return res.json(order)
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