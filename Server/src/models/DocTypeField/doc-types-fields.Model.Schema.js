const fetchFields = require("../../models/Fields/fields.model.Schema");
const fetchDocType = require("../../models/DocTypes/doc-types-model-Schema");

module.exports = function (app) {
  const mongooseClient = app.get("mongooseClient");

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
        default: false,
      },
    },
    {
      timestamps: true,
    }
  );
  return schema;
};
