module.exports = function () {
  return async (context) => {
    const departmentId = context.data.departmentId;
    const departmentService = context.app.service("departments");
    const departments = await departmentService.get(departmentId);
    context.data.department = departments;
    return context;
  };
};
