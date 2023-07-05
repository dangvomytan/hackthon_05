const mysql = require('mysql2');
const dbConfig = require('../../configs/db.config')

const connectionMysql = mysql.createConnection({
     host:dbConfig.host,
     user:dbConfig.user,
     password:dbConfig.password,
     database:dbConfig.database,
});
connectionMysql.connect(function(error){
if(error) throw error;
console.log("Connected!")
})


module.exports = connectionMysql;