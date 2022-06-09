const fetchFields = require("../../models/Fields/fields.model.Schema");
const fetchDocType = require("../../models/DocTypes/doc-types-model-Schema");

module.exports = function (app) {
  const modelName = "docTypesFields";
  const mongooseClient = app.get("mongooseClient");
  // const { objectId } = require("@feathers-plus/validate-joi-mongodb");

  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      docType: {
        type: fetchDocType(app),
        required: true,
      },
      field: {
        type: fetchFields(app),
        required: true,
      },

      isRequired: {
        type: Boolean,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );

  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
};
