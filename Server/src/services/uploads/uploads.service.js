// Initializes the `uploads` service on path `/uploads`
const { Uploads } = require("./uploads.class");
const createModel = require("../../models/Uploads/uploads.model");
const hooks = require("./uploads.hooks");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (_req, _file, cb) =>
    cb(null, "/Users/SaketS/Desktop/DMS_Uploads"),
  filename: (_req, file, cb) => cb(null, `${Date.now()}-${file.name}`),
});
const upload = multer({
  storage,
  limits: {
    fieldSize: 1e8, // Max field value size in bytes, here it's 100MB
    fileSize: 1e7, //  The max file size in bytes, here it's 10MB
  },
});

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get("paginate"),
    multi: true,
  };

  // Initialize our service with any options it requires
  app.use("/uploads", new Uploads(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service("uploads");

  service.hooks(hooks);
};
