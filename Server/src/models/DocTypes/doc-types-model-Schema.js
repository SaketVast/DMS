const fetchDepartment = require("../Departments/departments.Model.Schema");

module.exports = function (app) {
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;

  const docTypeSchema = new Schema(
    {
      docTypeCode: {
        type: String,
        minLength: 3,
        maxLength: 10,
        required: true,
      },
      docName: {
        type: String,
        minLength: 2,
        maxLength: 50,
        required: true,
      },
      department: {
        type: fetchDepartment(app),
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );
  return docTypeSchema;
};
