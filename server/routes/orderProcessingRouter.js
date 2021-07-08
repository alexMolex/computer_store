const Router = require('express')
const router = new Router()
const OrderProcessingController = require('../controllers/orderProcessingController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/', OrderProcessingController.create)
router.get('/', OrderProcessingController.get)
router.get('/:userId', OrderProcessingController.getUserOrders)


module.exports = router