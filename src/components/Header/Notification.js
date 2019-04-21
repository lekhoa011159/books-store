/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';

const ads = [
  'Save on select Refurbished Apple Watches', 'Save 30% On Garden Of Life Dr Formulated organic supplements', 'Save 30% On Garden Of Life Dr Formulated organic supplements', 'Save $10 on the Echo Voice Remote', 'Save $20 on Echo Dot (3rd Gen)', '3 Pack Teflon Sheet For 16x20 Heat Press Transfer Sheet SUPER SALE LIMITED TIME', 'Chucky: Complete 7-Movie Collection [Blu-ray]', 'S & T 968601 Assorted Microfiber Cleaning Cloth, 50 Pack'
];

const Notification = ({ className, isDisplay }) => {
  return isDisplay
    ? (
      <div className={className}>
        <ul>
          {ads.map((item, index) =>
            <li key={index}>
              <a href="javascript:void(0);">
                <i className="fas fa-gift" />
                <p style={{ width: 300, textAlign: 'left' }}>{item}</p>
              </a>
            </li>
          )}
        </ul>
      </div>
    )
    : <div></div>;
}

Notification.propTypes = {
  className: PropTypes.string.isRequired,
  isDisplay: PropTypes.bool.isRequired
}

export default Notification;
