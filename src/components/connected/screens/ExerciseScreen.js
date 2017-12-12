import { connect } from 'react-redux';
import { withRouter } from 'react-router-native';
import enumerize from 'enumerize';
import ExerciseScreen from '../../screens/ExerciseScreen';
import { completeExercise, toggleSet } from '../../../redux/reducers/cycles';


export default withRouter(connect(
  (state, ownProps) => {
    const { match: { params: { week, exercise } } } = ownProps;
    const { exerciseCompleted, ...sets } = state.cycles.cycle[week][exercise];

    return {
      sets,
      canComplete: enumerize(sets).allChildrenMatch({ setCompleted: true }),
      completed: exerciseCompleted,
      completeContext: [week, exercise],
    };
  },
  {
    onSetItemPress: toggleSet,
    onCompletePress: completeExercise,
  }
)(ExerciseScreen));
