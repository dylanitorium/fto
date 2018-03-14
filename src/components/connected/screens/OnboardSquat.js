import { connect } from 'react-redux';
import OnboardSettings from '../../screens/OnboardSettings';
import { EXERCISES, MEASUREMENT_SYSTEMS } from '../../../constants';
import { updateIncrement, updateMax } from '../../../redux/reducers/settings';


export default connect(
  state => ({
    screenTitle: EXERCISES.SQUAT,
    exercise: EXERCISES.SQUAT,
    maxValue: state.settings[EXERCISES.SQUAT].max,
    workingMaxValue: state.settings[EXERCISES.SQUAT].workingMax,
    incrementValue: state.settings[EXERCISES.SQUAT].increment,
    next: `/onboard/${EXERCISES.OVERHEAD}`,
    unit: state.settings.measurementSystem === MEASUREMENT_SYSTEMS.IMPERIAL ? '(lb)' : '(kg)',
  }),
  {
    onMaxChange: updateMax,
    onIncrementChange: updateIncrement,
  },
)(OnboardSettings);
