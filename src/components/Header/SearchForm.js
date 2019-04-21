import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

const SearchForm = ({ onSearchBook }) => (
  <form className={styles.Form}>
    <div>
      <input
        type="text"
        placeholder="Search any book..."
        onChange={onSearchBook}
      />
      {/* <div className={styles.searchGroup}>
        <i className="fas fa-search" />
        <span>Search</span>
      </div> */}
    </div>
  </form>
);

SearchForm.propTypes = {
  styles: PropTypes.object.isRequired,
  onSearchBook: PropTypes.func.isRequired
};

export default SearchForm;
