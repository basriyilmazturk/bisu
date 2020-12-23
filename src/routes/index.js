const hello = require('./hello');

const routes = (app) => {
    hello(app);

    return app;
};


module.exports = routes;
