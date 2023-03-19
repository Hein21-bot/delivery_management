const express = require("express")
const router = express.Router();
const { senderController } = require('../controller')
const { customerValidators, validateFields } = require("../validators");

router.get('/getSender/:id', senderController.getSender)
router.post('/senderCreate', customerValidators, validateFields, senderController.senderCreate)
router.put('/senderUpdate/:id', customerValidators, validateFields, senderController.senderUpdate)

module.exports = router