const mysql = require('mysql')
const db = mysql.createConnection({
host: "localhost",
user: "hmcnetwork_klimaat",
password: "",
database:"hmcnetwork_klimaat" 
})

module.exports = db;