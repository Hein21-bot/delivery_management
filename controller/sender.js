const { senderService } = require("../service");
const response = require("../model/response");


const getSender = (req, res) => {
    const id = req.params.id
    return senderService.getSender(id).then(dataResult => {
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



const senderCreate = (req, res) => {
    const name = req.body.name
    const address = req.body.address
    const phone_no = req.body.phone_no

    return senderService.addSender(name, address, phone_no)
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


const senderUpdate = (req, res) => {
    const id = req.params.id
    const name = req.body.name
    const address = req.body.address
    const phone_no = req.body.phone_no

    return senderService.updateSender(id, name, address, phone_no)
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

module.exports = { getSender, senderCreate, senderUpdate }