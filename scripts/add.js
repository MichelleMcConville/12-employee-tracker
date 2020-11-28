// ==============================================================================
// DEPENDENCIES - Required NOM Modules
// ==============================================================================
const inquirer = require("inquirer");
const mysql = require("mysql");
const table = require("console.table");

// ==============================================================================
// DATABASE connection(s)
// ==============================================================================
const connect = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "h@meWork12!",
  database: "employeeRoster_db",
});

// ==============================================================================
// FUNCTIONS
// ==============================================================================
function addDept() {
  inquirer.prompt([
    {
      name: "dept_name",
      type: "input",
      message: "What is the department name?",
    },
  ])
  // do we use res or answer??
  .then(res => {
    connection.query("INSERT INTO department SET dept_name ?",
      {
        dept_name: res.dept_name,
      },
  )
}

//function addRole() {}

//function addEmployee() {}

