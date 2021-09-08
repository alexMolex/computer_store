const uuid = require('uuid')
const path = require('path')
const { ComputerCase } = require('../models/models')
const ApiError = require('../error/apiError')

class ComputerCaseCointroller {
	async create(req, res) {
		const {
			name,
			price,
			lengthHeightWidth,
			caseMaterials,
			USB,
			RGB
		} = req.body
		const { img } = req.files
		let fileName = uuid.v4() + ".jpg"
		img.mv(path.resolve(__dirname, '..', 'static', fileName))

		const computerCase = await ComputerCase.create({
			name,
			price,
			img: fileName,
			lengthHeightWidth,
			caseMaterials,
			USB,
			RGB
		})
		return res.json(computerCase)
	}
	async get(req, res) {
		let { page } = req.query
		page = page || 1
		let limit = 2
		let offset = page * limit - limit
		const computerCase = await ComputerCase.findAndCountAll({
			order: [['price', 'ASC']],
			limit, offset
		})
		return res.json(computerCase)
	}

	async update(req, res, next) {
		try {
			let { computerCaseId, updatePrice } = req.body
			const updateComputerCase = await ComputerCase.update(
				{ price: updatePrice },
				{
					where: { id: computerCaseId }
				},
			)
			return res.json(updateComputerCase)
		} catch (error) {
			next(ApiError.badRequest(error.message))
		}
	}
}

module.exports = new ComputerCaseCointroller()