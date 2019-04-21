import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Details from './Details';

import styles from './index.module.css';

const Book = ({ book }) => (
  <li>
    <Link to={"book/" + book.id} onClick={(e) => e.target === document.querySelectorAll('button')[book.id - 1] ? e.preventDefault() : {}}>
      <img src={book.img} alt="Something" />
      <Details
        book={book}
        className={styles.Component}
      />
    </Link>
  </li>
);

Book.propTypes = {
  book: PropTypes.object.isRequired
};

export default Book;