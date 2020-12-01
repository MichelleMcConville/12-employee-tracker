// ==============================================================================
// DEPENDENCIES - Required NPM Modules
// ==============================================================================
const inquirer = require("inquirer");
const mysql = require("mysql");
const table = require("console.table");

// ==============================================================================
// DATABASE - Create the connection information for the sql db
// ==============================================================================
const connect = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password!",
  database: "employeeRoster_db",
});

// Connect to the mySQL Server and the DB
connection.connect((err) => {
  if (err) throw err;
  start();
});

function start() {
  console.log("Welcome to the Employee Management System");
  inquirer.prompt({
    name: "actions",
    type: "list",
    message: "Please select one of the following actions.",
    choices: [
      "View All Employees",
      "View All Roles",
      "View All Departments",
      "View Employees by Manager",
      "View Total Budget by Dept",
      "Add Employee",
      "Add Role",
      "Add Department",
      "Update Employee",
      "Update Role",
      "Delete Employee",
      "Delete Role",
      "Delete Department",
      "Exit",
    ],
  })
  .then(userInput => {
    switch (res.choice) {
      case "View All Employees":
        viewAllEmployees();
        break;
      case "View All Employee Roles":
        viewAllRoles();
        break;
      case "View All Departments":
        viewAllDept();
        break;  
      case "View Employees by Manager":
        viewEmployeesByMgr();
        break;
      case "View Total Budget by Dept":
        viewTotalBudgetByDept();
        break;
      case "Add Employee":
        addEmployee();
        break;
      case "Add Role":
        addRole();
        break;
      case "Add Department":
        addDept();
        break;
      case "Update Employee":
        updateEmployee();
        break;
      case "Update Role":
        updateRole();
        break;
      case "Delete Employee":
        deleteEmployee();
        break;
      case "Delete Role":
        deleteRole();
        break;
      case "Delete Department":
        deleteDept();
        break;
      case "Exit":
        rosterChange();
        break;
    }
  });
}
