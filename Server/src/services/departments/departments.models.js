const Joi = require("joi");
const { objectId } = require("@feathers-plus/validate-joi-mongodb");
const schema = Joi.object({
  _id: objectId(),
  DeptName: Joi.string().min(3).max(50),
  DeptCode: Joi.string().min(2).max(20),
});
exports.schema = schema;
