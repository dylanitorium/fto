import React from 'react';
import PropTypes from 'prop-types';
import { View, Title } from '@shoutem/ui';
import WarmUpSets from './WarmUpSets';

const WeekList = props => (
  <View>
    <Title> Warm Up Sets </Title>
    <WarmUpSets />
  </View>
);

WeekList.propTypes = {

};

WeekList.defaultProps = {

};

export default WeekList;

