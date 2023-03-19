const { body, validationResult } = require('express-validator');
const response = require('../model/response');
const orderValidators = [
  body('receiver_id')
    .notEmpty().withMessage('receiver_id is required'),
  body('sender_id')
    .notEmpty().withMessage('sender_id is required'),

  body('item_list')
    .isArray().withMessage('Item list must be array')
    .notEmpty().withMessage('Item list is required')
    .custom((value) => {
      const itemsProperty = value.every((item) => {
        return typeof item === 'object' && item.hasOwnProperty('name') && item.hasOwnProperty('price') && item.hasOwnProperty('quantity');
      });
      if (!itemsProperty) {
        throw new Error('Each item must be include name, price and quantity');
      }
      return true;
    })
    .custom((value) => {
      const itemsProperty = value.every((item) => {
        return typeof (item.price) == 'number' && typeof (item.quantity) == 'number';
      });
      if (!itemsProperty) {
        throw new Error('Invalid price or quantity');
      }
      return true;
    })
  //  .isInt().withMessage('Number must be an integer')
]

const customerValidators = [
  body('name')
    .notEmpty().withMessage('name is required'),
  body('phone_no')
    .notEmpty().withMessage('phone_no is required'),
]


const validateFields = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json(response({ success: false, message: "Input validatioin error", error: errors.array() }));
  }
  else next()
}

module.exports = { orderValidators, customerValidators, validateFields }