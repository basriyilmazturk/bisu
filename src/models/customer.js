const sql = require("./db.js");

/**
 * finds all subscriptions matched with given phone number
 *
 * @param phone
 * @param result
 */
exports.findByPhone = (phone, result) => {

    sql.query(`SELECT * FROM Subscription WHERE phone_number = '${phone}'`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        result(null, res);
    });
};

/**
 * finds all orders matched with given subscription id
 *
 * @param subId
 * @param result
 */
exports.findOrders = (subId, result) => {

    sql.query(`SELECT * FROM \`Order\` WHERE subscription_id = ${subId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        result(null, res);
    });
};