const Router = require('express')
const router = new Router()
const computerCaseController = require('../controllers/computerCaseController')

router.post('/', computerCaseController.create)
router.get('/', computerCaseController.get)


module.exports = router