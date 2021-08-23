const ApiError = require('../error/apiError')
const { OrderProcessing, Order, Contacts, ComputerCase, Processor, Videocard } = require('../models/models')


class OrderProcessingController {

	async create(req, res, next) {
		try {
			let { userName, adress, price, phoneNumber, remark, status, userId, contacts, order } = req.body


			const userOrder = await OrderProcessing.create({ userName, adress, price, phoneNumber, remark, status, userId })

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
						computerCaseId: i.computerCaseId
					})
				)
			}

			return res.json(userOrder)
		} catch (error) {
			next(ApiError.badRequest(error.message))
		}

	}


	async get(req, res) {
		let { page } = req.query
		page = page || 1
		let limit = 2
		let offset = page * limit - limit
		const orders = await OrderProcessing.findAndCountAll({
			include: [
				{ model: Contacts, as: 'contacts', required: true, },
				{
					model: Order, as: 'order', required: true,
					include: [
						{ model: Processor, as: 'processor' },
						{ model: Videocard, as: 'videocard' },
						{ model: ComputerCase, as: 'computer_case' },

					]
				}
			],
			limit, offset,
			order: [['createdAt', 'DESC']]
		})
		return res.json(orders)
	}



	async getUserOrders(req, res) {
		const { userId } = req.params
		const order = await OrderProcessing.findAll({
			where: { userId },
			include: [
				{ model: Contacts, as: 'contacts' },
				{
					model: Order, as: 'order',
					include: [
						{ model: Processor, as: 'processor' },
						{ model: Videocard, as: 'videocard' },
						{ model: ComputerCase, as: 'computer_case' },
					]
				}
			],
			order: [['id', 'DESC']]

		})

		return res.json(order)
	}

	async update(req, res, next) {
		try {
			let { orderId, updateStatus } = req.body

			const updateOrder = await OrderProcessing.update(
				{ status: updateStatus },
				{
					where: { id: orderId }
				},
			)

			return res.json(updateOrder)
		} catch (error) {
			next(ApiError.badRequest(error.message))
		}
	}



	async getOne(req, res) {
		const { id } = req.params
		const oneOrder = await OrderProcessing.findOne({
			where: { id },
			include: [
				{ model: Contacts, as: 'contacts' },
				{
					model: Order, as: 'order',
					include: [
						{ model: Processor, as: 'processor' },
						{ model: Videocard, as: 'videocard' },
						{ model: ComputerCase, as: 'computer_case' },
					]
				}
			],

		})

		return res.json(oneOrder)
	}


	// async delete(req, res, next) {
	// 	try {
	// 		const { id } = req.params
	// 		const deleted = await BasketDevice.findOne({ where: { id } })
	// 		if (!deleted) {
	// 			console.log("err");
	// 		}
	// 		deleted.destroy(id);
	// 		return res.json(deleted)
	// 	} catch (error) {
	// 		next(ApiError.badRequest(error.message))
	// 	}

	// }


}

module.exports = new OrderProcessingController()