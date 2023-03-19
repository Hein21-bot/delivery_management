const db = require('../db/index')

const getReceiver = (id) => {
    try {
        return db.getReceiver(id)
    } catch (error) {
        throw error.toString()
    }
}

const addReceiver = (name, address, phone_no) => {
    try {
        return db.addReceiver(name, address, phone_no)
    } catch (error) {
        throw error.toString()
    }
}

const updateReceiver = (id, name, address, phone_no) => {
    try {
        return db.updateReceiver(id, name, address, phone_no)
    } catch (error) {
        throw error.toString()
    }
}

module.exports = { getReceiver, addReceiver, updateReceiver }