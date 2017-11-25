import { connect } from 'react-redux';
import { withRouter } from 'react-router-native';
import { NavBar } from '../pure/Navbar';
import { ROUTE_MAP } from '../../constants';

const ConnectedNavBar = withRouter(connect(
  (state, ownProps) => ({
    hasHistory: (typeof ownProps.hasHistory !== 'undefined') ? ownProps.hasHistory : (ownProps.history.length > 1),
    screenTitle: ROUTE_MAP[ownProps.match.path] || 'fivethreeone',
  })
)(NavBar));

export default ConnectedNavBar;
