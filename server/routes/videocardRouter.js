const Router = require('express')
const router = new Router()
const videocardController = require('../controllers/videocardController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), videocardController.create)
router.get('/', videocardController.get)


module.exports = router