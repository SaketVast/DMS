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
    Model: blobStorage, //blob storage to handle the model
  };

  // Initialize our service with any options it requires
  app.use(
    "/upload",

    multipartMiddleware.single("file"), // file is attribute

    // another middleware, this time to
    // transfer the received files to feathers
    function (req, res, next) {
      const docData = JSON.parse(req.body.data);
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
              const uri = dauria.getBase64DataURI(file.buffer, file.mimetype); // encoded string that represents a file
              hook.data = { uri: uri };
            }
          } catch (e) {
            console.log(e);
          }
        },
      ],
    },
    after: {
      create: [
        async (hook) => {
          const data = JSON.parse(hook?.arguments[0]?.data);
          if (data) {
            try {
              await hook.app.service("documents").create({
                // created an object of data and passed it to document service
                docName: data.name,
                indexingInfo: data.indexingInfo,
                docPath: `${app.get("uploadFilePath")}/${hook.result.id}`,
                department: data.department,
                dcn: data.customDeptCode,
              });
            } catch (e) {
              console.error(e);
            }
          }
        },
      ],
    },
  });
};
