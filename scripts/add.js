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
  inquirer.prompt(
    {
      name: "dept_name",
      type: "input",
      message: "What is the department name?"
    })
    .then(answer => {
      connection.query("INSERT INTO department SET dept_name ?",
        {
          dept_name: res.dept_name,
        })
    })
    .then(() => console.log("Department Added!"))
    .then(() => start());
  }

function addRole() {
  inquirer.prompt([
    {
      name: "title",
      type: "input",
      message: "What is the name of the role?",
    },
    {
      name: "salary",
      type: "input",
      message: "What is the salary for this role?",
    },
    {
      name: "department_id",
      type: "list",
      message: "What is the department number for this role?",
    },
  ]);
}

//function addEmployee() {}

