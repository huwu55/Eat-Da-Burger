var mysql = require('mysql');
require("dotenv").config();

var mysql_pw = process.env.MYSQL;

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: mysql_pw,
    database: "burgers_db"
});

module.exports = connection;