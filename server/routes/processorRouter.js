const Router = require('express')
const router = new Router()
const processorController = require('../controllers/processorController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), processorController.create)
router.put('/', checkRole('ADMIN'), processorController.update)
router.get('/', processorController.get)


module.exports = router