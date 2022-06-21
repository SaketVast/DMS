module.exports = function (app) {
  const modelName = "docType";
  const mongooseClient = app.get("mongooseClient");
  const docTypeSchema = require("./doc-types-model-Schema")(app);
  // exports.docTypeSchema = docTypeSchema;

  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, docTypeSchema);
};
