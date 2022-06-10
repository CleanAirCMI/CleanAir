const mysql = require('mysql')
const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database:"hmcnetwork_klimaat" 
})

module.exports = db;