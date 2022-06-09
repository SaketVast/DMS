const { objectId } = require("@feathers-plus/validate-joi-mongodb");
const Joi = require("joi");
const schema = Joi.object({
  _id: objectId(),
  docTypeCode: Joi.string().required(true),
  docName: Joi.string().required(true),
  departmentId: objectId().required(true),
});
module.exports.schema = schema;
