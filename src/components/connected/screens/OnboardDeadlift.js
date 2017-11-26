import { connect } from 'react-redux';
import OnboardSettings from '../../screens/OnboardSettings';
import { EXERCISES } from '../../../constants';
import { updateIncrement, updateMax } from '../../../redux/reducers/settings';
import { initialize } from '../../../redux/reducers/app';


export default connect(
  state => ({
    exercise: EXERCISES.DEADLIFT,
    maxValue: state.settings[EXERCISES.DEADLIFT].max,
    workingMaxValue: state.settings[EXERCISES.DEADLIFT].workingMax,
    incrementValue: state.settings[EXERCISES.DEADLIFT].increment,
  }),
  {
    onMaxChange: updateMax,
    onIncrementChange: updateIncrement,
    beforeRedirect: initialize,
  },
)(OnboardSettings);

