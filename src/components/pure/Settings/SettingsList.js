import React from 'react';
import PropTypes from 'prop-types';
import { View, Linking, TouchableOpacity } from 'react-native';
import { Caption, Divider, Text } from '@shoutem/ui';
import SettingsItem from './SettingsItem';
import { EXERCISES } from '../../../constants';
import { Button } from '../Button';

const styles = {
  textDecorationLine: 'underline',
  color: '#2196F3',
};

const buyMeABeer = () => {
  Linking.openURL('https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=23NNWWCDLLYXA');
};

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
    <Divider styleName="section-header">
      <Caption>Units</Caption>
    </Divider>
    <Button onPress={props.selectMetric} styleName={props.metricSelected ? 'secondary' : undefined}> Metric </Button>
    <Divider />
    <Button onPress={props.selectImperial} styleName={props.imperialSelected ? 'secondary' : undefined}> Imperial </Button>
    <Divider />
    <Divider />
    <TouchableOpacity onPress={buyMeABeer}>
      <Text style={styles}>
        If you like fivethreeone, feel free to
        buy me a beer
      </Text>
    </TouchableOpacity>
  </View>
);

SettingsList.propTypes = {
  match: PropTypes.object.isRequired,
  selectMetric: PropTypes.func.isRequired,
  metricSelected: PropTypes.bool.isRequired,
  selectImperial: PropTypes.func.isRequired,
  imperialSelected: PropTypes.bool.isRequired,
};

export default SettingsList;
