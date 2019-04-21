import React from 'react';
import PropTypes from 'prop-types';

const EmptyBooksList = ({ className }) => {
  return (
    <div className={className}>
      <i className="fas fa-book-open" />
      <p>
        We can't find out your book.
        <br />
        Try search one more time.
      </p>
    </div>
  );
}

EmptyBooksList.propTypes = {
  className: PropTypes.string.isRequired
}

export default EmptyBooksList
