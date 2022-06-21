module.exports = function (app) {
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;

  const fieldSchema = new Schema(
    {
      fieldName: {
        name: {
          type: String,
          required: true,
          minLength: 3,
          maxLength: 50,
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
