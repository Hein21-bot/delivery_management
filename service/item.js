const db = require('../db/index')
const JsBarcode = require('jsbarcode');
const { createCanvas } = require('canvas');
const fs = require('fs')
const path = require('path')

const getItem = (id) => {
    try {
        return db.getItem(id)
    } catch (error) {
        throw error.toString()
    }
}

const addItem = (item, orderId) => {
    try {
        const { name, description, price, quantity } = item;

        const canvas = createCanvas(200, 200);
        const barcode = Math.random(10)
        JsBarcode(canvas, barcode);
        const filePath = path.join(`public/upload/${barcode}.png`);

        const decodedData = canvas.toBuffer('image/png');

        fs.writeFile(filePath, decodedData, (err) => {
            if (err) throw err;
        });
        return db.addItem(name, description, price, quantity, barcode, orderId)
    } catch (error) {
        throw error.toString()
    }
}

const updateItem = (id, name, description, price, quantity, barcode) => {
    try {
        const canvas = createCanvas(200, 200);
        const barcode = Math.random(10)
        JsBarcode(canvas, barcode);
        const filePath = path.join(`public/upload/${barcode}.png`);

        const decodedData = canvas.toBuffer('image/png');

        fs.writeFile(filePath, decodedData, (err) => {
            if (err) throw err;
        });

        return db.updateItem(id, name, description, price, quantity, barcode)
    } catch (error) {
        throw error.toString()
    }
}

const deleteItem = (id) => {
    try {
        return db.deleteItem(id)
    } catch (error) {
        throw error.toString()
    }
}

const getItemByBarCode = (code) => {
    try {
        return db.getItemByBarCode(code)
    } catch (error) {
        throw error.toString()
    }
}

module.exports = { getItem, addItem, updateItem, deleteItem, getItemByBarCode }