import React from 'react';
import PropTypes from 'prop-types';
import { Text, Divider } from '@shoutem/ui/';
import { SetWeightsForm } from '../pure/SetWeightsForm';
import { Screen } from '../pure/Screen';
import { LinkButton } from '../utility/index';
import PaddedContainer from '../pure/PaddedContainer/PaddedContainer';

const OnboardSettings = props => (
  <Screen {...props}>
    <PaddedContainer>
      <SetWeightsForm {...props} />
      <Divider />
      <LinkButton to={props.next} styleName="secondary">
        <Text>
          Next
        </Text>
      </LinkButton>
    </PaddedContainer>
  </Screen>
);

OnboardSettings.propTypes = {
  maxValue: PropTypes.string.isRequired,
  workingMaxValue: PropTypes.string.isRequired,
  incrementValue: PropTypes.string.isRequired,
  onMaxChange: PropTypes.func.isRequired,
  onIncrementChange: PropTypes.func.isRequired,
  next: PropTypes.string.isRequired,
};

export default OnboardSettings;
