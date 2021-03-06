const Router = require('express')
const router = new Router()
const deviceController = require('../controllers/deviceController')
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/', checkRole('ADMIN'), deviceController.create)
router.get('/', deviceController.get)
router.put('/', checkRole('ADMIN'), deviceController.update)
router.get('/:id', deviceController.getOne)


module.exports = router