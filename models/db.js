const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

// Create a connection to the database
const mysqlConnection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

// open the MySQL connection
mysqlConnection.connect(error => {
    if (error) throw error;
});

module.exports = mysqlConnection;
