const { objectId } = require("@feathers-plus/validate-joi-mongodb");
const Joi = require("joi");
const schema = Joi.object({
  _id: objectId(),
  docTypeId: objectId().required(true),
  fieldId: objectId().required(true),
  isRequired: Joi.boolean().required(true),
});
module.exports.schema = schema;
