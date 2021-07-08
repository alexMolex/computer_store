const Router = require('express')
const router = new Router()
const userConfigDeviceController = require('../controllers/userConfigDeviceController')


router.post('/', userConfigDeviceController.create)
router.get('/', userConfigDeviceController.get)
// router.get('/:id', userConfigDeviceController.getOne)


module.exports = router