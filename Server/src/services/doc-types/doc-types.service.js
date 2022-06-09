// Initializes the `docType` service on path `/doc-type`
const { DocType } = require("./doc-types.class");
const createModel = require("../../models/DocTypes/doc-types.model");
const hooks = require("./doc-types.hooks");

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get("paginate"),
  };

  // Initialize our service with any options it requires
  app.use("/doc-type", new DocType(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service("doc-type");

  service.hooks(hooks);
};
