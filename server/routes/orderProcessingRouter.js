const Router = require('express')
const router = new Router()
const orderProcessingController = require('../controllers/orderProcessingController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/', authMiddleware, orderProcessingController.create)
router.get('/', authMiddleware, orderProcessingController.get)
router.delete('/:id', authMiddleware, orderProcessingController.delete)


module.exports = router