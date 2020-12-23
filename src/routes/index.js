const hello = require('./hello');
const customers = require('./customers');

module.exports = app => {

    hello(app);
    customers(app);

    return app;
};