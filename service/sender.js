const db = require('../db/index')

const getSender = (id) => {
    try {
        return db.getSender(id)
    } catch (error) {
        throw error.toString()
    }
}


const addSender = (name, address, phone_no) => {
    try {
        return db.addSender(name, address, phone_no)
    } catch (error) {
        throw error.toString()
    }
}

const updateSender = (id, name, address, phone_no) => {
    try {
        return db.updateSender(id, name, address, phone_no)
    } catch (error) {
        throw error.toString()
    }
}


module.exports = { getSender, addSender, updateSender }