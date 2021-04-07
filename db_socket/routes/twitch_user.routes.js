module.exports = app => {
  const twitchUser = require("../controllers/twitch_user.controller.js");

  app.get("/twitch", twitchUser.findAll);

  app.get("/twitch/:username", twitchUser.findOne);

};