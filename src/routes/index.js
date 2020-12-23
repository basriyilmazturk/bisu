const hello = require('./hello');
const customer = require('./customer');

module.exports = app => {

    hello(app);
    customer(app);

    return app;
};