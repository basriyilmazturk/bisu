/**
 * Test route dir
 * @param app
 */
module.exports = app => {

    /**
     * Hello world test route
     */
    app.get('/', (req, res) => {
        res.status(200).send("Hello World\n").end();
    });
};
