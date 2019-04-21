import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import styles from './index.module.css';

const View = ({ match, books }) => {
  const index = match.params.id - 1;
  const { img } = books[index];

  return (
    <div className={styles.View}>
      <div style={{ paddingTop: '100%', position: 'relative', width: '100%' }}>
        <img src={img} alt="Thumbnail" />
      </div>
      <div style={{ border: '1px solid red', padding: 16 }}>
        Some Text
      </div>
    </div>
  );
}

View.propTypes = {
  match: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
};

export default withRouter(View);