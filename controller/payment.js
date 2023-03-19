const { paymentService } = require("../service");
const response = require("../model/response");


const getPayment = (req, res) => {
    const id = req.params.id
    return paymentService.getPayment(id).then(dataResult => {
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



const addPayment = (req, res) => {
    const payment_type = req.body.payment_type
    const phone_no = req.body.phone_no

    return paymentService.addPayment(payment_type, phone_no)
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


const updatePayment = (req, res) => {
    const id = req.params.id
    const payment_type = req.body.payment_type
    const phone_no = req.body.phone_no

    return paymentService.updatePayment(id, payment_type, phone_no)
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

module.exports = { getPayment, addPayment, updatePayment }