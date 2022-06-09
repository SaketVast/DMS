module.exports = function () {
  return async (context) => {
    const docTypeId = context.data.docTypeId;

    const docTypeService = context.app.service("doc-type");

    const docType = await docTypeService.get(docTypeId);

    context.data.docType = docType;
    return context;
  };
};
