// Import 
import mysql from 'mysql';
import secrets from './secrets.json' assert {type: 'json'};

console.log(secrets.user);
// Database data
const db = mysql.createConnection({
host: secrets.host,
user: secrets.user,
password: secrets.password,
database:"cleanair",
port: 3306
})

// export db to other files
export default db;