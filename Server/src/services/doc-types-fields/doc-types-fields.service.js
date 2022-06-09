// Initializes the `docTypesFields` service on path `/doc-types-fields`
const { DocTypesFields } = require("./doc-types-fields.class");
const createModel = require("../../models/DocTypeField/doc-types-fields.model");
const hooks = require("./doc-types-fields.hooks");

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get("paginate"),
  };

  // Initialize our service with any options it requires
  app.use("/doc-types-fields", new DocTypesFields(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service("doc-types-fields");

  service.hooks(hooks);
};
