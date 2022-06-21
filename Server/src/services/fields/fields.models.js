const Joi = require("joi");
const { objectId } = require("@feathers-plus/validate-joi-mongodb");

const schema = Joi.object({
  _id: objectId(),

  fieldName: Joi.object().keys({
    name: Joi.string().min(3).max(50).required(),
  }),
});
exports.schema = schema;
