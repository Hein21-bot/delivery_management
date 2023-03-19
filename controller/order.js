const { orderService, itemService, paymentService } = require("../service");
const response = require("../model/response");
const { body, validationResult } = require('express-validator');


const getOrder = (req, res) => {
    const id = req.params.id
    return orderService.getOrder(id).then(dataResult => {
        return res.json(
            response({
                success: true,
                message: "Success!",
                payload: dataResult
            })
        )
    }).catch(err => {
        res.json(response({ success: false, message: err }));
    });
}


const orderCreate = async (req, res) => {
    const sender_id = req.body.sender_id
    const receiver_id = req.body.receiver_id
    const descritpion = req.body.descritpion
    const order_status = req.body.order_status
    const payment_id = req.body.payment_id
    const items = req.body.item_list

    return orderService.addOrder(sender_id, receiver_id, descritpion, order_status, payment_id)
        .then(dataResult => {
            if (dataResult.insertId > 0) {
                items.forEach(e => {
                    itemService.addItem(e, dataResult.insertId)
                })
                return res.json(
                    response({
                        success: true,
                        message: "Success!",
                        payload: dataResult
                    })
                )
            }

        }).catch(err => {
            res.json(response({ success: false, message: err.code, error: err }));
        });
};


const orderUpdate = (req, res) => {
    const id = req.params.id
    const sender_id = req.body.sender_id
    const receiver_id = req.body.receiver_id
    const descritpion = req.body.descritpion
    const order_status = req.body.order_status

    return orderService.updateOrder(id, sender_id, receiver_id, descritpion, order_status)
        .then(dataResult => {
            return res.json(
                response({
                    success: true,
                    message: "Success!",
                    payload: dataResult
                })
            )
        }).catch(err => {
            res.json(response({ success: false, message: err.code, error: err }));
        });
};

const orderList = (req, res) => {
    const status = req.params.status
    return orderService.getOrderList(status).then(dataResult => {
        return res.json(
            response({
                success: true,
                message: "Success!",
                payload: dataResult
            })
        )
    }).catch(err => {
        res.json(response({ success: false, message: err.code, error: err }));
    });
}

const orderDetails = async (req, res) => {
    const order_id = req.params.order_id
    return orderService.getOrderDetails(order_id).then(dataResult => {
        return res.json(
            response({
                success: true,
                message: "Success!",
                payload: dataResult
            })
        )
    }).catch(err => {
        res.json(response({ success: false, message: err.code, error: err }));
    });
}


module.exports = { getOrder, orderCreate, orderUpdate, orderList, orderDetails }


const data = {
    "receiver_id": 1,
    "sender_id": 1,
    "item_list": [{
        "name": 'Sauses',
        "descritpion": '',
        "price": 500,
        "quantity": 4,
        "item_total_price": 2000
    },
    {
        "name": 'Burger',
        "descritpion": 'no sugar',
        "price": 1500,
        "quantity": 2,
        "item_total_price": 3000
    }, {
        "name": 'Ice Coffee',
        "descritpion": 'less ice',
        "price": 1000,
        "quantity": 3,
        "item_total_price": 3000
    }],
    "payment": {
        "payment_type": "K Pay",
        "amount": 10000,
        "status": 0
    },
    "descritpion": 'test',
    "order_status": 0
}