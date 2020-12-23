module.exports = app => {
    const customer = require("../controllers/customer.js");

    /**
     * test route
     */
    app.get('/customer/:phone', (req, res) => {

        res.status(200).send(`Hello Customer with phone: ${req.params.phone} \n`).end();
    });

    /**
     * customer info route with a parameter of customer phone
     */
    app.get('/getCustomerInfo/:phone', customer.findSubscribtionsByPhone);
    /**
     * get orders by subscription id
     */
    app.get('/getSubscriptionOrders/:subId', customer.findSubscriptionOrders);
};
