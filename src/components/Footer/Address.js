import React from 'react';
import PropTypes from 'prop-types';

const Address = ({ addObj, className }) => (
  <div className={className}>
    <i style={{ padding: 16, fontSize: '3em', color: '#ccc' }} className="fas fa-map-marked-alt" />
    <div>
      <span style={{ fontWeight: 700 }}>{addObj.header}: </span>
      <span>{addObj.address}.</span>
      <p style={{ fontSize: 15 }}>{addObj.desc}</p>
    </div>
  </div>
);

Address.propTypes = {
  addObj: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired
};

export default Address;
