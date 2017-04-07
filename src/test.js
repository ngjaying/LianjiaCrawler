var mysql      = require('mysql');
var pool = mysql.createPool({
  host     : '192.168.31.196',
  user     : 'root',
  password : 'test',
  database : 'lianjia',
  poolSize: 20,
  acquireTimeout: 30000
});

pool.getConnection(function(err, connection) {
  // Use the connection
  connection.query('SELECT * FROM house', function (error, results, fields) {
    console.log(results.length);
    // And done with the connection.
    connection.release();

    // Handle error after the release.
    if (error) throw error;

    // Don't use the connection here, it has been returned to the pool.
  });
});
