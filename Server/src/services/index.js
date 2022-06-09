const users = require("./users/users.service.js");
const docTypes = require("./doc-types/doc-types.service.js");
const fields = require("./fields/fields.service.js");
const departments = require("./departments/departments.service.js");
const docTypesFields = require("./doc-types-fields/doc-types-fields.service.js");
const documents = require('./documents/documents.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(docTypes);
  app.configure(fields);
  app.configure(departments);
  app.configure(docTypesFields);
  app.configure(documents);
};
