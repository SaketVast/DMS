module.exports = function () {
  return async (context) => {
    const departmentId = context.data.departmentId;

    const departmentService = context.app.service("departments");

    const department = await departmentService.get(departmentId);

    context.data.department = department;
    return context;
  };
};
