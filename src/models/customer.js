const sql = require("./db.js");

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