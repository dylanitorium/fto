import React from 'react';
import { View, Divider } from '@shoutem/ui';
import WeekItem from './WeekItem';

const WeekList = () => (
  <View>
    <WeekItem>
      Week One
    </WeekItem>
    <Divider />
    <WeekItem>
      Week Two
    </WeekItem>
    <Divider />
    <WeekItem>
      Week Three
    </WeekItem>
    <Divider />
    <WeekItem>
      Week Four
    </WeekItem>
  </View>
);

WeekList.propTypes = {

};

WeekList.defaultProps = {

};

export default WeekList;

