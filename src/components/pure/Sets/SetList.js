import React from 'react';
import PropTypes from 'prop-types';
import { View, Divider, Title } from '@shoutem/ui';
import SetItem from './SetItem';

const WeekList = props => (
  <View>
    <Title> Warm Up </Title>
    <SetItem>
      {props.warmUpSetOne}
    </SetItem>
    <Divider />
    <SetItem>
      {props.warmUpSetTwo}
    </SetItem>
    <Divider />
    <SetItem>
      {props.warmUpSetThree}
    </SetItem>
    <Divider />
    <Title> Working Sets </Title>
    <SetItem>
      {props.workingSetOne}
    </SetItem>
    <Divider />
    <SetItem>
      {props.workingSetTwo}
    </SetItem>
    <Divider />
    <SetItem>
      {props.workingSetThree}
    </SetItem>
  </View>
);

WeekList.propTypes = {
  match: PropTypes.object.isRequired
};

WeekList.defaultProps = {

};

export default WeekList;

