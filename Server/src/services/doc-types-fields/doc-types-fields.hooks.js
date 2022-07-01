const { authenticate } = require("@feathersjs/authentication").hooks;
const validate = require("feathers-validate-joi");
const { schema } = require("./doc-types-fields-models");
const fetchDocType = require("./Hooks/fetchDocType");
const fetchFields = require("./Hooks/fetchFields");
module.exports = {
  before: {
    all: [],
    find: [(hook) => {}],
    get: [],
    create: [
      validate.form(schema, { abortEarly: false }),
      fetchDocType(),
      fetchFields(),
    ],
    update: [fetchDocType(), fetchFields()],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
