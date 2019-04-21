import React from 'react';
import PropTypes from 'prop-types';

const BottomLogo = ({ className }) => (
  <div className={className}>
    <p style={{ fontSize: '1.2em' }}>
      <i className="fas fa-terminal" style={{ fontSize: '2em', padding: 8, color: 'var(--secondary)' }} />
      By <a target="__blank" href="https://www.facebook.com/dont.cold" style={{ color: 'blue' }}> Dang Khoa </a>2019.
      </p>
    <img src="http://www.meti.go.jp/english/img_2017/top/logo.png" alt="" />
  </div>
);

BottomLogo.propTypes = {
  className: PropTypes.string.isRequired
};

export default BottomLogo;
