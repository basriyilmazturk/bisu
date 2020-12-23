const hello = (app) => {
    app.get('/', (req, res) => {
        res.status(200).send("Helslo World\n").end();
    });
};

module.exports = hello;