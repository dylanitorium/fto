import { connect } from 'react-redux';
import Dashboard from '../../screens/Dashboard';

export default connect(
  () => ({
    hasHistory: false,
  })
)(Dashboard);
