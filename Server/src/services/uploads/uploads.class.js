const { Service } = require("feathers-mongoose");

exports.Uploads = class Uploads extends Service {
  async create(data, params) {
    const uploadedFiles = params.files; //note that the file in in params

    const allPromises = uploadedFiles.map(async (dataFile) => {
      const { originalname, buffer, mimetype } = dataFile;
      const { fileServer, filePath, imageMaxWidth, imageMinWidth } =
        this.options;

      const ts = new Date().getTime();

      const filename =
        ts +
        originalname
          .toLowerCase()
          .replace(/[^a-z0-9. -]/g, "") // remove invalid chars
          .replace(/\s+/g, "-") // collapse whitespace and replace by -
          .replace(/-+/g, "-");

      try {
        await uploadToLocal(
          filePath,
          filename,
          buffer,
          mimetype,
          imageMaxWidth,
          imageMinWidth
        );
      } catch (error) {
        console.log("Upload Error");
      }

      return {
        name: originalname,
        url: fileServer + "/" + filename,
        thumbnail: fileServer + "/sm-" + filename, //only True for image
      };
    });

    const responses = Promise.all(allPromises);
    return responses;
  }
};
