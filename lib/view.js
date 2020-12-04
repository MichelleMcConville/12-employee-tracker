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
    connection.query("SELECT * FROM departments;",
    function (err, data) {
      console.table(data);
      start();
    });
  },
  viewAllRoles: function (connection, start) {
    connection.query("SELECT * FROM roles",
      function (err, data) {
        console.table(data);
        start();
      });
  },
  // How do I remove (index) field at left
  viewAllEmployees: function (connection, start) {
    connection.query(
        `SELECT e.id, first_name, last_name, title, dept_name AS department, salary, manager_id 
           FROM employees e
      LEFT JOIN roles r ON role_id = r.id 
      LEFT JOIN departments d ON d.id = dept_id;`,
      function (err, data) {
        console.table(data);
        start();
      });
  },

// ==============================================================================
// BONUS
// ==============================================================================
// Need Help
  viewEmployeesByMgr: function (connection, start) {
    connection.query("SELECT * FROM employees", 
    function (err, data) {
      console.table(data);
      start();
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
      console.table(data);
      start();
    });
  },
};
