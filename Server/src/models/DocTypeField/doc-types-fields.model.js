module.exports = function (app) {
  const modelName = "docTypesFields";
  const mongooseClient = app.get("mongooseClient");
  const schema = require("./doc-types-fields.Model.Schema")(app);

  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
};
