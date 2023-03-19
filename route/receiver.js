const express = require("express")
const router = express.Router();
const { receiverController } = require('../controller')
const { customerValidators, validateFields } = require("../validators");

router.get('/getReceiver/:id', receiverController.getReceiver)
router.post('/receiverCreate', customerValidators, validateFields, receiverController.receiverCreate)
router.put('/receiverUpdate/:id', customerValidators, validateFields, receiverController.receiverUpdate)

module.exports = router