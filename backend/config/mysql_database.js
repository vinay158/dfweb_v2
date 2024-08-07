const mysql = require('mysql2/promise');

const mysqlPool = mysql.createPool({
    host: '162.214.81.11',
    user: 'dfwebsol_nodejs',
    database: 'dfwebsol_df_nodejs',
    password: '~e6ZF@Z.%^k(04flk%@$1uQs',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

module.exports = mysqlPool;