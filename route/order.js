const express = require("express")
const router = express.Router();
const { orderController } = require('../controller');
const { orderValidators, validateFields } = require("../validators");

router.get('/getOrder/:id', orderController.getOrder)
router.post('/orderCreate',orderValidators,validateFields, orderController.orderCreate)
router.put('/orderUpdate/:id', orderController.orderUpdate)
router.get('/orderList/:status',orderController.orderList)
router.get('/orderDetails/:order_id', orderController.orderDetails)

module.exports = router