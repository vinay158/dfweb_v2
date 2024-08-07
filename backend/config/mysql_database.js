const mysql = require('mysql2/promise');

const mysqlPool = mysql.createPool({
    host: 'localhost',
    user: 'dfwebsol_nodejs',
    password: 'dfwebsol_df_nodejs',
    database: '~e6ZF@Z.%^k(04flk%@$1uQs',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

module.exports = mysqlPool;