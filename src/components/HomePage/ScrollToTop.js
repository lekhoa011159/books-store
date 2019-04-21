import React from 'react';
import PropTypes from 'prop-types';

const handleScrollToTop = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, etc...
}

const ScrollToTop = ({ className }) => {
  return (
    <div className={className} onClick={handleScrollToTop}>
      <i className="fas fa-arrow-circle-up" />
      {/* Top */}
      <p>Go To Top</p>
    </div>
  );
}

ScrollToTop.propTypes = {
  className: PropTypes.string.isRequired,
};

export default ScrollToTop;
