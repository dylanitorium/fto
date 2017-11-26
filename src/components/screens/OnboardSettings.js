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
      <LinkButton to={`/onboard/${props.next}`} beforeRedirect={props.beforeRedirect} styleName="secondary">
        <Text>
          Next
        </Text>
      </LinkButton>
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
};

OnboardSettings.defaultProps = {
  next: '/',
  beforeRedirect: () => {}
};

export default OnboardSettings;
