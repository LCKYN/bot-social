const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "repos : https://github.com/LCKYN/bot-social" });
});

require("./routes/user.routes.js")(app);
require("./routes/twitch_user.routes.js")(app);

// set port, listen for requests 
app.listen(9001, () => {
  console.log("Server is running on port 9001.");
});