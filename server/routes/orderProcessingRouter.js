const Router = require('express')
const router = new Router()
const OrderProcessingController = require('../controllers/orderProcessingController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', OrderProcessingController.create)
router.get('/', checkRole('ADMIN'), OrderProcessingController.get)
router.put('/', checkRole('ADMIN'), OrderProcessingController.update)
router.get('/:userId', OrderProcessingController.getUserOrders)
router.get('/one/:id', checkRole('ADMIN'), OrderProcessingController.getOne)



module.exports = router