import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import HomePage from '../HomePage';
import AvailableBooksInCart from '../container/AvailableBooksInCart';

const Routes = ({ list }) => (
  <div>
    <Route
      exact
      path='/'
      render={() =>
        <HomePage books={list} />
      }
    />

    <Route
      exact
      path='/my-cart'
      component={AvailableBooksInCart}
    />
  </div>
);

Routes.propTypes = {
  list: PropTypes.array.isRequired
};

export default Routes;