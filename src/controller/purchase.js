const Purchase = require('../model/purchase')


exports.getall = async (req, res) => {

    Purchase.get(req, res);
};

exports.create = (req, res) => {

    // validation

    if (!req.body) {
        res.status(400).send({ message: " content can not be empty" })
    }
    var digits = Math.floor(Math.random() * 900000000000) + 100000000000;

    console.log(digits);


    var purchase = new Purchase({
        companyName: req.body.companyName,
        supplierName: req.body.supplierName,
        purchaseOrderNumber: req.body.purchaseOrderNumber,
        address: req.body.address,
        buyerName: req.body.buyerName,
        modeOfShipment: req.body.modeOfShipment,
        FOB: req.body.FOB,
        productName: req.body.productName,
        quantity: req.body.quantity,
        unit: req.body.unit,
        total: req.body.total,
        description: req.body.description  || false

    })

    Purchase.create(purchase, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the users."
            });
        else res.send(data);
    })
}

// update the Product

exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    Purchase.update(req.query.id, req.body, (err, data) => {
        if (err) {
            console.log(err);
            res.send(err)
        } else res.send(data);
    }
    );
};

// delete the Product

exports.delete = (req, res) => {
    Purchase.remove(req.query.id, (err, data) => {
        if (err) {
            res.send(err)
        } else res.send({ message: `manufacturer was deleted successfully!` });
    });
};

exports.getbyId = (req, res) => {

    Purchase.getbyId(req.query.id, (req, res))
}