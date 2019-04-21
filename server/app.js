const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 1010;

// require routes
const booksRouter = require('./routes/books');
const categoriesRouter = require('./routes/categories');

// apply middlewares
app.use(cors());
app.use(bodyParser.json());

// routing
app.use('/api/books', booksRouter);
app.use('/api/books/categories', categoriesRouter);

app.listen(PORT);