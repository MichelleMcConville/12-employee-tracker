// ==============================================================================
// DEPENDENCIES - Required NOM Modules
// ==============================================================================
const inquirer = require("inquirer");
const table = require("console.table");

// ==============================================================================
// FUNCTIONS
// ==============================================================================
module.exports = {
  addDept: function (connection, start) {
    inquirer.prompt([
      {
        name: "name",
        type: "input",
        message: "What is the department's name?"
      }
    ])
    .then(response => {
      connection.query("INSERT INTO departments SET ?",
        {
          name: response.name,
        })
    })
    .then(() => console.log("Department Added!"))
    .then(() => start());
  },

  addRole: function(connection, start) {
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
        name: "dept_id",
        type: "list",
        message: "What is the department's number for this role?",
      },
    ])
    .then(response => {
      connection.query("INSERT INTO roles SET ?",
        {
          title: response.title,
          salary: response.salary,
          dept_id: response.dept_id,
        })
    })
    .then(() => console.log("Role Added!"))
    .then(() => start());
  },

  addEmployee: function (connection, start) {
    connection.query("SELECT * FROM roles", function (err, roleData) {
      connection.query("SELECT * FROM employees", function (err, employeeData) {
        var roles = roleData.map((roles) => roles.title);
        var managers = employeeData.map((manager) => manager.first_name + " " + manager.last_name);

        inquirer
          .prompt([
            {
              name: "first_name",
              type: "input",
              message: "What is the employee's first name?",
            },
            {
              name: "last_name",
              type: "input",
              message: "What is the employee's last name?",
            },
            {
              name: "title",
              type: "list",
              message: "Choose the following title",
              choices: roles,
            },
            {
              name: "manager",
              type: "list",
              message: "Choose the following manager",
              choices: managers,
            },
          ])
          .then((response) => {
            var roleObj = roleData.find((roles) => roles.title === response.title);
            var employeeObj = employeeData.find((employees) => employees.first_name + " " + employees.last_name === response.manager);

            connection.query(
              "INSERT INTO employees SET ?",
              {
                first_name: response.first_name,
                last_name: response.last_name,
                role_id: roleObj.id,
                manager_id: employeeObj.id,
              },
              function (err) {
                if (err) throw err;
                console.log("Employee Added!");
                start();
              }
            );
          });
      });
    });
  },
};
