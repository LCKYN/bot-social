const sql = require("./db.js");

// constructor
const User = function(user) {
  this.amount = user.amount;
  this.uid = user["user-id"];
};


User.getAll = result => {
  sql.query("SELECT * FROM user", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("customers: ", res);
    result(null, res);
  });
};


module.exports = User;