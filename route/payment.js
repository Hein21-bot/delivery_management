const express = require("express")
const router = express.Router();
const { paymentController } = require('../controller')

router.get('/getPayment/:id', paymentController.getPayment)
router.post('/addPayment', paymentController.addPayment)
router.put('/updatePayment/:id', paymentController.updatePayment)

module.exports = router