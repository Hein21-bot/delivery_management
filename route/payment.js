const express = require("express")
const router = express.Router();
const { paymentController } = require('../controller')
const { paymentValidators, validateFields } = require("../validators");

router.get('/getPayment/:id', paymentController.getPayment)
router.post('/addPayment', paymentValidators, validateFields, paymentController.addPayment)
router.put('/updatePayment/:id', paymentValidators, validateFields, paymentController.updatePayment)

module.exports = router