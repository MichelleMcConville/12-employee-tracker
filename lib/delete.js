// ==============================================================================
// DEPENDENCIES - Required NOM Modules
// ==============================================================================
const inquirer = require("inquirer");
const table = require("console-table-printer");
// const table = require("console.table");

// ==============================================================================
// FUNCTIONS
// ==============================================================================
module.exports = {
  deleteEmployee: function () {
    connection.query("SELECT * FROM employees", function (err, employeeData) {
      var allEmployees = employeeData.map((employee) => employee.first_name + " " + employee.last_name);
    });

    inquirer
      .prompt([
        {
          name: "employee",
          type: "list",
          message: "Select the employee to delete?",
          choices: allEmployees,
        },
      ])
      .then((response) => {
        var employeeObj = employeeData.find((employees) => employees.first_name + " " + employees.last_name === response.employee);
      });
  },

  deleteRole: function () {},

  deleteDept: function () {},
};
