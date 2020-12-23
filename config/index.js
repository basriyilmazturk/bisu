module.exports = () => {

    process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
    return require(`./config.${process.env.NODE_ENV}.json`);
}