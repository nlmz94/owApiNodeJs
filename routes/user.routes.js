module.exports = (app) => {
  const users = require("../controllers/user.controller.js");
  app.get("/users/:id", users.findById);
  app.get("/users/username/:username", users.findByUsername);
  app.put("/users", users.update);
};
