const mysql = require('mysql2/promise');
const dotenv = require('dotenv');
dotenv.config({path: 'backend/config/config.env'});

const mysqlPool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

module.exports = mysqlPool;