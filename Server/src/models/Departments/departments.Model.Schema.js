module.exports = function (app) {
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;

  const docSchema = new Schema(
    {
      DeptName: {
        type: String,
        minLength: 3,
        maxLength: 50,
        required: true,
      },
      DeptCode: {
        type: String,
        minLength: 2,
        maxLength: 10,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );
  return docSchema;
};
