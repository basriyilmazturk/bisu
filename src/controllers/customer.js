const Customer = require("../models/customer.js");


// Retrieve all Customers from the database.
exports.findSubscribtionsByPhone = (req, res) => {

    Customer.findByPhone(req.params.phone, (err, data) => {
        console.log(err, data);
        if (err) {
            res.status(500).send({
                message: "Sunucu hatası. Lütfen tekrar deneyin."
            });
            return;
        }

        if (data.length == 0) {
            res.status(403).send({
                message: "Belirtilen telefona ait kayıt bulunamamıştır."
            });

            return;
        }

        res.send(data);
    });
};

exports.findSubscriptionOrders = (req, res) => {

    Customer.findOrders(req.params.subId, (err, data) => {

    });
};
