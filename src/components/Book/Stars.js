import React from 'react';
import PropTypes from 'prop-types';

const Stars = ({ amount }) => {
  let jsx = [];
  for (let i = 0; i < amount; i++) {
    jsx.push(<i key={i} className="fas fa-star active" />);
  }
  for (let i = 5; i > amount; i--) {
    jsx.push(<i key={i} className="fas fa-star" />)
  }
  return jsx;
}

Stars.propTypes = {
  amount: PropTypes.number.isRequired
};

export default Stars;