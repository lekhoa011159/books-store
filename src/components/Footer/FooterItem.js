/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';

const SubList = ({ header, text }) => (
  <li>
    <a href="javascript:void(0);">
      {header !== 'payment methods'
        ? header !== 'linked with us'
          ? text
          : <i className={'fab fa-' + text} />
        : <i className={'fab fa-cc-' + text} />}
    </a>
  </li>
);

const FooterItem = ({ list, header }) => (
  <li>
    <h3>{header}</h3>
    <ul style={(header === 'payment methods' || header === 'linked with us') ? { flexFlow: 'row wrap', maxWidth: 182 } : { flexFlow: 'column wrap', alignItems: 'flex-start' }}>
      {list.map((text, index) =>
        <SubList key={index} text={text} header={header} />
      )}
    </ul>
  </li>
);

FooterItem.propTypes = {
  list: PropTypes.array.isRequired,
  header: PropTypes.string.isRequired
};

SubList.propTypes = {
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default FooterItem;