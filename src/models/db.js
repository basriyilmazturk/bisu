const mysql = require('mysql');
const config = require('../../config/index');

const dbConfig = config().db_connection;

/**
 * mysql connection
 *
 * @type {Pool}
 */
const connection = mysql.createPool({
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database
});

module.exports = connection;