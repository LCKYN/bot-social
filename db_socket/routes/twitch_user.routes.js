module.exports = app => {
  const twitchUser = require("../controllers/twitch_user.controller.js");

  // // Create a new Customer
  // app.post("/customers", customers.create);

  // Retrieve all Customers
  app.get("/twitch", twitchUser.findAll);

  // Retrieve a single Customer with customerId
  app.get("/twitch/:username", twitchUser.findOne);

  // // Update a Customer with customerId
  // app.put("/customers/:customerId", customers.update);

  // // Delete a Customer with customerId
  // app.delete("/customers/:customerId", customers.delete);

  // // Create a new Customer
  // app.delete("/customers", customers.deleteAll);
};