const express = require('express');
const router = express.Router();
const { con, convert } = require('../book-sql');

let sql = null;

// get all the book of specify category 
router.get('/:categoryType', (req, res, next) => {
  sql = `SELECT name, author FROM book WHERE category = '${req.params.categoryType}'`;
  con.query(sql, (err, data) => {
    if (err) throw err;
    res.send(convert(data));
  });
});

module.exports = router;