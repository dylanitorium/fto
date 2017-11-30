import { connect } from 'react-redux';
import { withRouter } from 'react-router-native';
import Dashboard from '../../screens/Dashboard';
import { startCycle } from '../../../redux/reducers/cycles';

export default withRouter(connect(
  state => ({
    hasHistory: false,
    cycleIsActive: state.cycles.cycle.active,
    settings: state.settings,
  }),
  {
    onButtonPress: startCycle,
  }
)(Dashboard));
