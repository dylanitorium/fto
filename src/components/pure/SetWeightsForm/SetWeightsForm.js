import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { TextInput, Divider } from '@shoutem/ui';
import { InputLabel } from '../InputLabel';

const SetWeightsForm = props => (
  <View>
    <InputLabel>{'One Rep Max'}</InputLabel>
    <TextInput
      keyboardType={'numeric'}
      placeholder={'One Rep Max'}
      onChangeText={value => props.onMaxChange(props.exercise, value)}
      value={props.maxValue.toString()}
    />
    <Divider />
    <InputLabel>{'Working Max (calculated)'}</InputLabel>
    <TextInput
      keyboardType={'numeric'}
      placeholder={'Working Max'}
      value={props.workingMaxValue.toString()}
      editable={false}
    />
    <Divider />
    <InputLabel>{'Cycle Increment'}</InputLabel>
    <TextInput
      keyboardType={'numeric'}
      placeholder={'Cycle Increment'}
      onChangeText={value => props.onIncrementChange(props.exercise, value)}
      value={props.incrementValue.toString()}
    />
  </View>
);

SetWeightsForm.propTypes = {
  exercise: PropTypes.string.isRequired,
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

export default SetWeightsForm;
