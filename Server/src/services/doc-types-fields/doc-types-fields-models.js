const { objectId } = require("@feathers-plus/validate-joi-mongodb");
const Joi = require("joi");
const schema = Joi.object({
  _id: objectId(),
  docType: objectId().required(),
  field: objectId().required(),
  isRequired: Joi.boolean(),
});
module.exports.schema = schema;
