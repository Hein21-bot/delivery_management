const db = require('../db/index')

const getOrder = (id) => {
    try {
        return db.getOrder(id)
    } catch (error) {
        throw error.toString()
    }
}

const addOrder = async (sender_id, receiver_id, descritpion, order_status, payment_id) => {
    try {
        return db.addOrder(sender_id, receiver_id, descritpion, order_status, payment_id)
    } catch (error) {
        throw error.toString()
    }
}

const updateOrder = (id, sender_id, receiver_id, descritpion, order_status, payment_id) => {
    try {
        return db.updateOrder(id, sender_id, receiver_id, descritpion, order_status, payment_id)
    } catch (error) {
        throw error.toString()
    }
}

const getOrderList = (status) => {
    try {
        return db.getOrderList(status)
    } catch (error) {
        throw error.toString()
    }
}

const getItemListByOrder = (id) => {
    try {
        return db.getItemListByOrder(id)
    } catch (error) {
        throw error.toString()
    }
}

const getReceiverByOrder = (id) => {
    try {
        return db.getReceiverByOrder(id)
    } catch (error) {
        throw error.toString()
    }
}

const getSenderByOrder = (id) => {
    try {
        return db.getSenderByOrder(id)
    } catch (error) {
        throw error.toString()
    }
}

const getPaymentByOrder = (id) => {
    try {
        return db.getPaymentByOrder(id)
    } catch (error) {
        throw error.toString()
    }
}

const getOrderDetails = async (id) => {
    const itemList = await getItemListByOrder(id)
    const receiver = await getReceiverByOrder(id)
    const sender = await getSenderByOrder(id)
    const payment = await getPaymentByOrder(id)
    return { itemList, receiver, sender, payment }
}


module.exports = { getOrder, addOrder, updateOrder, getOrderList, getItemListByOrder, getReceiverByOrder, getSenderByOrder, getPaymentByOrder, getOrderDetails }