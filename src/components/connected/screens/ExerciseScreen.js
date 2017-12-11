import { connect } from 'react-redux';
import { withRouter } from 'react-router-native';
import enumerize from 'enumerize';
import ExerciseScreen from '../../screens/ExerciseScreen';
import { toggleExercise, toggleSet } from '../../../redux/reducers/cycles';


export default withRouter(connect(
  (state, ownProps) => {
    const { exerciseCompleted, ...sets } = state.cycles.cycle[ownProps.match.params.week][ownProps.match.params.exercise];
    return {
      sets,
      canCompleteExercise: enumerize(sets).allChildrenMatch({ setCompleted: true }),
      exerciseCompleted,
    };
  },
  {
    onSetItemPress: toggleSet,
    onCompletePress: toggleExercise,
  }
)(ExerciseScreen));
