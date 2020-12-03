// ==============================================================================
// DEPENDENCIES - Required NOM Modules
// ==============================================================================
const inquirer = require("inquirer");
const table = require("console-table-printer");
// const table = require("console.table");

// ==============================================================================
// FUNCTIONS - BONUS
// ==============================================================================
module.exports = {
  deleteEmployee: function () {
    connection.query("SELECT * FROM employees", function (err, employeeData) {
      var allEmployees = employeeData.map((employee) => employee.first_name + " " + employee.last_name);

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

        connection.query(
          "DELETE FROM employees WHERE ?",
          {
            id: employeeObj.id,
          },
          function (err) {
            if (err) throw err;
            console.log("Employee Deleted!");
            start();
          }
        );
      });
    });
  },

  deleteRole: function () {
    connection.query("SELECT * FROM roles", function (err, roleData) {
      var allRoles = roleData.map((roles) => roles.title);

      inquirer
        .prompt([
          {
            name: "title",
            type: "list",
            message: "Select the role to be deleted?",
            choices: allRoles,
          },
        ])
        .then((response) => {
          var roleObj = roleData.find((roles) => roles.title === response.title);
      
          connection.query(
            "DELETE FROM roles WHERE id=?",
            {
              id: roleObj.id
            },
            function (err) {
              if (err) throw err;
              console.log("Role Deleted!");
              start();
            }
          );
        });
      });
  },

  deleteDept: function () {},
};
