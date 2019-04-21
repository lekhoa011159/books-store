import React from 'react';
import PropTypes from 'prop-types';

import ListOfBooks from './ListOfBooks';
import CategoryNav from '../Category/CategoryNav';

import styles from './index.module.css';

import { list } from '../../test';

const HomePage = ({ books }) => (
  <div className={styles.Component}>
    <CategoryNav list={list} />
    <ListOfBooks books={books} className={styles.Books} emptyClassName={styles.Empty} />
  </div>
);

HomePage.propTypes = {
  books: PropTypes.array.isRequired
};

export default HomePage;
