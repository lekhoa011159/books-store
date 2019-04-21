import React from 'react';
import PropTypes from 'prop-types';

const CartAmount = ({ cart, index, className, handleIncrease, handleDecrease, handleModify }) => (
  <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    flexBasis: '50%'
  }}>
    <p style={{ paddingTop: 8, color: 'var(--red-secondary)' }}>{"$ "}{cart[index].price.toLocaleString()}</p>
    <div className={className}>
      <button onClick={() => handleIncrease(index)}>+</button>
      <input
        type="number"
        value={cart[index].amount}
        onChange={(e) => handleModify(index, e.target.value)}
      />
      <button onClick={() => handleDecrease(index)}>-</button>
    </div>
  </div>
);

CartAmount.propTypes = {
  className: PropTypes.string.isRequired,
  cart: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  handleIncrease: PropTypes.func.isRequired,
  handleDecrease: PropTypes.func.isRequired,
  handleModify: PropTypes.func.isRequired
};

export default CartAmount;