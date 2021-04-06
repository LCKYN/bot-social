const {client} = require('./environment/twitch_api.js');

client.on('connected', onConnectedHandler);
client.on("chat", onChatHandler);
client.on("join", onJoinHandler);
client.on("part", onPartHandler);

console.log(`connect to ${client.opts.channels[0]}`);
client.connect();

function onChatHandler(channel, userstate, message, self){
  if(self) return;
  console.log(`${userstate.username} : ${message}`);
}

function onJoinHandler(channel, username, self){
}

function onPartHandler(channel, username, self){
}

function onConnectedHandler(addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}

