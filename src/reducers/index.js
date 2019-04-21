import { combineReducers } from 'redux';
import cart from './cartReducer';
import filterCategory from './filterReducer';

const rootReducer = combineReducers({
  cart,
  category: filterCategory
});

export default rootReducer;