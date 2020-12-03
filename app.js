// ==============================================================================
// DEPENDENCIES - Required NPM Modules
// ==============================================================================
const inquirer = require("inquirer");
const mysql = require("mysql");

const { viewAllDept, viewAllRoles, viewAllEmployees, viewEmployeesByMgr, viewTotalBudgetByDept } = require("./lib/view");
const { addDept, addRole, addEmployee } = require("./lib/add");
const { updateRole, updateEmployee } = require("./lib/update");
const { deleteDept, deleteRole, deleteEmployee } = require("./lib/delete");

// ==============================================================================
// DATABASE - Create connection information for the SQL DB
// ==============================================================================
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "employee_roster",
});

// Connect to the mySQL Server & the DB
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
        "View All Employees"
      , "View All Roles"
      , "View All Departments"
      , "View Employees by Manager"
      , "View Total Budget by Dept"
      , "Add Employee"
      , "Add Role"
      , "Add Department"
      , "Update Employee Role"
      , "Update Employee Manager"
      , "Delete Employee"
      , "Delete Role"
      , "Delete Department"
      , "Exit"
    ],
  })
  .then(userInput => {
    switch (userInput.actions) {
      case "View All Employees":
        viewAllEmployees(connection, start);
        break;
      case "View All Roles":
        viewAllRoles(connection, start);
        break;
      case "View All Departments":
        viewAllDept(connection, start);
        break;  
      case "View Employees by Manager":
        viewEmployeesByMgr(connection, start);
        break;
      case "View Total Budget by Dept":
        viewTotalBudgetByDept(connection, start);
        break;
      case "Add Employee":
        addEmployee(connection, start);
        break;
      case "Add Role":
        addRole(connection, start);
        break;
      case "Add Department":
        addDept(connection, start);
        break;
      case "Update Employee Role":
        updateRole(connection, start);
        break;
      case "Update Employee Manager":
        updateEmployee();
        break;
      case "Delete Employee":
        deleteEmployee(connection, start);
        break;
      case "Delete Role":
        deleteRole(connection, start);
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
