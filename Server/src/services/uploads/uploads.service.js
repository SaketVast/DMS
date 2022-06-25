const multer = require("multer");
const multipartMiddleware = multer();
const blobService = require("feathers-blob");
const fs = require("fs-blob-store");
const dauria = require("dauria");
module.exports = function (app) {
  // some options which cand be defined in config/default.json or production.json
  const blobStorage = fs(app.get("uploadFilePath"));
  const options = {
    name: "upload",
    Model: blobStorage,
  };

  // Initialize our service with any options it requires
  app.use(
    "/upload",

    multipartMiddleware.single("file"),

    // another middleware, this time to
    // transfer the received files to feathers
    function (req, res, next) {
      const docData = JSON.parse(req.body.data);
      console.log(req.file);
      req.feathers.file = req.file;
      next();
    },
    blobService(options)
  );

  // Get our initialized service so that we can register hooks and filter
  app.service("upload").hooks({
    before: {
      all: [],
      create: [
        function (hook) {
          try {
            if (!hook.data.uri && hook.params.file) {
              const file = hook.params.file;

              const uri = dauria.getBase64DataURI(file.buffer, file.mimetype);
              hook.data = { uri: uri };
              // console.log(hook);
            }
          } catch (e) {
            console.log(e);
          }
        },
      ],
    },
    after: {
      //create: [discard('uri')]
    },
  });

  // service.hooks(hooks);
};
