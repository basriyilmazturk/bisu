module.exports = app => {
    const customer = require("../controllers/customer.js");

    /**
     * test route
     */
    app.get('/customer/:phone', (req, res) => {

        res.status(200).send(`Hello Customer with phone: ${req.params.phone} \n`).end();
    });

    app.get('/getCustomerInfo/:phone', customer.findSubscribtionsByPhone);
    app.get('/getSubscriptionOrders/:subId', customer.findSubscriptionOrders);
};
