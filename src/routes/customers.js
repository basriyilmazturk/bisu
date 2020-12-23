module.exports = app => {

    app.get('/customer/:phone', (req, res) => {
        res.status(200).send(`Hello Customer with phone: ${req.params.phone} \n`).end();
    });
};
