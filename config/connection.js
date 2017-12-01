const mysql = require('mysql');

//Comment out this connection if using on local machine
const connection = mysql.createConnection({
    port: 3306,
    host : 'otwsl2e23jrxcqvx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user : 'n65m91nrhvcxj46e',
    password: 'nr0xle3xzxbq5x7w',
    database : 's4oge7xpepkgru1y'
})

//Use this connection for local
// const connection = mysql.createConnection({
//   port: 3306,
//   host: 'localhost',
//   user: '',//your username here
//   password: '',//your password here
//   database: 'burgers_db'
// })

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
