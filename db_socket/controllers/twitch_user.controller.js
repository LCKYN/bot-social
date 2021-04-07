const twitchUser = require("../models/twitch_user.model.js");


exports.findAll = (req, res) => {
  twitchUser.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving twitchUser."
      });
    else res.send(data);
  });
};

exports.findOne = (req, res) => {
  twitchUser.findbyUsername(req.params.username, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found twitchUser with id ${req.params.username}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving twitchUser with id " + req.params.username
        });
      }
    } else res.send(data);
  });
};
