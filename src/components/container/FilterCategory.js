import { connect } from 'react-redux';

import { CATEGORY_FILTER } from '../../actions/constants';
import { filterCategory } from '../../actions/categoryReducer';

import CategoryNav from '../Category/CategoryNav';
import { books } from './HomePage/test';

const filter = (state, filter) => {
  switch (filter) {
    case CATEGORY_FILTER.ALL:
      return state;
    default:
      return state.filter(({ category }) => filter === category);
  }
}

const mapStateToProps = (state) => ({
  books: filter(books, state.filterCategory)
});

const mapDispatchToProps = (dispatch) => ({
  onFilterCategory: (category) => {
    dispatch(filterCategory(category));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryNav);