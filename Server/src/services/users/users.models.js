const Joi = require("joi");
const { objectId } = require("@feathers-plus/validate-joi-mongodb");
const schema = Joi.object({
  _id: objectId(),
  firstName: Joi.string().min(3).max(20).required(),
  lastName: Joi.string().min(3).max(20).required(),

  email: Joi.string().min(5).max(50).lowercase().required(),
  phone: Joi.string().min(6).max(10).required(),
  departments: Joi.array().items(objectId()).required(),
  userName: Joi.string().min(3).max(20).required(),
  password: Joi.string().min(8).max(1024).required(),

  isAdmin: Joi.boolean(),
  isActive: Joi.boolean(),
});
module.exports.schema = schema;
