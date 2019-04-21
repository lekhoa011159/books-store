import React from 'react';
import PropTypes from 'prop-types';

let nextId = 1;

const CartButton = ({ book, onAddToCart }) => (
  <button onClick={() => {
    alert(`Name: ${book.name}, Author: ${book.author}, Price: ${book.price}`)
    onAddToCart({...book, id: nextId++});
  }}>
    <i className="fas fa-shopping-cart" />
    Add to cart
  </button>
);

CartButton.propTypes = {
  onAddToCart: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired,
};

export default CartButton;