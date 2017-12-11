import { connect } from 'react-redux';
import { withRouter } from 'react-router-native';
import WeekScreen from '../../screens/WeekScreen';

export default withRouter(connect(
  (state, ownProps) => {
    const exercises = state.cycles.cycle[ownProps.match.params.week];
    return {
      exercises
    };
  },
)(WeekScreen));
