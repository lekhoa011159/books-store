import { TYPES } from '../actions/constants';

const cart = (state = [], action) => {
  const newState = [...state];
  let amount, price;
  const { payload } = action;

  switch (action.type) {
    case TYPES.ADD_TO_CART:
      return [
        ...state,
        action.payload.book
      ];
    case TYPES.DELETE_IN_CART:
      return state.filter(({ id }) => action.payload.id !== id);
    case TYPES.INCREASE_AMOUNT:
      amount = newState[payload.index].amount;
      price = newState[payload.index].price / amount;

      newState[payload.index].price += price;
      newState[payload.index].amount = Number(amount) + 1;
      return newState;
    case TYPES.DECREASE_AMOUNT:
      amount = newState[payload.index].amount;
      price = newState[payload.index].price / amount;

      if (amount === 1) {
        return newState;
      }

      newState[payload.index].price -= price;
      newState[payload.index].amount = amount - 1;
      return newState;
    case TYPES.MODIFY_AMOUNT:
      amount = payload.value;
      price = newState[payload.index].price / newState[payload.index].amount;

      if (amount < 1) {
        return newState;
      }

      newState[payload.index].amount = payload.value;
      newState[payload.index].price = price * amount;
      return newState;
    default:
      return state;
  }
}

export default cart;