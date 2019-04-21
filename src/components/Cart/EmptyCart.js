import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const EmptyCart = ({ className }) => (
  <div className={className}>
    <i className="fas fa-shopping-cart" />
    <h1>Cart is Empty.</h1>
    <p>
      No books available in your cart.
    </p>
    <p>
      Click <Link to="/">here</Link> to continue shopping.
    </p>
  </div>
);

EmptyCart.propTypes = {
  className: PropTypes.string.isRequired
};

export default EmptyCart;