import React from 'react';
import PropTypes from 'prop-types';

import Book from '../Book';
import EmptyBooksList from './EmptyBooksList';

const ListOfBooks = ({ books, className, emptyClassName }) =>
  books.length
    ? (
      <div className={className}>
        <ul>
          {books.map((book) =>
            <Book book={book} key={book.id} />
          )}
        </ul>
      </div>
    )
    : (
      <EmptyBooksList className={emptyClassName} />
    );

ListOfBooks.propTypes = {
  books: PropTypes.array.isRequired,
  className: PropTypes.string.isRequired,
  emptyClassName: PropTypes.string.isRequired
};

export default ListOfBooks;
