// ==============================================================================
// DEPENDENCIES - Required NOM Modules
// ==============================================================================
// const table = require("console.table");
const table = require("console-table-printer");

// ==============================================================================
// FUNCTIONS
// ==============================================================================
module.exports = {
  viewAllDept: function (connection, start) {
    connection.query("SELECT id, dept_name AS Departments FROM departments;",
    function (err, data) {
      console.log(" ");
      table.printTable(data);
      console.log(" ");
      start();
    });
  },

  viewAllRoles: function (connection, start) {
    connection.query("SELECT id, title AS titles FROM roles",
      function (err, data) {
        console.log(" ");
        table.printTable(data);
        console.log(" ");
        start();
      });
  },
  
  viewAllEmployees: function (connection, start) {
    connection.query(
        `SELECT e.id, e.first_name, e.last_name, title, dept_name AS department, salary, 
         CONCAT (m.first_name, ' ', m.last_name) as Manager 
           FROM employees e
      LEFT JOIN employees m ON e.manager_id = m.id
      LEFT JOIN roles r ON e.role_id = r.id 
      LEFT JOIN departments d ON d.id = dept_id;`,
      function (err, data) {
        console.log(" ");
        table.printTable(data);
        console.log(" ");
        start();
      });
  },

// ==============================================================================
// BONUS
// ==============================================================================
// Need Help
  viewEmployeesByMgr: function (connection, start) {
    connection.query("SELECT * FROM employees", function (err, managerData) {
      var allManagers = managerData.map((manager) => manager.first_name + " " + manager.last_name);

      inquirer.prompt([
        {
          name: "manager",
          type: "list",
          message: "Select the manager to view their employees?",
          choices: allManagers,
        },
      ])
      .then((response) => {
        var managerObj = managerData.find((employees) => employees.first_name + " " + employees.last_name === response.manager);
        //console.log(managerObj);
        connection.query("SELECT * FROM employees WHERE id=?", [managerObj.id], function (err) {
          if (err) throw err;
          console.log(" ");
          table.printTable(data);
          //console.log("Manager Employees Listed!");
          console.log(" ");
          start();
        });
      });
    });
  }, 

  viewTotalBudgetByDept: function (connection, start) {
    connection.query(
    `SELECT dept_name AS department, sum(salary) AS totalBudgetByDept 
       FROM roles 
       JOIN departments d ON dept_id = d.id 
      GROUP BY dept_name
      ORDER BY totalBudgetByDept DESC`, 
    function (err, data) {
      console.log(" ");
      table.printTable(data);
      console.log(" ");
      start();
    });
  },
};
