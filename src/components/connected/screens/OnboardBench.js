import { connect } from 'react-redux';
import OnboardSettings from '../../screens/OnboardSettings';
import { EXERCISES } from '../../../constants';
import { updateIncrement, updateMax } from '../../../redux/reducers/settings';

export default connect(
  state => ({
    exercise: EXERCISES.BENCH,
    next: EXERCISES.SQUAT,
    maxValue: state.settings[EXERCISES.BENCH].max,
    workingMaxValue: state.settings[EXERCISES.BENCH].workingMax,
    incrementValue: state.settings[EXERCISES.BENCH].increment,
  }),
  {
    onMaxChange: updateMax,
    onIncrementChange: updateIncrement,
  },
)(OnboardSettings);
