import { connect } from 'react-redux';
import { addToCart } from '../../actions/cart';
import CartButton from '../Book/CartButton';

const mapStateToProps = (state) => ({
  cart: state.cart
});

const mapDispatchToProps = (dispatch) => ({
  onAddToCart: (book) => {
    dispatch(addToCart(book));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CartButton);