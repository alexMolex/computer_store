const uuid = require('uuid')
const path = require('path')
const { Device, DeviceInfo } = require('../models/models')
const ApiError = require('../error/apiError')
const { info } = require('console')

class DeviceCointroller {
	async create(req, res, next) {
		try {
			let { name, price, brandId, typeId, processorId, videocardId, info } = req.body
			const { img } = req.files
			let fileName = uuid.v4() + ".jpg"
			img.mv(path.resolve(__dirname, '..', 'static', fileName))

			const device = await Device.create({ name, price, brandId, typeId, processorId, videocardId, img: fileName })

			if (info) {
				info = JSON.parse(info)
				info.forEach(i =>
					DeviceInfo.create({
						title: i.title,
						description: i.description,
						deviceId: device.id
					})
				)
			}

			return res.json(device)
		} catch (error) {
			next(ApiError.badRequest(error.message))
		}

	}
	async get(req, res) {
		let { brandId, typeId, processorId, videocardId, limit, page } = req.query
		page = page || 1
		limit = limit || 6
		let offset = page * limit - limit
		let devices;
		if (!brandId && !typeId && !processorId && !videocardId) {
			devices = await Device.findAndCountAll({
				include: [{ model: DeviceInfo, as: 'info' }],
				limit, offset
			})
		}
		if (brandId && !typeId && !processorId && !videocardId) {
			devices = await Device.findAndCountAll({ where: { brandId }, limit, offset })
		}
		if (!brandId && typeId && !processorId && !videocardId) {
			devices = await Device.findAndCountAll({ where: { typeId }, limit, offset })
		}
		if (brandId && typeId && !processorId && !videocardId) {
			devices = await Device.findAndCountAll({ where: { typeId, brandId }, limit, offset })
		}
		if (!brandId && !typeId && processorId && !videocardId) {
			devices = await Device.findAndCountAll({ where: { processorId }, limit, offset })
		}
		if (!brandId && typeId && processorId && !videocardId) {
			devices = await Device.findAndCountAll({ where: { processorId, typeId }, limit, offset })
		}
		if (brandId && !typeId && processorId && !videocardId) {
			devices = await Device.findAndCountAll({ where: { processorId, brandId }, limit, offset })
		}
		if (brandId && typeId && processorId && !videocardId) {
			devices = await Device.findAndCountAll({ where: { processorId, brandId, typeId }, limit, offset })
		}
		if (!brandId && !typeId && !processorId && videocardId) {
			devices = await Device.findAndCountAll({ where: { videocardId }, limit, offset })
		}
		if (!brandId && typeId && !processorId && videocardId) {
			devices = await Device.findAndCountAll({ where: { videocardId, typeId }, limit, offset })
		}
		if (brandId && !typeId && !processorId && videocardId) {
			devices = await Device.findAndCountAll({ where: { videocardId, brandId }, limit, offset })
		}
		if (brandId && typeId && !processorId && videocardId) {
			devices = await Device.findAndCountAll({ where: { videocardId, brandId, typeId }, limit, offset })
		}
		if (!brandId && !typeId && processorId && videocardId) {
			devices = await Device.findAndCountAll({ where: { videocardId, processorId }, limit, offset })
		}
		if (!brandId && typeId && processorId && videocardId) {
			devices = await Device.findAndCountAll({ where: { videocardId, processorId, typeId }, limit, offset })
		}
		if (brandId && typeId && processorId && videocardId) {
			devices = await Device.findAndCountAll({ where: { brandId, videocardId, processorId, typeId }, limit, offset })
		}

		return res.json(devices)
	}
	async getOne(req, res) {
		const { id } = req.params
		const device = await Device.findOne(
			{
				where: { id },
				include: [{ model: DeviceInfo, as: 'info' }]
			},
			// https://stackoverflow.com/questions/47180773/how-to-do-group-concat-in-select-query-in-sequelize
		)
		return res.json(device)
	}

}

module.exports = new DeviceCointroller()