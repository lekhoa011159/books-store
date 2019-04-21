import { TYPES } from './constants';

export const addToCart = (book) => ({
  type: TYPES.ADD_TO_CART,
  payload: {
    book
  }
});

export const deleteInCart = (id) => ({
  type: TYPES.DELETE_IN_CART,
  payload: {
    id
  }
})