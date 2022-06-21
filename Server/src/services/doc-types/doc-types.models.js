const { objectId } = require("@feathers-plus/validate-joi-mongodb");
const Joi = require("joi");
const schema = Joi.object({
  _id: objectId(),
  docTypeCode: Joi.string().min(3).max(10).required(),
  docName: Joi.string().min(2).max(50).required(),
  departmentId: objectId().required(),
});
module.exports.schema = schema;
