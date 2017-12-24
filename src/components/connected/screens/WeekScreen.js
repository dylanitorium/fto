import { connect } from 'react-redux';
import enumerize from 'enumerize';
import { withRouter } from 'react-router-native';
import WeekScreen from '../../screens/WeekScreen';
import { completeWeek } from '../../../redux/reducers/cycles';


export default withRouter(connect(
  (state, ownProps) => {
    const { match: { params: { week, cycleId } } } = ownProps;
    const { weekCompleted, ...exercises } = cycleId ? state.cycles.history[cycleId][week] : state.cycles.cycle[week];
    return {
      exercises,
      canComplete: enumerize(exercises).allChildrenMatch({ exerciseCompleted: true }),
      completed: weekCompleted,
      completeContext: [week],
    };
  },
  {
    onCompletePress: completeWeek
  }
)(WeekScreen));
