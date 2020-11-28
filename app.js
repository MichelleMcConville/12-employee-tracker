// ==============================================================================
// DEPENDENCIES - Required NPM Modules
// ==============================================================================
const inquirer = require("inquirer");
const mysql = require("mysql");
const table = require("console.table");

const { viewAllDept, viewAllRoles, viewAllEmployees, viewEmployeesByMgr } = require("./scripts/view");
const { addDept, addRole, addEmployee } = require("./scripts/add");
const { updateRole, updateEmployee } = require("./scripts/update");
const { deleteDept, deleteRole, deleteEmployee } = require("./scripts/delete");

// ==============================================================================
// DATABASE - Create the connection information for the sql db
// ==============================================================================
const connect = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "h@meWork12!",
  database: "employeeRoster_db",
});

// connect to the mysql server and sql database
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
      "View All Employee Roles",
      "View All Departments",
      "View Employees by Manager",
      "View Total Budget by Dept",
      "Add Employee",
      "Add Employee Role",
      "Add Department",
      "Update Employee",
      "Update Employee Role",
      "Delete Employee",
      "Delete Role",
      "Delete Department",
      "Exit",
    ],
  })
  .then(res => {
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
      case "Add Employee Role":
        addRole();
        break;
      case "Add Department":
        addDept();
        break;
      case "Update Employee":
        updateEmployee();
        break;
      case "Update Employee Role":
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

start();

