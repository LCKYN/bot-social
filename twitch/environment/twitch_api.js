const tmi = require("tmi.js");
const config = require("config");

const twitchConfig = config.get("tmi");

const opts = {
  identity: {
    username: twitchConfig.username,
    password: twitchConfig.token,
  },
  channels: [twitchConfig.channel],
};

const client = new tmi.client(opts);

module.exports = { client };
