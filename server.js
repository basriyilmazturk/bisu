const express = require('express');
const Config = require('./config');
const routes = require('./src/routes/index')
const config = Config.getConfig();

async function startServer() {
    const app = express();


    app.listen(config.port, () => {});
    app.use('/' ,routes(app));
}

startServer().then(() => {});