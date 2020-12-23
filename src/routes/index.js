const hello = require('./hello');
const customer = require('./customer');

/**
 * All Routes need to be included here
 *
 * @param app
 * @returns {*}
 */
module.exports = app => {
    hello(app);
    customer(app);

    return app;
};