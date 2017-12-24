import { connect } from 'react-redux';
import { withRouter } from 'react-router-native';
import enumerize from 'enumerize';
import Dashboard from '../../screens/Dashboard';
import { startCycle, completeCycle, cancelCycle } from '../../../redux/reducers/cycles';
import { WEEKS } from '../../../constants';


export default withRouter(connect(
  ({ cycles: { cycle, history }, ...state }) => ({
    cycle,
    hasHistory: false,
    history: enumerize(history),
    cycleIsActive: cycle.active,
    settings: state.settings,
    canComplete: cycle.active
      ? enumerize(cycle)
        .filterByKeys(enumerize(WEEKS).getValues())
        .allChildrenMatch({ weekCompleted: true })
      : false,
    completed: cycle.completed,
    completeContext: [cycle],
  }),
  {
    onStartPress: startCycle,
    onCompletePress: completeCycle,
    onCancelPress: cancelCycle
  }
)(Dashboard));

