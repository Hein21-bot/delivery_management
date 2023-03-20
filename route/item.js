const express = require("express")
const router = express.Router();
const { itemController } = require('../controller')
const { itemValidators, validateFields } = require("../validators");

router.get('/getItem/:id', itemController.getItem)
router.post('/addItem', itemValidators, validateFields, itemController.itemCreate);
router.put('/updateItem/:id', itemValidators, validateFields, itemController.itemUpdate)
router.put('/deleteItem/:id', itemController.deleteItem)
router.get('/getItemByBarCode/:code', itemController.getItemByBarCode)

module.exports = router