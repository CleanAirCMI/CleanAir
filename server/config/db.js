// Import 
import mysql from 'mysql';


// Database data
const db = mysql.createConnection({
host: "s191.webhostingserver.nl",
user: "hmcnetwork_klimaat",
password: "retYTFNX9E4nejks8eRj",
database:"hmcnetwork_klimaat",
port: 3307
})

// export db to other files
export default db;