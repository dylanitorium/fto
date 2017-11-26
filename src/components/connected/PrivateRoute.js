import { connect } from 'react-redux';
import PrivateRoute from '../utility/PrivateRoute';

const ConnectedPrivateRoute = connect(
  state => ({
    canEnter: state.app.initialized,
    redirectTo: '/onboard',
  })
)(PrivateRoute);

export default ConnectedPrivateRoute;
