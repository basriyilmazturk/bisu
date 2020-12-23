const path = require("path");

module.exports = {
    getConfig: () => {
        process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
        return require(path.resolve(`./config/config.${process.env.NODE_ENV}.json`));
    }
}