import React from 'react';
import PropTypes from 'prop-types';

const CartItem = ({ item, onDeleteItem, className }) => (
  <div className={className}>
    <img src={item.img} alt="Thumbnail" />
    <div title={item.name} style={{ display: 'inline-block', whiteSpace: 'nowrap', width: 240 }}>
      <p style={{ overflow: 'hidden', textOverflow: 'ellipsis', paddingBottom: 8 }}>{item.name}</p>
      <p style={{ fontSize: '.8em', color: '#999', padding: '0 0 12px 28px' }}>
        {"- "}{item.author}
      </p>

      {/* DELETE OUT OF CART */}
      <button onClick={() => {
        alert(`Deleted "${item.name}" in cart`);
        onDeleteItem(item.id);
      }}>Delete</button>
    </div>
  </div>
);

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired
};

export default CartItem;