module.exports = function (app) {
  const fetchDepartments = require("../Departments/departments.Model.Schema");
  // const { objectId } = require("@feathers-plus/validate-joi-mongodb");

  const modelName = "users";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      firstName: {
        type: String,
        minlength: 3,
        maxlength: 20,
        required: true,
      },
      lastName: {
        type: String,
        minlength: 3,
        maxlength: 20,
        required: true,
      },
      email: {
        type: String,
        minlength: 5,
        maxlength: 50,
        lowercase: true,

        required: true,
      },
      phone: {
        type: String,
        minlength: 6,
        maxlength: 10,
        required: true,
      },
      departments: [
        {
          type: fetchDepartments(app),
          required: true,
        },
      ],

      userName: {
        type: String,
        minlength: 3,
        maxlength: 20,
        unique: true,
        required: true,
      },

      password: {
        type: String,
        minlength: 8,
        maxlength: 1024,
        required: true,
      },

      lastLoggedIn: {
        type: Date,
        default: Date.now,
      },
      isAdmin: {
        type: Boolean,
        default: false,
      },
      isActive: {
        type: Boolean,
        default: true,
      },

      updatedAt: {
        type: Date,
        default: Date.now,
      },
    },

    {
      timestamps: true,
    }
  );

  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
};
