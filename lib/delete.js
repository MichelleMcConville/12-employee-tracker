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
      var allEmployees = employeeData.map((roles) => roles.title);
    });

    inquirer.prompt([
      {
        name: "employee",
        type: "list",
        message: "Select the employee to delete?",
        choices: allEmployees,
      },
    ]);
  },

  deleteRole: function () {},

  deleteDept: function () {},
};
