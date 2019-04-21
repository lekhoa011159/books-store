import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CategoryItem = ({ text, path, onFilterCategory }) => (
  <li onClick={onFilterCategory}>
    <Link to={path}>
      <i style={{ paddingRight: 16 }} className="fas fa-book" />
      {text}
    </Link>
  </li>
);

CategoryItem.propTypes = {
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default CategoryItem;