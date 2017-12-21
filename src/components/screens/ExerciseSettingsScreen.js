import React from 'react';
import PropTypes from 'prop-types';
import { SetWeightsForm } from '../pure/SetWeightsForm';
import { Screen } from '../pure/Screen';
import PaddedContainer from '../pure/PaddedContainer/PaddedContainer';

const ExerciseSettingsScreen = props => (
  <Screen {...props}>
    <PaddedContainer>
      <SetWeightsForm {...props} />
    </PaddedContainer>
  </Screen>
);

ExerciseSettingsScreen.propTypes = {
  maxValue: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  workingMaxValue: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  incrementValue: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  onMaxChange: PropTypes.func.isRequired,
  onIncrementChange: PropTypes.func.isRequired,
};

export default ExerciseSettingsScreen;
