const mysql2 = require('mysql2');

const db = mysql2.createConnection(
    {
        host: 'localhost',
     
     user: 'root',
     password: 'root123',
     database: 'employee_tracker'
    },
    console.log('Connected to the employee tracking database.')
);

module.exports = db;