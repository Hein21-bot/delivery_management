const db = require('../db/index')

const getPayment = (id) => {
    try {
        return db.getPayment(id)
    } catch (error) {
        throw error.toString()
    }
}

const addPayment = (payment_type, phone_no) => {
    try {
        return db.addPayment(payment_type, phone_no)
    } catch (error) {
        throw error.toString()
    }
}

const updatePayment = (id, payment_type, phone_no) => {
    try {
        return db.updatePayment(id, payment_type, phone_no)
    } catch (error) {
        throw error.toString()
    }
}


module.exports = { getPayment, addPayment, updatePayment }