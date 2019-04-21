import React from 'react';
import PropTypes from 'prop-types';

import CartItem from './CartItem';
import SetAmountItem from '../container/SetAmountItem';

const AvailableCart = ({ cart, onDeleteItem, className, itemClassName, amountClassName }) => (
  <ul className={className}>
    {/* header */}
    <li style={{
      borderTop: 'none',
      fontFamily: 'ZCOOL XiaoWei, serif',
      fontWeight: 700
    }}>Your Shopping Cart</li>
    {cart.map((item, index) =>
      <li key={index}>
        <CartItem onDeleteItem={onDeleteItem} item={item} className={itemClassName} />
        <SetAmountItem index={index} className={amountClassName} />
      </li>
    )}
  </ul>
);

AvailableCart.propTypes = {
  cart: PropTypes.array.isRequired,
  className: PropTypes.string.isRequired,
  itemClassName: PropTypes.string.isRequired,
  amountClassName: PropTypes.string.isRequired,
  onDeleteItem: PropTypes.func.isRequired
};

export default AvailableCart;