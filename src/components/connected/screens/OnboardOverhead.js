import { connect } from 'react-redux';
import OnboardSettings from '../../screens/OnboardSettings';
import { EXERCISES, MEASUREMENT_SYSTEMS } from '../../../constants';
import { updateIncrement, updateMax } from '../../../redux/reducers/settings';

export default connect(
  state => ({
    screenTitle: EXERCISES.OVERHEAD,
    exercise: EXERCISES.OVERHEAD,
    maxValue: state.settings[EXERCISES.OVERHEAD].max,
    workingMaxValue: state.settings[EXERCISES.OVERHEAD].workingMax,
    incrementValue: state.settings[EXERCISES.OVERHEAD].increment,
    next: `/onboard/${EXERCISES.DEADLIFT}`,
    unit: state.settings.measurementSystem === MEASUREMENT_SYSTEMS.IMPERIAL ? '(lb)' : '(kg)',
  }),
  {
    onMaxChange: updateMax,
    onIncrementChange: updateIncrement,
  },
)(OnboardSettings);
