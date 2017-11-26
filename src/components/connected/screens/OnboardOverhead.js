import React from 'react';
import { connect } from 'react-redux';
import OnboardSettings from '../../screens/OnboardSettings';
import { EXERCISES } from '../../../constants';
import { updateIncrement, updateMax } from '../../../redux/reducers/settings';

export default connect(
  state => ({
    exercise: EXERCISES.OVERHEAD,
    next: EXERCISES.DEADLIFT,
    maxValue: state.settings[EXERCISES.OVERHEAD].max,
    workingMaxValue: state.settings[EXERCISES.OVERHEAD].workingMax,
    incrementValue: state.settings[EXERCISES.OVERHEAD].increment,
  }),
  {
    onMaxChange: updateMax,
    onIncrementChange: updateIncrement,
  },
)(OnboardSettings);

