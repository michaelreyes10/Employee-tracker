const mysql2 = require('mysql2');

const db = mysql2.createConnection(
    {
        host: DB_HOST,
     port: DB_PORT,
     user: DB_USER,
     password: DB_PASS
    },
    console.log('Connected to the employee tracking database.')
);

module.exports = db;