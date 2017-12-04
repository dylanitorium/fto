import React from 'react';
import PropTypes from 'prop-types';
import { View, Title } from '@shoutem/ui';
import SetItem from './SetItem';
import { SETS } from '../../../constants';

const SetList = props => (
  <View>
    <Title> Warm Up Sets </Title>
    <SetItem>
      {props.data[SETS.WARM_UP_ONE].reps} x {props.data[SETS.WARM_UP_ONE].weight}kg
    </SetItem>
    <SetItem>
      {props.data[SETS.WARM_UP_TWO].reps} x {props.data[SETS.WARM_UP_TWO].weight}kg
    </SetItem>
    <SetItem>
      {props.data[SETS.WARM_UP_THREE].reps} x {props.data[SETS.WARM_UP_THREE].weight}kg
    </SetItem>
    <Title> Working Sets </Title>
    <SetItem>
      {props.data[SETS.ONE].reps} x {props.data[SETS.ONE].weight}kg
    </SetItem>
    <SetItem>
      {props.data[SETS.TWO].reps} x {props.data[SETS.TWO].weight}kg
    </SetItem>
    <SetItem>
      {props.data[SETS.THREE].reps} x {props.data[SETS.THREE].weight}kg
    </SetItem>
  </View>
);

SetList.propTypes = {
  data: PropTypes.object.isRequired,

};

SetList.defaultProps = {

};

export default SetList;

