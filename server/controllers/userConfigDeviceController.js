
const { UserConfigDevice } = require('../models/models')
const ApiError = require('../error/apiError')


class UserConfigDeviceController {
	async create(req, res, next) {
		try {
			let { price, RAM, SSD, storageVolume, overclocking, userId, computerCaseId, processorId, videocardId } = req.body

			const configDevice = await UserConfigDevice.create({ price, RAM, SSD, storageVolume, overclocking, userId, computerCaseId, processorId, videocardId })

			return res.json(configDevice)
		} catch (error) {
			next(ApiError.badRequest(error.message))
		}

	}
	async get(req, res) {
		let { userId } = req.query

		let configDevices;
		if (userId) {
			configDevices = await UserConfigDevice.findAndCountAll({
				where: { userId },
				include: [
					'processor',
					'videocard',
					'computer_case',
				],
				distinct: true,
			})
		}

		return res.json(configDevices)
	}


}

module.exports = new UserConfigDeviceController()