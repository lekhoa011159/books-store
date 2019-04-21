import React from 'react';
import PropTypes from 'prop-types';

const PaymentItem = ({ name, price }) => (
  <li>
    <p title={name} style={{ whiteSpace: 'nowrap', width: 200, textOverflow: 'ellipsis', overflow: 'hidden' }}>{name}</p>
    <p>{"$ "}{price.toLocaleString()}</p>
  </li>
);

const Payment = ({ className, cart }) => (
  <form onSubmit={
    (e) => {
      e.preventDefault();

      alert(`Your total product cost: $${cart.map((item) => item.price).reduce((acc, price) => acc + price).toLocaleString()}`);
      window.location.href = "/";
    }}
    className={className}
  >
    <ul>
      {/* header */}
      <li style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
        <p>Name</p>
        <p>Price</p>
      </li>

      <hr />

      {cart.map((item, index) =>
        <PaymentItem name={item.name} price={item.price} key={index} />
      )}

      <hr />

      {/* -total */}
      <li style={{ color: 'red', fontWeight: 700 }}>
        <p>Total: </p>
        <p>
          {"$ "}{cart.map((item) => item.price).reduce((acc, price) => acc + price).toLocaleString()}
        </p>
      </li>
    </ul>
    <input type="submit" value="Payment" />
  </form>
);

Payment.propTypes = {
  className: PropTypes.string.isRequired,
  cart: PropTypes.array.isRequired
};

export default Payment;