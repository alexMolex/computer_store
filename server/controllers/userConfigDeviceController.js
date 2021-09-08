
const { UserConfigDevice, ComputerCase, Processor, Videocard } = require('../models/models')
const ApiError = require('../error/apiError')


class UserConfigDeviceController {
	async create(req, res, next) {
		try {
			let { price, RAM, SSD, storageVolume, overclocking, userId, computerCaseId, processorId, videocardId } = req.body
			const configDeviceCandidate = await UserConfigDevice.findOne({ where: { RAM, storageVolume, userId, computerCaseId, processorId, videocardId } })
			if (configDeviceCandidate) {
				return next(ApiError.badRequest("Такая конфигурация уже добавлена"))
			}
			const configDevice = await UserConfigDevice.create({ price, RAM, SSD, storageVolume, overclocking, userId, computerCaseId, processorId, videocardId })

			return res.json(configDevice)
		} catch (error) {
			next(ApiError.badRequest(error.message))
		}

	}
	async get(req, res) {
		let { userId, page } = req.query
		page = page || 1
		let limit = 2
		let offset = page * limit - limit

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
				order: [['id', 'DESC']],
				limit, offset,
			})
		}

		return res.json(configDevices)
	}


	async getOne(req, res) {
		const { userId, id } = req.params
		const device = await UserConfigDevice.findOne(
			{
				where: { userId, id },
				include: [
					{ model: ComputerCase, as: 'computer_case' },
					{ model: Processor, as: 'processor' },
					{ model: Videocard, as: 'videocard' },
				]
			},

		)
		return res.json(device)
	}


	async delete(req, res, next) {
		try {
			const { id } = req.params
			const deleted = await UserConfigDevice.findOne({ where: { id } })
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


module.exports = new UserConfigDeviceController()