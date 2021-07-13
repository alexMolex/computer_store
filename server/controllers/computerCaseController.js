const uuid = require('uuid')
const path = require('path')
const { ComputerCase } = require('../models/models')

class ComputerCaseCointroller {
	async create(req, res) {
		const { name, price } = req.body
		const { img } = req.files
		let fileName = uuid.v4() + ".jpg"
		img.mv(path.resolve(__dirname, '..', 'static', fileName))

		const computerCase = await ComputerCase.create({ name, price, img: fileName })
		return res.json(computerCase)
	}
	async get(req, res) {
		const computerCase = await ComputerCase.findAll()
		return res.json(computerCase)
	}

}

module.exports = new ComputerCaseCointroller()