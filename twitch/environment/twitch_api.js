const tmi = require("tmi.js");
const config = require("config");

const twitchConfig = config.get("tmi");

const opts = {
  options: { debug: false },
  connection: { reconnect: true },
  identity: {
    username: twitchConfig.username,
    password: twitchConfig.token,
  },
  channels: [twitchConfig.channel],
};

const client = new tmi.client(opts);

module.exports = { client };
