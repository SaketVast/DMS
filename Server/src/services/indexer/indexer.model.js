const Joi = require("joi");
const schema = Joi.object({
  _id: objectId(),
  name: Joi.string().min(3).max(50).required(),
  email: Joi.string().min(5).max(50).lowercase().unique().required(),
  userName: Joi.string().min(3).max(50).unique().required(),
  password: Joi.string().min(8).max(1024).required(),
  role: Joi.string(),
});
module.exports.schema = schema;
