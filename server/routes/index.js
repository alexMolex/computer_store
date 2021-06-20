const Router = require('express')
const router = new Router()
const deviceRouter = require('./deviceRouter')
const brandRouter = require('./brandRouter')
const processorRouter = require('./processorRouter')
const typeRouter = require('./typeRouter')
const userRouter = require('./userRouter')
const videocardRouter = require('./videocardRouter')
const basketDeviceRouter = require('./basketDeviceRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)
router.use('/processor', processorRouter)
router.use('/videocard', videocardRouter)
router.use('/basket', basketDeviceRouter)

module.exports = router