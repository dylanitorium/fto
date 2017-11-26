import { connect } from 'react-redux';
import { withRouter } from 'react-router-native';
import Dashboard from '../../screens/Dashboard';

export default withRouter(connect(
  state => ({
    hasHistory: false,
  })
)(Dashboard));
