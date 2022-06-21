// indexer-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = "indexer";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      name: {
        type: String,
        minLength: 3,
        maxLength: 50,
        required: true,
      },
      email: {
        type: String,
        minLength: 5,
        maxLength: 50,
        lowercase: true,
        unique: true,
        required: true,
      },
      userName: {
        type: String,
        minLength: 3,
        maxLength: 50,
        unique: true,
        required: true,
      },
      password: {
        type: String,
        minLength: 8,
        maxLength: 1024,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
};
