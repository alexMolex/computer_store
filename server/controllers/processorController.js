const { Processor } = require('../models/models')

class ProcessorCointroller {
	async create(req, res) {
		const { name } = req.body
		const processor = await Processor.create({ name })
		return res.json(processor)
	}
	async get(req, res) {
		const processor = await Processor.findAll()
		return res.json(processor)
	}

}

module.exports = new ProcessorCointroller()