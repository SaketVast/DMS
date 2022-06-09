module.exports = function (app) {
  const modelName = "fields";
  const mongooseClient = app.get("mongooseClient");
  const fieldSchema = require("../Fields/fields.model.Schema")(app);

  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, fieldSchema);
};
