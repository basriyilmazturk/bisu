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