const { Videocard } = require('../models/models')

class VideocardCointroller {
	async create(req, res) {
		const { name } = req.body
		const videocard = await Videocard.create({ name })
		return res.json(videocard)
	}
	async get(req, res) {
		const videocard = await Videocard.findAll()
		return res.json(videocard)
	}

}

module.exports = new VideocardCointroller()