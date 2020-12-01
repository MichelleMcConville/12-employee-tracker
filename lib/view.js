// ==============================================================================
// DEPENDENCIES - Required NOM Modules
// ==============================================================================
const table = require("console.table");

// ==============================================================================
// FUNCTIONS
// ==============================================================================
module.exports = {
  viewAllDept: function (connection, start) {
    connection.query("SELECT name AS departments FROM department",
    function (err, data) {
      console.table(data);
      start();
    });
  },
  // Not sure why not working
  viewAllRoles: function (connection, start) {
    connection.query("SELECT title AS roles FROM role",
      function (err, data) {
        console.table(data);
        start();
      });
  },
  viewAllEmployees: function (connection, start) {
    // Needs manger name column at end
    connection.query("SELECT e.id, first_name, last_name, title, name AS department, salary FROM employee e LEFT JOIN role r ON role_id = r.id LEFT JOIN department d ON d.id = department_id",
      function (err, data) {
        console.table(data);
        start();
      });
  },
};
