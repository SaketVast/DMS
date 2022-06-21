// Initializes the `user` service on path `/user`
const { User } = require("./users.class");
const createModel = require("../../models/Users/users.model");
const hooks = require("./users.hooks");

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get("paginate"),
  };

  // Initialize our service with any options it requires
  app.use("/users", new User(options, app));

  // Get our initialized service so that we can user hooks
  const service = app.service("users");

  service.hooks(hooks);
};
