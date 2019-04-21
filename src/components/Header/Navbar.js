import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Notification from './Notification';

class Navbar extends React.Component {
  state = { isDisplayNotification: false };

  toggleNotification = () => {
    this.setState((prevState) => ({
      isDisplayNotification: !prevState.isDisplayNotification
    }));
  }

  render() {
    const {
      menus,
      className,
      notiClassName
    } = this.props;

    return (
      <ul className={className}>
        {menus.map(({ id, text, icon, path }) =>
          <li key={id} onClick={text === 'Notification' ? this.toggleNotification : () => { }}>
            <i className={icon} />
            {path
              ? <Link to={path}>{text}</Link>
              : <a href="/" onClick={(e) => e.preventDefault()}>{text}</a>}
          </li>
        )
        }
        <li>
          <Notification isDisplay={this.state.isDisplayNotification} className={notiClassName} />
        </li>
      </ul>
    );
  }
}

Navbar.propTypes = {
  menus: PropTypes.array.isRequired,
  className: PropTypes.string.isRequired,
  notiClassName: PropTypes.string.isRequired
};

export default Navbar;
