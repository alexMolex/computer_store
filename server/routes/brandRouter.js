const Router = require('express')
const router = new Router()
const brandConrtoller = require('../controllers/brandConrtoller')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), brandConrtoller.create)
router.get('/', brandConrtoller.get)


module.exports = router