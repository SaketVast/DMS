// Initializes the `documents` service on path `/documents`
const { Documents } = require("./documents.class");
const createModel = require("../../models/Documents/documents.model");
const hooks = require("./documents.hooks");
const DocumentSearch = require("./Services/DocumentsSearch");
module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get("paginate"),
  };

  const documentSearchService = new DocumentSearch(options, app);

  app.use("/documents/search", documentSearchService);
  app.service("/documents/search").hooks({
    before: {
      find: [],
    },
  });

  // Initialize our service with any options it requires
  app.use("/documents", new Documents(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service("documents");

  service.hooks(hooks);
};
