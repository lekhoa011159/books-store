import { CATEGORY_FILTER } from '../actions/constants';

const filterCategory = (state = CATEGORY_FILTER.ALL, action) => {
  switch(action.type) {
    case 'FILTER_CATEGORY': 
      return action.filter;
    default: 
    return state;
  }
}

export default filterCategory;