import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Caption, Divider } from '@shoutem/ui';
import SettingsItem from './SettingsItem';
import { EXERCISES } from '../../../constants';


const SettingsList = props => (
  <View>
    <Divider styleName="section-header">
      <Caption>WEIGHTS</Caption>
    </Divider>
    <SettingsItem to={`${props.match.url}/exercise/${EXERCISES.BENCH}`}>
      Bench
    </SettingsItem>
    <Divider />
    <SettingsItem to={`${props.match.url}/exercise/${EXERCISES.SQUAT}`}>
      Squat
    </SettingsItem>
    <Divider />
    <SettingsItem to={`${props.match.url}/exercise/${EXERCISES.OVERHEAD}`}>
      Overhead
    </SettingsItem>
    <Divider />
    <SettingsItem to={`${props.match.url}/exercise/${EXERCISES.DEADLIFT}`}>
      Deadlift
    </SettingsItem>
    <Divider />
  </View>
);

SettingsList.propTypes = {
  match: PropTypes.object.isRequired,
};

export default SettingsList;
