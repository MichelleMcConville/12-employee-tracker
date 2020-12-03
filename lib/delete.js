// ==============================================================================
// DEPENDENCIES - Required NOM Modules
// ==============================================================================
const inquirer = require("inquirer");
const { printTable } = require('console-table-printer');
// const table = require("console.table");

// ==============================================================================
// FUNCTIONS
// ==============================================================================
module.exports = {
  deleteEmployee: function() {
    connection.query("SELECT * FROM employees", function (err, employeeData) {
      var allEmployees = employeeData.map((roles) => roles.title);
    })
  },

  deleteRole: function() {},

  deleteDept: function() {},
};
