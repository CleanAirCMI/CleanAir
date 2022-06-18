// Import 
import mysql from 'mysql';


// Database data
const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database:"cleanair",
port: 3306
})

// export db to other files
export default db;