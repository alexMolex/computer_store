const { Device, DeviceInfo, ComputerCase, Processor, Videocard } = require('../models/models')
const ApiError = require('../error/apiError')
const { info } = require('console')
const sequelize = require("sequelize")

class DeviceCointroller {
	async create(req, res, next) {
		try {
			let { name, price, totalPrice, RAM, SSD, storageVolume, overclocking, brandId, typeId, computerCaseId, processorId, videocardId, info } = req.body

<<<<<<< HEAD

=======
>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510
			const device = await Device.create({ name, price, totalPrice, RAM, SSD, storageVolume, overclocking, brandId, typeId, computerCaseId, processorId, videocardId })

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
		let { limit, page, brandId, typeId, processorId, videocardId, sortingType, sortingTable } = req.query
		page = page || 1
		limit = limit || 2
		let offset = page * limit - limit
		let table = sortingTable || "totalPrice"
		let sorting = sortingType || "DESC"
		let devices;


		if (!brandId && !typeId && !processorId && !videocardId) {
			devices = await Device.findAndCountAll({
				include: [
<<<<<<< HEAD
=======
					{ model: DeviceInfo, as: 'info' },
>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510
					{ model: ComputerCase, as: 'computer_case' },
					{ model: Processor, as: 'processor' },
					{ model: Videocard, as: 'videocard' },
				],
				distinct: true,
				order: [[`${table}`, `${sorting}`]],
				limit, offset
			})
		}


		if (brandId && !typeId && !processorId && !videocardId) {
<<<<<<< HEAD

			devices = await Device.findAndCountAll({
				where: { brandId },
				include: [
=======
			devices = await Device.findAndCountAll({
				where: { brandId },
				include: [
					{ model: DeviceInfo, as: 'info' },
>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510
					{ model: ComputerCase, as: 'computer_case' },
					{ model: Processor, as: 'processor' },
					{ model: Videocard, as: 'videocard' },
				],
				distinct: true,
				order: [[`${table}`, `${sorting}`]],
				limit, offset
			})
		}
		if (!brandId && typeId && !processorId && !videocardId) {
			devices = await Device.findAndCountAll({
				where: { typeId },
				include: [
<<<<<<< HEAD
=======
					{ model: DeviceInfo, as: 'info' },
>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510
					{ model: ComputerCase, as: 'computer_case' },
					{ model: Processor, as: 'processor' },
					{ model: Videocard, as: 'videocard' },
				],
				distinct: true,
				order: [[`${table}`, `${sorting}`]],
				limit, offset
			})
		}
		if (brandId && typeId && !processorId && !videocardId) {
			devices = await Device.findAndCountAll({
				where: { typeId, brandId },
				include: [
<<<<<<< HEAD
=======
					{ model: DeviceInfo, as: 'info' },
>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510
					{ model: ComputerCase, as: 'computer_case' },
					{ model: Processor, as: 'processor' },
					{ model: Videocard, as: 'videocard' },
				],
				distinct: true,
				order: [[`${table}`, `${sorting}`]],
				limit, offset
			})
		}
		if (!brandId && !typeId && processorId && !videocardId) {
			devices = await Device.findAndCountAll({
				where: { processorId },
				include: [
<<<<<<< HEAD
=======
					{ model: DeviceInfo, as: 'info' },
>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510
					{ model: ComputerCase, as: 'computer_case' },
					{ model: Processor, as: 'processor' },
					{ model: Videocard, as: 'videocard' },
				],
				distinct: true,
				order: [[`${table}`, `${sorting}`]],
				limit, offset
			})
		}
		if (!brandId && typeId && processorId && !videocardId) {
			devices = await Device.findAndCountAll({
				where: { processorId, typeId },
				include: [
<<<<<<< HEAD
=======
					{ model: DeviceInfo, as: 'info' },
>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510
					{ model: ComputerCase, as: 'computer_case' },
					{ model: Processor, as: 'processor' },
					{ model: Videocard, as: 'videocard' },
				],
				distinct: true,
				order: [[`${table}`, `${sorting}`]],
				limit, offset
			})
		}
		if (brandId && !typeId && processorId && !videocardId) {
			devices = await Device.findAndCountAll({
				where: { processorId, brandId },
				include: [
<<<<<<< HEAD
=======
					{ model: DeviceInfo, as: 'info' },
>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510
					{ model: ComputerCase, as: 'computer_case' },
					{ model: Processor, as: 'processor' },
					{ model: Videocard, as: 'videocard' },
				],
				distinct: true,
				order: [[`${table}`, `${sorting}`]],
				limit, offset
			})
		}
		if (brandId && typeId && processorId && !videocardId) {
			devices = await Device.findAndCountAll({
				where: { processorId, brandId, typeId },
				include: [
<<<<<<< HEAD
=======
					{ model: DeviceInfo, as: 'info' },
>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510
					{ model: ComputerCase, as: 'computer_case' },
					{ model: Processor, as: 'processor' },
					{ model: Videocard, as: 'videocard' },
				],
				distinct: true,
				order: [[`${table}`, `${sorting}`]],
				limit, offset
			})
		}
		if (!brandId && !typeId && !processorId && videocardId) {
			devices = await Device.findAndCountAll({
				where: { videocardId },
				include: [
<<<<<<< HEAD
=======
					{ model: DeviceInfo, as: 'info' },
>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510
					{ model: ComputerCase, as: 'computer_case' },
					{ model: Processor, as: 'processor' },
					{ model: Videocard, as: 'videocard' },
				],
				distinct: true,
				order: [[`${table}`, `${sorting}`]],
				limit, offset
			})
		}
		if (!brandId && typeId && !processorId && videocardId) {
			devices = await Device.findAndCountAll({
				where: { videocardId, typeId },
				include: [
<<<<<<< HEAD
=======
					{ model: DeviceInfo, as: 'info' },
>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510
					{ model: ComputerCase, as: 'computer_case' },
					{ model: Processor, as: 'processor' },
					{ model: Videocard, as: 'videocard' },
				],
				distinct: true,
				order: [[`${table}`, `${sorting}`]],
				limit, offset
			})
		}
		if (brandId && !typeId && !processorId && videocardId) {
			devices = await Device.findAndCountAll({
				where: { videocardId, brandId },
				include: [
<<<<<<< HEAD
=======
					{ model: DeviceInfo, as: 'info' },
>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510
					{ model: ComputerCase, as: 'computer_case' },
					{ model: Processor, as: 'processor' },
					{ model: Videocard, as: 'videocard' },
				],
				distinct: true,
				order: [[`${table}`, `${sorting}`]],
				limit, offset
			})
		}
		if (brandId && typeId && !processorId && videocardId) {
			devices = await Device.findAndCountAll({
				where: { videocardId, brandId, typeId },
				include: [
<<<<<<< HEAD
=======
					{ model: DeviceInfo, as: 'info' },
>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510
					{ model: ComputerCase, as: 'computer_case' },
					{ model: Processor, as: 'processor' },
					{ model: Videocard, as: 'videocard' },
				],
				distinct: true,
				order: [[`${table}`, `${sorting}`]],
				limit, offset
			})
		}
		if (!brandId && !typeId && processorId && videocardId) {
			devices = await Device.findAndCountAll({
				where: { videocardId, processorId },
				include: [
<<<<<<< HEAD
=======
					{ model: DeviceInfo, as: 'info' },
>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510
					{ model: ComputerCase, as: 'computer_case' },
					{ model: Processor, as: 'processor' },
					{ model: Videocard, as: 'videocard' },
				],
				distinct: true,
				order: [[`${table}`, `${sorting}`]],
				limit, offset
			})
		}
		if (!brandId && typeId && processorId && videocardId) {
			devices = await Device.findAndCountAll({
				where: { videocardId, processorId, typeId },
				include: [
<<<<<<< HEAD
=======
					{ model: DeviceInfo, as: 'info' },
>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510
					{ model: ComputerCase, as: 'computer_case' },
					{ model: Processor, as: 'processor' },
					{ model: Videocard, as: 'videocard' },
				],
				distinct: true,
				order: [[`${table}`, `${sorting}`]],
				limit, offset
			})
		}
		if (brandId && typeId && processorId && videocardId) {
			devices = await Device.findAndCountAll({
				where: { brandId, videocardId, processorId, typeId },
				include: [
<<<<<<< HEAD
=======
					{ model: DeviceInfo, as: 'info' },
>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510
					{ model: ComputerCase, as: 'computer_case' },
					{ model: Processor, as: 'processor' },
					{ model: Videocard, as: 'videocard' },
				],
				distinct: true,
				order: [[`${table}`, `${sorting}`]],
				limit, offset
			})
		}

		return res.json(devices)
	}


	async getOne(req, res) {
		const { id } = req.params
		const device = await Device.findOne(
			{
				where: { id },
				include: [
					{ model: DeviceInfo, as: 'info' },
					{ model: ComputerCase, as: 'computer_case' },
					{ model: Processor, as: 'processor' },
					{ model: Videocard, as: 'videocard' },
				]
			},

		)
		return res.json(device)
	}

	async update(req, res, next) {
		try {
			let { deviceId, updatePrice } = req.body

			const updateDevicePrice = await Device.update(
				{ totalPrice: updatePrice },
				{
					where: { id: deviceId }
				},
			)

			return res.json(updateDevicePrice)
		} catch (error) {
			next(ApiError.badRequest(error.message))
		}
	}

}

module.exports = new DeviceCointroller()