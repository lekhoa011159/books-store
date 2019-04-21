import { connect } from 'react-redux';
import Payment from '../Cart/Payment';

const mapStateToProps = (state) => ({
  cart: state.cart
});

export default connect(mapStateToProps, null)(Payment);