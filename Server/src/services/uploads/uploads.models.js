const Joi = require("joi");
const schema = Joi.object({
  name: Joi.string(),
  path: Joi.string(),
  indexingInfo: Joi.object().keys({
    docTypeFieldId: Joi.string(),
  }),
  dcn: Joi.string(),
});
