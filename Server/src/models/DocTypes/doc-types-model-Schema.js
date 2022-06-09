const fetchDepartment = require("../Departments/departments.Model.Schema");

module.exports = function (app) {
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;

  const docTypeSchema = new Schema(
    {
      docTypeCode: {
        type: String,
        required: true,
      },
      docName: {
        type: String,
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
