const { authenticate } = require("@feathersjs/authentication").hooks;
const { hashPassword, protect } =
  require("@feathersjs/authentication-local").hooks;
const fetchDepartments = require("./hooks/fetchDepartments");
const validate = require("feathers-validate-joi");
const { schema } = require("./users.models");
module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      hashPassword("password"),
      validate.form(schema, { abortEarly: false }),
      fetchDepartments(),
    ],

    update: [hashPassword("password"), authenticate("jwt")],
    patch: [hashPassword("password"), authenticate("jwt")],
    remove: [authenticate("jwt")],
  },

  after: {
    all: [
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect("password"),
    ],
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
