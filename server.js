const express = require('express');
const config = require('./config/index');
const routes = require('./src/routes/index');

async function startServer() {
    const app = express();

    /**
     * initialization of all the routes
     */
	routes(app);
    app.listen(config().port, () => {});
}

startServer().then(() => {});