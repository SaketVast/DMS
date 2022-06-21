const { objectId } = require("@feathers-plus/validate-joi-mongodb");
const Joi = require("joi");
const schema = Joi.object({
  _id: objectId(),
  docTypeId: objectId().required(),
  fieldId: objectId().required(),
  isRequired: Joi.boolean(),
});
module.exports.schema = schema;
