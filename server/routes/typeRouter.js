const Router = require('express')
const router = new Router()
const typeCointroller = require('../controllers/typeController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), typeCointroller.create)
router.get('/', typeCointroller.get)


module.exports = router