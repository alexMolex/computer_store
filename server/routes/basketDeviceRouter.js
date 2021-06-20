const Router = require('express')
const router = new Router()
const basketDeviceController = require('../controllers/basketDeviceController')
const authMiddleware = require('../middleware/authMiddleware')
// const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', authMiddleware, basketDeviceController.create)
router.get('/', authMiddleware, basketDeviceController.get)
router.delete('/:id', authMiddleware, basketDeviceController.delete)


module.exports = router