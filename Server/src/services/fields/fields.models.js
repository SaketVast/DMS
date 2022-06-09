const Joi = require("joi");
const { objectId } = require("@feathers-plus/validate-joi-mongodb");
const schema = Joi.object({
  _id: objectId(),
  fieldName: Joi.object().keys({
    name: Joi.string(),
    label: Joi.string(),
    input: Joi.string(),
  }),
});
exports.schema = schema;
