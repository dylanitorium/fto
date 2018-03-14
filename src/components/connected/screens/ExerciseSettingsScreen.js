import { connect } from 'react-redux';
import ExerciseSettingsScreen from '../../screens/ExerciseSettingsScreen';
import { MEASUREMENT_SYSTEMS } from '../../../constants';
import { updateIncrement, updateMax } from '../../../redux/reducers/settings';

export default connect(
  (state, { match: { params: { exercise } } }) => ({
    exercise,
    maxValue: state.settings[exercise].max,
    workingMaxValue: state.settings[exercise].workingMax,
    incrementValue: state.settings[exercise].increment,
    unit: state.settings.measurementSystem === MEASUREMENT_SYSTEMS.IMPERIAL ? '(lb)' : '(kg)',
  }),
  {
    onMaxChange: updateMax,
    onIncrementChange: updateIncrement,
  },
)(ExerciseSettingsScreen);
