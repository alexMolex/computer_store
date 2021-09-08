const Router = require('express')
const router = new Router()
const OrderProcessingController = require('../controllers/orderProcessingController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', OrderProcessingController.create)
router.get('/', checkRole('ADMIN'), OrderProcessingController.get)
router.put('/', checkRole('ADMIN'), OrderProcessingController.update)
router.get('/:userId', OrderProcessingController.getUserOrders)
<<<<<<< HEAD
router.get('/one/:id', checkRole('ADMIN'), OrderProcessingController.getOne)
=======
router.get('/one/:id', OrderProcessingController.getOne)
>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510



module.exports = router