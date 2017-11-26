import React from 'react';
import PropTypes from 'prop-types';
import { Text, Divider } from '@shoutem/ui/';
import { SetWeightsForm } from '../pure/SetWeightsForm';
import { Screen } from '../pure/Screen';
import PaddedContainer from '../pure/PaddedContainer/PaddedContainer';
import { Button } from '../pure/Button/';

const OnboardSettings = props => (
  <Screen {...props}>
    <PaddedContainer>
      <SetWeightsForm {...props} />
      <Divider />
      <Button to={props.next} beforeRedirect={props.beforeRedirect} styleName="secondary">
        {props.buttonText}
      </Button>
    </PaddedContainer>
  </Screen>
);

OnboardSettings.propTypes = {
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
  beforeRedirect: PropTypes.func,
  next: PropTypes.string,
  buttonText: PropTypes.string,
};

OnboardSettings.defaultProps = {
  next: '/',
  buttonText: 'Next',
  beforeRedirect: () => {}
};

export default OnboardSettings;
