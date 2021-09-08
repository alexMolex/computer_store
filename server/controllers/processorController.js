const { Processor } = require('../models/models')
const ApiError = require('../error/apiError')

class ProcessorCointroller {
	async create(req, res) {
<<<<<<< HEAD
		const {
			name,
			price,
			brand,
			socket,
			coresThreads,
			technicalProcess,
			frequency,
			memoryType,
			overclock,
			tdp,
			integratedVideoCard,
			integratedVideoCardName,
			peakConsumption
		} = req.body
		const processor = await Processor.create({
			name,
			price,
			brand,
			socket,
			coresThreads,
			technicalProcess,
			frequency,
			memoryType,
			overclock,
			tdp,
			integratedVideoCard,
			integratedVideoCardName,
			peakConsumption
		})
=======
		const { name, price, brand } = req.body
		const processor = await Processor.create({ name, price, brand })
>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510
		return res.json(processor)
	}

	async get(req, res) {
		const processor = await Processor.findAll()
		return res.json(processor)
	}

	async update(req, res, next) {
		try {
			let { processorId, updatePrice } = req.body

			const updateProcessor = await Processor.update(
				{ price: updatePrice },
				{
					where: { id: processorId }
				},
			)

			return res.json(updateProcessor)
		} catch (error) {
			next(ApiError.badRequest(error.message))
		}
	}

}

module.exports = new ProcessorCointroller()