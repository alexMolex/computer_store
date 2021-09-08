const { Videocard } = require('../models/models')
const ApiError = require('../error/apiError')

class VideocardCointroller {
	async create(req, res) {
<<<<<<< HEAD
		const {
			name,
			price,
			brand,
			memoryValue,
			frequency,
			memoryType,
			memoryBus,
			peakConsumption
		} = req.body
		const videocard = await Videocard.create({
			name,
			price,
			brand,
			memoryValue,
			frequency,
			memoryType,
			memoryBus,
			peakConsumption
		})
=======
		const { name, price, brand } = req.body
		const videocard = await Videocard.create({ name, price, brand })
>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510
		return res.json(videocard)
	}
	async get(req, res) {
		const videocard = await Videocard.findAll({
			order: [['name', 'ASC']],
		})
		return res.json(videocard)
	}

	async update(req, res, next) {
		try {
			let { videocardId, updatePrice } = req.body

			const updateVideocard = await Videocard.update(
				{ price: updatePrice },
				{
					where: { id: videocardId }
				},
			)

			return res.json(updateVideocard)
		} catch (error) {
			next(ApiError.badRequest(error.message))
		}
	}
}

module.exports = new VideocardCointroller()