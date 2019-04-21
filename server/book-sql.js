const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ledangkhoa1912',
  database: 'BOOKS'
});

function convert(data) {
  return JSON.parse(JSON.stringify(data));
}

module.exports.con = con;
module.exports.convert = convert;