module.exports = function () {
  return async (context) => {
    const fieldId = context.data.field;
    const FieldService = context.app.service("fields");
    const field = await FieldService.get(fieldId);
    context.data.field = field;
    return context;
  };
};
