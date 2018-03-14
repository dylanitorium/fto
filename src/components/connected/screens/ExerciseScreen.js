import { connect } from 'react-redux';
import { withRouter } from 'react-router-native';
import enumerize from 'enumerize';
import ExerciseScreen from '../../screens/ExerciseScreen';
import { MEASUREMENT_SYSTEMS } from '../../../constants';
import { completeExercise, toggleSet } from '../../../redux/reducers/cycles';


export default withRouter(connect(
  (state, ownProps) => {
    const { match: { params: { week, exercise, cycleId } } } = ownProps;
    const { exerciseCompleted, ...sets } = cycleId
      ? state.cycles.history[cycleId][week][exercise]
      : state.cycles.cycle[week][exercise];
    return {
      sets,
      canComplete: enumerize(sets).allChildrenMatch({ setCompleted: true }),
      completed: exerciseCompleted,
      completeContext: [week, exercise],
      unit: state.settings.measurementSystem === MEASUREMENT_SYSTEMS.IMPERIAL ? 'lb' : 'kg',
    };
  },
  {
    onSetItemPress: toggleSet,
    onCompletePress: completeExercise,
  }
)(ExerciseScreen));
