import { connect } from 'react-redux';
import { withRouter } from 'react-router-native';
import ExerciseScreen from '../../screens/ExerciseScreen';

export default withRouter(connect(
  (state, ownProps) => ({
    sets: state.cycles.cycle[ownProps.match.params.week][ownProps.match.params.exercise],
  })
)(ExerciseScreen));
