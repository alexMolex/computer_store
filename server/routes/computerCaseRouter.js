const Router = require('express')
const router = new Router()
const computerCaseController = require('../controllers/computerCaseController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), computerCaseController.create)
router.put('/', checkRole('ADMIN'), computerCaseController.update)
router.get('/', computerCaseController.get)


module.exports = router