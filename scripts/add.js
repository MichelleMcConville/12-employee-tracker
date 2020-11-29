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
    .then(response => {
      connection.query("INSERT INTO department SET ?",
        {
          dept_name: response.dept_name,
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
  ])
  then(response => {
    connection.query("INSERT INTO employee_role SET dept_name ?",
      {
        title: response.title,
        salary: response.salary,
        department_id: response.department_id,
      })
  })
  .then(() => console.log("Role Added!"))
  .then(() => start());
}

//function addEmployee() {}

