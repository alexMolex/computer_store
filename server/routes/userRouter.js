const Router = require('express')
const router = new Router()
const UserCointroller = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', UserCointroller.registration)
router.post('/login', UserCointroller.login)
router.get('/auth', authMiddleware, UserCointroller.check)



module.exports = router