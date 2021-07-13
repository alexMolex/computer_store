const Router = require('express')
const router = new Router()
const deviceRouter = require('./deviceRouter')
const brandRouter = require('./brandRouter')
const processorRouter = require('./processorRouter')
const typeRouter = require('./typeRouter')
const userRouter = require('./userRouter')
const videocardRouter = require('./videocardRouter')
const computerCaseRouter = require('./computerCaseRouter')
const basketDeviceRouter = require('./basketDeviceRouter')
const orderProcessingRouter = require('./orderProcessingRouter')
const userConfigDeviceRouter = require('./userConfigDeviceRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)
router.use('/processor', processorRouter)
router.use('/videocard', videocardRouter)
router.use('/case', computerCaseRouter)
router.use('/basket', basketDeviceRouter)
router.use('/order', orderProcessingRouter)
router.use('/config', userConfigDeviceRouter)

module.exports = router