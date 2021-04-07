const sql = require("./db.js");

// constructor
const twitchUser = function(user) {
  this.username = user.username;
  this.uid = user["user-id"];
  this.amount = user.amount;
};


twitchUser.getAll = result => {
  sql.query("SELECT * FROM `twitch_user` INNER JOIN `user` ON `twitch_user`.`user-id` = `user`.`user-id`", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("twitchUser: ", res);
    result(null, res);
  });
};


twitchUser.findbyUsername = (username, result) => {
  sql.query(`SELECT * FROM \`twitch_user\` INNER JOIN \`user\` ON \`twitch_user\`.\`user-id\` = \`user\`.\`user-id\` WHERE \`twitch_user\`.\`username\` = '${username}'`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found twitchUser: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found twitchUser with the id
    result({ kind: "not_found" }, null);
  });
};

module.exports = twitchUser;