import React from 'react';
import PropTypes from 'prop-types';

import CategoryItem from './CategoryItem';

import styles from './index.module.css';

const CategoryNav = ({ list }) => (
  <div className={styles.Component}>
    <ul>
      {list.map((item, index) =>
        <CategoryItem
          text={item.text}
          path={item.path}
          key={index}
        />
      )}
    </ul>
  </div>
);

CategoryNav.propTypes = {
  list: PropTypes.array.isRequired,
};

export default CategoryNav;
