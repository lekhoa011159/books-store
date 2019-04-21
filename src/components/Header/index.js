import React from 'react';

import Navbar from './Navbar';
import Logo from './Logo';
import SearchForm from './SearchForm';

import styles from './index.module.css';

const menus = [
  { id: 1, text: 'Notification', icon: 'fas fa-bell' },
  { id: 2, text: 'Sign up', icon: "fas fa-user-circle" },
  { id: 3, text: 'Cart', icon: 'fas fa-shopping-cart', path: '/my-cart' }
];

const Header = ({ onSearchBook }) => (
  <div className={styles.Component}>
    <SearchForm styles={styles} onSearchBook={onSearchBook} />
    <Logo />
    <Navbar menus={menus} notiClassName={styles.Notification} className={styles.Nav} />
  </div>
);

export default Header;
