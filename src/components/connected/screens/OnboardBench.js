import { connect } from 'react-redux';
import OnboardSettings from '../../screens/OnboardSettings';
import { EXERCISES, MEASUREMENT_SYSTEMS } from '../../../constants';
import { updateIncrement, updateMax } from '../../../redux/reducers/settings';

export default connect(
  state => ({
    screenTitle: EXERCISES.BENCH,
    exercise: EXERCISES.BENCH,
    maxValue: state.settings[EXERCISES.BENCH].max,
    workingMaxValue: state.settings[EXERCISES.BENCH].workingMax,
    incrementValue: state.settings[EXERCISES.BENCH].increment,
    next: `/onboard/${EXERCISES.SQUAT}`,
    unit: state.settings.measurementSystem === MEASUREMENT_SYSTEMS.IMPERIAL ? '(lb)' : '(kg)',
  }),
  {
    onMaxChange: updateMax,
    onIncrementChange: updateIncrement,
  },
)(OnboardSettings);
