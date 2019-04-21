import React from 'react';
import PropTypes from 'prop-types';

import EmptyCart from './EmptyCart';
import AvailableCart from './AvailableCart';
import PaymentContainer from '../container/PaymentContainer';

import styles from './index.module.css';

const Cart = ({ cart, onDeleteItem }) => {
  return cart.length === 0
    ? <EmptyCart className={styles.Empty} />
    : (
      <div className={styles.Component}>
        <AvailableCart
          onDeleteItem={onDeleteItem}
          cart={cart}
          className={styles.Available}
          itemClassName={styles.Item}
          amountClassName={styles.Amount}
        />
        <PaymentContainer className={styles.Payment} />
      </div>
    );
}

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  onDeleteItem: PropTypes.func.isRequired
};

export default Cart;
