const express = require("express")
const router = express.Router();
const { itemController } = require('../controller')

router.get('/getItem/:id', itemController.getItem)
router.post('/addItem', itemController.itemCreate);
router.put('/updateItem/:id', itemController.itemUpdate)
router.get('/getItemByBarCode/:code', itemController.getItemByBarCode)

module.exports = router