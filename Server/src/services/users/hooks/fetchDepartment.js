module.exports = function () {
  return async (context) => {
    const departmentId = context.data.departments;

    const departmentService = context.app.service("departments");

    const departmentsarray = [];
    for (i = 0; i <= departmentId.length - 1; i++) {
      const department = await departmentService.get(departmentId[i]);
      departmentsarray.push(department);
    }
    context.data.departments = departmentsarray;
    return context;
  };
};
