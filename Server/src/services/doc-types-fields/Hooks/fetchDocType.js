const { ObjectId } = require("mongodb");

module.exports = function () {
  return async (context) => {
    const docTypeId = context.data.docType;

    const docTypeService = context.app.service("doc-type");

    const docType = await docTypeService.get(ObjectId(docTypeId));
    context.data.docType = docType;
    return context;
  };
};
