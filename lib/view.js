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
          `SELECT e.id, e.first_name, e.last_name, r.title, r.salary, d.dept_name AS department,
           CONCAT (e.first_name,' ',e.last_name) AS manager
             FROM employees e 
        LEFT JOIN roles r ON r.id = e.role_id
        LEFT JOIN departments d ON d.id = r.dept_id
        LEFT JOIN employees ON e.manager_id = e.id`,
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
