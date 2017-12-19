import React from 'react';
import PropTypes from 'prop-types';
import { View, Divider } from '@shoutem/ui';
import WeekItem from './WeekItem';
import { WEEKS } from '../../../constants';
import CompleteButton from '../CompleteButton/CompleteButton';

const WeekList = props => (
  <View>
    <WeekItem to={`${props.match.url}week/${WEEKS.ONE}`}>
      Week One
    </WeekItem>
    <Divider />
    <WeekItem to={`${props.match.url}week/${WEEKS.TWO}`}>
      Week Two
    </WeekItem>
    <Divider />
    <WeekItem to={`${props.match.url}week/${WEEKS.THREE}`}>
      Week Three
    </WeekItem>
    <Divider />
    <WeekItem to={`${props.match.url}week/${WEEKS.FOUR}`}>
      Week Four
    </WeekItem>
    <Divider />
    <CompleteButton {...props}>
      Complete Cycle
    </CompleteButton>
  </View>
);

WeekList.propTypes = {
  match: PropTypes.object.isRequired
};

WeekList.defaultProps = {

};

export default WeekList;

