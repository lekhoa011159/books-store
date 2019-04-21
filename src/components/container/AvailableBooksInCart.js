import { connect } from 'react-redux';
import Cart from '../Cart';
import { deleteInCart } from '../../actions/cart';

const mapStateToProps = (state) => ({
  cart: state.cart
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteItem: (index) => {
    dispatch(deleteInCart(index));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);