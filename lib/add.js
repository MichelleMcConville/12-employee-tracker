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
        message: "What is the department name?"
      }
    ])
    .then(response => {
      connection.query("INSERT INTO department SET ?",
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
        message: "What is the department number for this role?",
      },
    ])
    .then(response => {
      connection.query("INSERT INTO employee_role SET ?",
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
    connection.query("select * from role", function (err, roleData) {
      connection.query("select * from employee", function (err, employeeData) {
        var roles = roleData.map((role) => role.title);
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
            var roleObj = roleData.find((role) => role.title === response.title);
            var employeeObj = employeeData.find((employee) => employee.first_name + " " + employee.last_name === response.manager);

            connection.query(
              "INSERT INTO employee SET ?",
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
