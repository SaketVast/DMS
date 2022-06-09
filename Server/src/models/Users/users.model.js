// const fetchDepartment = require("../Departments/departments.Model.Schema");
module.exports = function (app) {
  // const { objectId } = require("@feathers-plus/validate-joi-mongodb");

  const modelName = "users";

  const mongoose = require("mongoose");
  const mongooseClient = app.get("mongooseClient");
  const schema = new mongooseClient.Schema(
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
        unique: true,
        required: true,
      },
      phone: {
        type: String,
        minlength: 6,
        maxlength: 10,
        required: true,
      },
      departments: {
        // type: fetchDepartment(app),
        type: String,
      },
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
      role: {
        type: String,
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
      updatedBy: {
        // default: null,
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
