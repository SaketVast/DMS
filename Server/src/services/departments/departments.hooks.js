const { authenticate } = require("@feathersjs/authentication").hooks;
const { schema } = require("./departments.models");
const validate = require("feathers-validate-joi");
module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [validate.form(schema, { abortEarly: false })],
    update: [],
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
