// Create a connection.js file inside config directory.
var mysql = require('mysql');
var connection = mysql.createConnection({
	port: 3306,
	host: 'localhost',
	user: 'root',
	password: '', // Enter Password Here
	database: '' // Enter Database Here
});

connection.connect(function (err) {
	if (err) throw err;
	console.log('connected as id ' + connection.threadId);
});

// Export the connection.

module.exports = connection;
