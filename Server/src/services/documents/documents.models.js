const { objectId } = require("@feathers-plus/validate-joi-mongodb");
const Joi = require("joi");
const schema = Joi.object({
  _id: objectId(),
  docName: Joi.string(),
  docPath: Joi.string(),
  indexingInfo: Joi.object().keys({
    docTypeFieldId: Joi.string(),
    dcn: Joi.string(),
  }),
});
exports.schema = schema;
