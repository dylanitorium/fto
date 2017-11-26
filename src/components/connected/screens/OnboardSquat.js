import { connect } from 'react-redux';
import OnboardSettings from '../../screens/OnboardSettings';
import { EXERCISES } from '../../../constants';
import { updateIncrement, updateMax } from '../../../redux/reducers/settings';


export default connect(
  state => ({
    exercise: EXERCISES.SQUAT,
    next: EXERCISES.OVERHEAD,
    maxValue: state.settings[EXERCISES.SQUAT].max,
    workingMaxValue: state.settings[EXERCISES.SQUAT].workingMax,
    incrementValue: state.settings[EXERCISES.SQUAT].increment,
  }),
  {
    onMaxChange: updateMax,
    onIncrementChange: updateIncrement,
  },
)(OnboardSettings);
