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
};
