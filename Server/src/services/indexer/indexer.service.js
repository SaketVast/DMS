// Initializes the `indexer` service on path `/indexer`
const { Indexer } = require("./indexer.class");
const createModel = require("../../models/Indexer/indexer.model");
const hooks = require("./indexer.hooks");

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get("paginate"),
  };

  // Initialize our service with any options it requires
  app.use("/indexer", new Indexer(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service("indexer");

  service.hooks(hooks);
};
