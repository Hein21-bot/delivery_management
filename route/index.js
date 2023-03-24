const itemRouter = require('./item')
const orderRouter = require('./order')
const receiverRouter = require('./receiver')
const senderRouter = require('./sender')
const paymentRouter = require('./payment')
const express = require('express')
const { orderValidators } = require('../validators')
const router = express.Router()

// login
// authentication
router.use('/item', itemRouter)
router.use('/order',orderRouter)
router.use('/receiver', receiverRouter)
router.use('/sender', senderRouter)
router.use('/payment', paymentRouter)

module.exports = router