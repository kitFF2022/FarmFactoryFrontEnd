const mysql = require('mysql');
 
const db = mysql.createPool({
    host: 'root',
    user: 'test_admin',
    password: '1234',
    database: 'farmfactory'
});
 
module.exports = db;