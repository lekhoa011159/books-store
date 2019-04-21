const express = require('express');
const router = express.Router();
const { con, convert } = require('../book-sql');
const crawler = require('../crawler');

let sql = `SELECT * FROM book`;

// get all books
router.get('/', (req, res, next) => {
  con.query(sql, (err, data) => {
    if (err) throw err;
    res.send(convert(data));
  });
});

// get specify book depend on ID
router.get('/:id', (req, res, next) => {
  sql = `SELECT * FROM book WHERE ID = '${req.params.id}'`;
  con.query(sql, (err, data) => {
    if (err) throw err;
    res.send(convert(data));
  });
});

router.get('/crawler', (req, res, next) => {
  console.log(crawler);
});

module.exports = router;