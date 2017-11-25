import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, Divider } from '@shoutem/ui';
import { PaddedContainer } from '../PaddedContainer';
import {InputLabel} from '../InputLabel';

const SetWeightsForm = props => (
  <PaddedContainer>
    <InputLabel>{'One Rep Max'}</InputLabel>
    <TextInput
      placeholder={'One Rep Max'}
      onChangeText={value => props.onMaxChange(props.exercise, value)}
      value={props.maxValue}
    />
    <Divider />
    <InputLabel>{'Working Max'}</InputLabel>
    <TextInput
      placeholder={'Working Max'}
      value={props.workingMaxValue}
    />
    <Divider />
    <InputLabel>{'Cycle Increment'}</InputLabel>
    <TextInput
      placeholder={'Cycle Increment'}
      onChangeText={value => props.onIncrementChange(props.exercise, value)}
      value={props.incrementValue}
    />
  </PaddedContainer>
);

SetWeightsForm.propTypes = {
  exercise: PropTypes.string.isRequired,
  maxValue: PropTypes.string.isRequired,
  workingMaxValue: PropTypes.string.isRequired,
  incrementValue: PropTypes.string.isRequired,
  onMaxChange: PropTypes.func.isRequired,
  onIncrementChange: PropTypes.func.isRequired,
};

export default SetWeightsForm;
