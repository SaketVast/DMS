module.exports = function (app) {
  const modelName = "departments";
  const mongooseClient = app.get("mongooseClient");
  const docSchema = require("./departments.Model.Schema")(app);

  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, docSchema);
};
