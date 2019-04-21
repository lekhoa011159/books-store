import { TYPES } from './constants';

export const increaseAmount = (index) => ({
  type: TYPES.INCREASE_AMOUNT,
  payload: {
    index
  }
});

export const decreaseAmount = (index) => ({
  type: TYPES.DECREASE_AMOUNT,
  payload: {
    index
  }
});

export const modifyAmount = (index, value) => ({
  type: TYPES.MODIFY_AMOUNT,
  payload: {
    index,
    value
  }
});