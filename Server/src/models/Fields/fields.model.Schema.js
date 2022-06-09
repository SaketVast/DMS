module.exports = function (app) {
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;

  const fieldSchema = new Schema(
    {
      fieldName: {
        name: {
          type: String,
        },
        label: {
          type: String,
        },
        input: {
          type: String,
        },
      },
    },
    {
      timestamps: true,
    }
  );
  return fieldSchema;
};
