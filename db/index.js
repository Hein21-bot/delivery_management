const mysql = require("mysql2");
const util = require("util");

require("dotenv").config();

const mypool = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    multipleStatements: true,
});


const getItem = (id) => {
    let query = util.promisify(mypool.query).bind(mypool);
    return query(`Select * from items where id = ${id}`)
}

const getOrder = (id) => {
    let query = util.promisify(mypool.query).bind(mypool);
    return query(`Select * from orders where id = ${id}`)
}

const getReceiver = (id) => {
    let query = util.promisify(mypool.query).bind(mypool);
    return query(`Select * from receiver where id = ${id}`)
}

const getSender = (id) => {
    let query = util.promisify(mypool.query).bind(mypool);
    return query(`Select * from sender where id = ${id}`)
}

const getPayment = (id) => {
    let query = util.promisify(mypool.query).bind(mypool);
    return query(`SELECT * FROM payments where id = ${id}`)
}

const addItem = (name, description, price, quantity, barcode, orderId) => {
    let query = util.promisify(mypool.query).bind(mypool);
    return query(`INSERT INTO items (name,description,price,quantity,barcode,order_id) VALUES ('${name}','${description}', '${price}', '${quantity}', '${barcode}',${orderId})`);
};

const updateItem = (id, name, description, price, quantity, barcode) => {
    let query = util.promisify(mypool.query).bind(mypool);
    return query(`UPDATE items SET name = '${name}', description = '${description}', price = '${price}', quantity = '${quantity}', barcode = '${barcode}' where id = ${id}`)
}

const addOrder = (sender_id, receiver_id, descritpion, order_status, payment_id) => {
    let query = util.promisify(mypool.query).bind(mypool);
    return query(`Insert Into orders (sender_id,receiver_id,descritpion,order_status, payment_id) Values (${sender_id}, ${receiver_id}, '${descritpion}', ${order_status} , ${payment_id})`)
}

const updateOrder = (id, sender_id, receiver_id, descritpion, order_status, payment_id) => {
    let query = util.promisify(mypool.query).bind(mypool);
    return query(`Update orders Set sender_id =${sender_id}, receiver_id =${receiver_id} , descritpion ='${descritpion}', order_status =${order_status}, payment_id = ${payment_id} where id = ${id} `)
}

const addReceiver = (name, address, phone_no) => {
    let query = util.promisify(mypool.query).bind(mypool);
    return query(`Insert Into receiver(name,address,phone_no) Values ('${name}','${address}', '${phone_no}')`)
}

const updateReceiver = (id, name, address, phone_no) => {
    let query = util.promisify(mypool.query).bind(mypool);
    return query(`Update receiver Set name = '${name}', address ='${address}', phone_no = '${phone_no}'  where id =${id}`)
}

const addSender = (name, address, phone_no) => {
    let query = util.promisify(mypool.query).bind(mypool);
    return query(`Insert Into sender (name,address, phone_no) Values ('${name}', '${address}', '${phone_no}')`)
}

const updateSender = (name, address, phone_no) => {
    let query = util.promisify(mypool.query).bind(mypool);
    return query(`Update sender Set name = '${name}', address ='${address}', phone_no= '${phone_no}' where id = ${id}`)
}

const addPayment = (payment_type, phone_no) => {
    let query = util.promisify(mypool.query).bind(mypool);
    return query(`Insert Into payments (payment_type, phone_no) Values('${payment_type}', '${phone_no}')`)
}

const updatePayment = (id, payment_type, phone_no) => {
    let query = util.promisify(mypool.query).bind(mypool);
    return query(`Update payments Set  payment_type = '${payment_type}', phone_no = '${phone_no}' where id = ${id}`)
}

const getOrderList = (status) => {
    let query = util.promisify(mypool.query).bind(mypool);
    return query(`SELECT o.*, sum(t.quantity) as noOfItem, sum(t.price) as totalPrice FROM delivery.orders as o
    left join delivery.items as t on o.id = t.order_id
    where order_status =  ${status} group by o.id`)
}


const getItemListByOrder = (id) => {
    let query = util.promisify(mypool.query).bind(mypool);
    return query(`Select * from items where order_id =  ${id}`)
}

const getReceiverByOrder = (id) => {
    let query = util.promisify(mypool.query).bind(mypool);
    return query(`SELECT tr.* FROM delivery.orders as o
    inner join delivery.receiver as tr on o.receiver_id = tr.id
    where o.id = ${id}`)
}

const getSenderByOrder = (id) => {
    let query = util.promisify(mypool.query).bind(mypool);
    return query(`SELECT ts.* FROM delivery.orders as o
    inner join delivery.sender as ts on o.sender_id = ts.id 
    where o.id = ${id}`)
}

const getPaymentByOrder = (id) => {
    let query = util.promisify(mypool.query).bind(mypool);
    return query(`SELECT tp.* FROM delivery.orders as o
    inner join delivery.payments as tp on o.payment_id = tp.id
    where o.id = ${id}`)
}

const getItemByBarCode = (code) => {
    let query = util.promisify(mypool.query).bind(mypool);
    return query(`SELECT * FROM delivery.items where barcode = '${code}';`)
}

module.exports = { getItem, getOrder, getReceiver, getSender, getPayment, addItem, updateItem, addOrder, updateOrder, addReceiver, updateReceiver, addSender, updateSender, addPayment, updatePayment, getOrderList, getItemListByOrder, getReceiverByOrder, getSenderByOrder, getPaymentByOrder, getItemByBarCode }