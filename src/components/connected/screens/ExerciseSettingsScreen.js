import { connect } from 'react-redux';
import ExerciseSettingsScreen from '../../screens/ExerciseSettingsScreen';
import { updateIncrement, updateMax } from '../../../redux/reducers/settings';

export default connect(
  (state, { match: { params: { exercise } } }) => ({
    exercise,
    maxValue: state.settings[exercise].max,
    workingMaxValue: state.settings[exercise].workingMax,
    incrementValue: state.settings[exercise].increment,
  }),
  {
    onMaxChange: updateMax,
    onIncrementChange: updateIncrement,
  },
)(ExerciseSettingsScreen);

