const Router = require('express')
const router = new Router()
const userConfigDeviceController = require('../controllers/userConfigDeviceController')


router.post('/', userConfigDeviceController.create)
router.get('/', userConfigDeviceController.get)
router.delete('/:id', userConfigDeviceController.delete)
<<<<<<< HEAD
router.get('/:userId/:id', userConfigDeviceController.getOne)
=======
router.get('/:id', userConfigDeviceController.getOne)
>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510


module.exports = router