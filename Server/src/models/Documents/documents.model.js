module.exports = function (app) {
  const modelName = "documents";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      docName: {
        type: String,
      },
      docPath: {
        type: String,
      },
      indexingInfo: {
        docTypeFieldId: {
          type: String,
        },
      },
      dcn: {
        type: String,
      },
      date: {
        type: Date,
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
