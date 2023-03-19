const { itemService } = require("../service");
const response = require("../model/response");

const JsBarcode = require('jsbarcode');
const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

const getItem = (req, res) => {
    const id = req.params.id
    return itemService.getItem(id).then(dataResult => {
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

const itemCreate = (req, res) => {

    return itemService.addItem({ ...req.body })
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



const itemUpdate = (req, res) => {
    const id = req.params.id
    const name = req.body.name
    const description = req.body.description
    const price = req.body.price
    const quantity = req.body.quantity
    const code = req.body.code

    return itemService.updateItem(id, name, description, price, quantity, code)
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

const getItemByBarCode = (req, res) => {
    const code = req.params.code
    return itemService.getItemByBarCode(code).then(dataResult => {
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


module.exports = { getItem, itemCreate, itemUpdate, getItemByBarCode }