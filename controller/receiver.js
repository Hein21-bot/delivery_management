const { receiverService } = require("../service");
const response = require("../model/response");


const getReceiver = (req, res) => {
    const id = req.params.id
    return receiverService.getReceiver(id).then(dataResult => {
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


const receiverCreate = (req, res) => {
    const name = req.body.name
    const address = req.body.address
    const phone_no = req.body.phone_no

    return receiverService.addReceiver(name, address, phone_no)
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



const receiverUpdate = (req, res) => {
    const id = req.params.id
    const name = req.body.name
    const address = req.body.address
    const phone_no = req.body.phone_no

    return receiverService.updateReceiver(id, name, address, phone_no)
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


module.exports = { getReceiver, receiverCreate, receiverUpdate }