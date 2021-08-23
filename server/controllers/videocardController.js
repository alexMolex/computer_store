const { Videocard } = require('../models/models')
const ApiError = require('../error/apiError')

class VideocardCointroller {
	async create(req, res) {
		const { name, price, brand } = req.body
		const videocard = await Videocard.create({ name, price, brand })
		return res.json(videocard)
	}
	async get(req, res) {
		const videocard = await Videocard.findAll()
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