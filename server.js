const express = require('express');
const Config = require('./config');

const config = Config.getConfig();

async function startServer() {
    const app = express();

    app.get('/', (req, res) => {
        res.status(200).send("Hello World\n").end();
    });

    app.listen(config.port, () => {});
}

startServer().then(() => {});