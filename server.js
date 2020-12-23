const express = require('express');
const config = require('./config/index');
const routes = require('./src/routes/index');

async function startServer() {
    const app = express();

    app.listen(config().port, () => {});
    app.use('/' ,routes(app));
}

startServer().then(() => {});