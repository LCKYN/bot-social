module.exports = app => {
  const User = require("../controllers/user.controller.js");

  app.get("/user", User.findAll);
};