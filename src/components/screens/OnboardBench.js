import React from 'react';
import PropTypes from 'prop-types';
import { SetWeightsForm } from '../pure/SetWeightsForm';
import { EXERCISES } from '../../constants';
import { Screen } from '../pure/Screen';

const OnboardBench = props => (
  <Screen {...props}>
    <SetWeightsForm exercise={EXERCISES.BENCH} {...props} />
  </Screen>
);

OnboardBench.propTypes = {
  maxValue: PropTypes.string.isRequired,
  workingMaxValue: PropTypes.string.isRequired,
  incrementValue: PropTypes.string.isRequired,
  onMaxChange: PropTypes.func.isRequired,
  onIncrementChange: PropTypes.func.isRequired,
};

export default OnboardBench;
