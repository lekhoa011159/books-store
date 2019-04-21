import { connect } from 'react-redux';
import CartAmount from '../Cart/CartAmount';
import { increaseAmount, decreaseAmount, modifyAmount } from '../../actions/item';

const mapStateToProps = (state) => ({
  cart: state.cart
})

const mapDispatchToProps = (dispatch) => ({
  handleIncrease: (index) => {
    dispatch(increaseAmount(index));
  },

  handleDecrease: (index) => {
    dispatch(decreaseAmount(index));
  },

  handleModify: (index, value) => {
    dispatch(modifyAmount(index, value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CartAmount);