import { connect } from 'react-redux';
import { withRouter } from 'react-router-native';
import enumerize from 'enumerize';
import Dashboard from '../../screens/Dashboard';
import { startCycle, completeCycle } from '../../../redux/reducers/cycles';
import { WEEKS } from '../../../constants';

export default withRouter(connect(
  ({ cycles: { cycle }, ...state }) => ({
    hasHistory: false,
    cycleIsActive: cycle.active,
    settings: state.settings,
    canComplete: true,
    completed: cycle.completed,
    completeContext: [cycle],
  }),
  {
    onButtonPress: startCycle,
    onCompletePress: completeCycle
  }
)(Dashboard));
