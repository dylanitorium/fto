import { connect } from 'react-redux';
import OnboardSettings from '../../screens/OnboardSettings';
import { EXERCISES } from '../../../constants';
import { updateIncrement, updateMax } from '../../../redux/reducers/settings';

export default connect(
  state => ({
    exercise: EXERCISES.BENCH,
    maxValue: state.settings[EXERCISES.BENCH].max,
    workingMaxValue: state.settings[EXERCISES.BENCH].workingMax,
    incrementValue: state.settings[EXERCISES.BENCH].increment,
    next: `/onboard/${EXERCISES.SQUAT}`,
  }),
  {
    onMaxChange: updateMax,
    onIncrementChange: updateIncrement,
  },
)(OnboardSettings);
